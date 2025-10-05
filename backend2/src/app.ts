import express  from 'express'
import cors from 'cors'
import {Response, Request} from 'express'
// import { healthCheck } from './controllers/healthCheck.controller.js'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:8000/",
    credentials: true, 
    methods: ["GET", "POST", "DELETE", "UPDATE", "PATCH", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"]
}))

import  healthCheckrouter  from './routes/healthCheck.routes.ts'
app.use('/api/v1/healthcheck', healthCheckrouter)

import authRouter from './routes/auth.routes.ts'
app.use('/api/v1/auth', authRouter)


app.get('/testing', (req: Request, res: Response) => {
    res.send("IT IS STILL WORKING")
})

console.log("this is from app ")

export default app;