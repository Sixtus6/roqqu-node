
import { check, validationResult } from "express-validator";
import ApiResponse from "../config/response.config";
import { NextFunction, Request, Response } from "express";

export const validatePost = [
    check('userId').isInt().withMessage('Valid userId is required'),
    check('title').notEmpty().withMessage('Title is required'),
    check('body').notEmpty().withMessage('Body is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(ApiResponse.code.bad_request).json({ errors: errors.array() });
        }
        next();
    }
];
