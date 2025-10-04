import mongoose from 'mongoose'
import { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt, { SignOptions } from 'jsonwebtoken'
import crypto from 'crypto'
import { Model, Document } from 'mongoose';

export interface IUser extends Document{
    avatar: {url: string, localPath: string},
    userName: string,
    email: string,
    fullName: string,
    password: string,
    isEmailVerified: boolean,
    refreshToken: string,
    forgotPasswordToken: string,
    forgotPasswordExpiry: Date,
    emailVerificationToken: string,
    emailVerificationExpiry: Date,
    generateTemporaryToken: Function,
    generateRefreshToken: Function,
    generateAccessToken: Function,
    isPasswordCorrect: Function
}


const UserSchema = new Schema({
    avatar: {
        type: {
            url: String,
            localPath: String
        },
        default: {
            url: '',
            localPath: ''
        }
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is Required!"]
    },
    isEmailVerified: {
        type: Boolean,
        default: true
    },
    refreshToken: {
        type: String,
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiry: {
        type: Date
    },
    emailVerificationToken: {
        type: String
    },
    emailVerificationExpiry: {
        type: Date
    }
}, {
    timestamps: true
})

UserSchema.pre<IUser>("save", async function (): Promise<any> {
    if (!this.isModified("password")) return
    this.password = await bcrypt.hash(this.password, 10)
})

UserSchema.methods.isPasswordCorrect = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password) // plain_password first and hashed_password second
}

UserSchema.methods.generateRefreshToken = function (): string {
    return jwt.sign({
        id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET as string,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        } as SignOptions
    )
}

UserSchema.methods.generateAccessToken = function (): string {
    return jwt.sign({
        id: this._id,
        email: this.email,
        username: this.userName
    },
        process.env.ACCESS_TOKEN_SECRET as string,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }  as SignOptions
    )
}

UserSchema.methods.generateTemporaryToken = function(): object{
    const unHashedToken: string = crypto.randomBytes(20).toString("hex")
    const hashedToken: string = crypto.createHash("sha256").update(unHashedToken).digest("hex")

    const tokenExpiry = Date.now() + (20 * 60 * 1000)
    return {unHashedToken, hashedToken, tokenExpiry}
}

const Users: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
export default Users