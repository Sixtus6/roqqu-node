import { Router } from "express";
import PostController from "../controller/post.controller";
import { validatePost } from "../validator/post.validator";
const router = Router();
router.get('/', PostController.getPostsByUser); // ?userId=1
router.post('/', validatePost, PostController.createPost);
router.delete('/:id', PostController.deletePost);

export default router;
