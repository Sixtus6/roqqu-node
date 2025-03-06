import { Router } from "express";
import PostController from "../controllers/post.controller";
import { validatePost } from "../middleware/validators/post.validator";

const postRouter = Router();
postRouter.get('/', PostController.getPostsByUser); // ?userId=1
postRouter.post('/', validatePost, PostController.createPost);
postRouter.delete('/:id', PostController.deletePost);

export default postRouter;
