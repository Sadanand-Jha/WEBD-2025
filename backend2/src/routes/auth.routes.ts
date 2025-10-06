import registerUser, { loginUser } from "../controllers/auth.controller.ts";
import { Router } from "express";
import { validate } from "../middlewares/validator.middleware.ts";
import { userLoginValidator, userRegisterValidator } from "../validators/index.ts";

const router = Router()

router.route('/register').post(userRegisterValidator(), validate, registerUser)
router.route('/login').post(userLoginValidator(), validate, loginUser)

export default router