import { Router } from "express";
import UserController from "../controller/user.controller";

const userRoute = Router();
userRoute.post('/', UserController.createUser);
userRoute.get('/', UserController.getUsers); // Use ?pageNumber & ?pageSize
userRoute.get('/count', UserController.getUserCount);
userRoute.get('/:id', UserController.getUserById);

export default userRoute;