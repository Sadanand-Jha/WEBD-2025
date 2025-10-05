import Users, { IUser } from "../models/User.models.ts";
import ApiError from "../utils/apiError.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { Request, Response } from "express";
import sendEmail, { emailVerificationEmailMailGen } from "../utils/mail.ts";
import ApiResponse from "../utils/apiResponse.ts";

const generateRefreshTokenAndAccessToken = async function (userId: string) {
    try {
        const user: IUser | null = await Users.findById(userId)
        if (!user) return;
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

export default registerUser
export { generateRefreshTokenAndAccessToken }