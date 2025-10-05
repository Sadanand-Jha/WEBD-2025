import { validationResult, ValidationError } from "express-validator";
import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/apiError.ts"; // Assuming ApiError is a class

/**
 * A middleware to validate request data using express-validator.
 * If validation fails, it throws a structured ApiError.
 */
export const validate = (req: Request, res: Response, next: NextFunction): void => {
    // 1. Run validation and get the result
    const errors = validationResult(req);

    // 2. If there are no errors, proceed to the next middleware
    if (errors.isEmpty()) {
        return next();
    }

    // 3. If there are errors, map them to a structured format
    // It's more idiomatic to use .map() to transform an array directly
    const extractedErrors = errors.array().map((err: ValidationError) => {
        // The 'type' property helps identify the kind of error.
        // For field-specific errors, 'path' is the property for the field name.
        if (err.type === 'field') {
            return { [err.path]: err.msg };
        }
        // For general errors, you might use a generic key
        return { general: err.msg };
    });

    // 4. Throw a custom error that can be caught by an error-handling middleware
    // Note: A common alternative is to call `next(new ApiError(...))`
    throw new ApiError(422, "Received data is not valid", extractedErrors);
};