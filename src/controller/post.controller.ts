import ApiResponse from "../config/response.config";
import { NextFunction, Request, Response } from "express";
import PostService from "../service/post.service";
class PostController {
    static async getPostsByUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.query.userId as string);
            const response = await PostService.getPostsByUser(userId);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }

    static async createPost(req: Request, res: Response): Promise<void> {
        try {
            const response = await PostService.createPost(req.body);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }

    static async deletePost(req: Request, res: Response): Promise<void> {
        try {
            const postId = parseInt(req.params.id);
            const response = await PostService.deletePost(postId);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }
}
export default PostController;
