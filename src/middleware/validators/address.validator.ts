import { check, validationResult } from "express-validator";

import { NextFunction, Request, Response } from "express";
import ApiResponse from "../../config/response.config";

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

export const validateAddressPatch = [
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