import registerUser from "../controllers/auth.controller.ts";
import { Router } from "express";


const router = Router()

router.route('/register').post(registerUser)

export default router