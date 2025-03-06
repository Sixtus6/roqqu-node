import { Router } from "express";
import PostController from "../controller/post.controller";
import { validatePost } from "../validator/post.validator";
const postRouter = Router();
postRouter.get('/', PostController.getPostsByUser); // ?userId=1
postRouter.post('/', validatePost, PostController.createPost);
postRouter.delete('/:id', PostController.deletePost);

export default postRouter;
