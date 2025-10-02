import ApiResponse from "../utils/apiResponse.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";
import {Request, Response} from 'express'

const healthCheck = asyncHandler(async(req: Request, res: Response) => {
    console.log("meow meow!")
    res.status(200).json(new ApiResponse(200, {message: "server is running at fullspeed!"}))
})

export {healthCheck}