import { Request, Response } from 'express';

import { validationResult } from 'express-validator';
import UserService from '../services/user.service';
import ApiResponse from '../config/response.config';
class UserController {
    static async createUser(req: Request, res: Response): Promise<void> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(ApiResponse.code.bad_request).json({ errors: errors.array() });
            return;
        }
        try {
            const response = await UserService.createUser(req.body);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }

    static async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const pageNumber = Math.max(1, parseInt(req.query.pageNumber as string) || 1); // Default to 1
            const pageSize = parseInt(req.query.pageSize as string) || 10;
            const response = await UserService.getAllUsers(pageNumber, pageSize);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const response = await UserService.getUserById(req.params.id);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }

    static async getUserCount(req: Request, res: Response): Promise<void> {
        try {
            const response = await UserService.getUserCount();
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }
}
export default UserController;