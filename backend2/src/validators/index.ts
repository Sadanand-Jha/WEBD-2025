import { body } from "express-validator";


const userRegisterValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Provide the email Id")
        .isEmail()
        .withMessage("Provide a valid email id"),
        body("userName")
        .trim()
        .notEmpty()
        .withMessage("Provide a valid username!")
        .isLowercase()
        .withMessage("the username should be in lowercase")
        .isLength({min: 3})
        .withMessage("Username should be atleast three characters long!"),
        body("password")
        .trim()
        .notEmpty()
        .withMessage("Provide a valid password!")
        .isLength({min: 8})
        .withMessage("Password should be of atleast 8 characters!")
    ]
}

const userLoginValidator = () => {
    return [
        body("email").optional().isEmail().withMessage("Provide a valid email Id"),
        body("password").notEmpty().withMessage("Enter valid password!")
    ]
}

export {userRegisterValidator, userLoginValidator}