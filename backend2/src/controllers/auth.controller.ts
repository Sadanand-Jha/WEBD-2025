import Users, { IUser } from "../models/User.models.ts";
import ApiError from "../utils/apiError.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { Request, Response } from "express";
import sendEmail, { emailVerificationEmailMailGen } from "../utils/mail.ts";
import ApiResponse from "../utils/apiResponse.ts";
import mongoose from 'mongoose'

const generateRefreshTokenAndAccessToken = async function (userId: mongoose.Types.ObjectId) {
    try {
        const user: IUser | null = await Users.findById(userId)
        if (!user) return new ApiError(400, "User not found!")
        const refreshToken: string = user.generateRefreshToken()
        const accessToken: string = user.generateAccessToken()

        user.refreshToken = refreshToken
        user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        return new ApiError(500, "Something went wrong while generating tokens!")
    }
}

const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { userName, email, password, role } = req.body

    const existedUser: IUser | null = await Users.findOne({
        $or: [{ userName }, { email }]
    })

    if (existedUser) {
        return res
            .status(400)
            .json(
                new ApiError(
                    400,
                    "User already exists!"
                )
            )
    }

    const user: IUser = await Users.create({
        email,
        userName,
        password
    })

    const { unHashedToken, hashedToken, tokenExpiry } = user.generateTemporaryToken()
    user.emailVerificationToken = hashedToken
    user.emailVerificationExpiry = tokenExpiry

    user.save({ validateBeforeSave: false })

    await sendEmail({ email: user.email, mailgenContent: emailVerificationEmailMailGen(userName, `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedToken}`), subject: "Email verification mail" })

    const createdUser = await Users.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user!")
    }

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                { user: createdUser },
                "User registered successfully and the verification email has been sent to the user!"
            )
        )
})

const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user: IUser | null = await Users.findOne({email})

    if (!user) {
        return res.status(400)
            .json(
                new ApiError(400, "User not found While registering!")
            )
    }

    // check if password is correct or not!
    if (!await user.isPasswordCorrect(password)) {
        return res.status(412)
            .json(
                new ApiError(412, "Password is not correct!")
            )
    }

    const tokenResult = await generateRefreshTokenAndAccessToken(user._id)

    if (tokenResult instanceof ApiError) {
        console.error("Token generation failed:", tokenResult.message);
        return;
    }

    const {accessToken, refreshToken} = tokenResult

    const loggedInUser = await Users.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user: loggedInUser,
            })
        )
})
export default registerUser
export { generateRefreshTokenAndAccessToken, loginUser }