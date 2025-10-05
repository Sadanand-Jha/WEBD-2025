import registerUser from "../controllers/auth.controller.ts";
import { Router } from "express";
import { validate } from "../middlewares/validator.middleware.ts";
import { userRegisterValidator } from "../validators/index.ts";

const router = Router()

router.route('/register').post(userRegisterValidator(), validate, registerUser)
// here the userregistervalidator is a function which runs to catch issues, validate is a middleware, registeruser is a controller

export default router