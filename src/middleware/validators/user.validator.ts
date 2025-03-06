import { check, validationResult } from "express-validator";

import { NextFunction, Request, Response } from "express";
import ApiResponse from "../../config/response.config";

export const validateUser = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(ApiResponse.code.bad_request).json({ errors: errors.array() });
        }
        next();
    }
];