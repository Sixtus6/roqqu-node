import { check, validationResult } from "express-validator";
import ApiResponse from "../config/response.config";
import { NextFunction, Request, Response } from "express";

export const validateAddress = [
    check('userId').isInt().withMessage('Valid userId is required'),
    check('street').notEmpty().withMessage('Street is required'),
    check('city').notEmpty().withMessage('City is required'),
    check('state').notEmpty().withMessage('State is required'),
    check('zipCode').notEmpty().withMessage('Zip Code is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(ApiResponse.code.bad_request).json({ errors: errors.array() });
        }
        next();
    }
];