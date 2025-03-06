import { Router } from "express";
import UserController from "../controller/user.controller";
import { validateUser } from "../validator/user.validator";

const userRoute = Router();
userRoute.post('/', validateUser, UserController.createUser);
userRoute.get('/', UserController.getUsers); // Use ?pageNumber & ?pageSize
userRoute.get('/count', UserController.getUserCount);
userRoute.get('/:id', UserController.getUserById);

export default userRoute;