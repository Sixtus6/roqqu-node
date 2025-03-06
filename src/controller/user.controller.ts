import { Request, Response } from 'express';

import { validationResult } from 'express-validator';
import UserService from '../service/user.service';

class UserController {
    static async createUser(req: Request, res: Response): Promise<void> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        try {
            const response = await UserService.createUser(req.body);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(500).json({ error: true, message: `Internal Server Error: ${error}` });
        }
    }

    static async getUsers(req: Request, res: Response): Promise<void> {
        try {
            const { pageNumber = 0, pageSize = 10 } = req.query;
            const response = await UserService.getAllUsers(Number(pageNumber), Number(pageSize));
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(500).json({ error: true, message: `Internal Server Error: ${error}` });
        }
    }

    static async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const response = await UserService.getUserById(req.params.id);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(500).json({ error: true, message: `Internal Server Error: ${error}` });
        }
    }
}

export default UserController;