import { Router } from "express";
import UserController from "../controller/user.controller";

const userRoute = Router();
userRoute.post('/', UserController.createUser);
userRoute.get('/:pageNumber?/:pageSize?', UserController.getUsers); // ?pageNumber=0&pageSize=10 (optional pagination)
userRoute.get('/count', UserController.getUserCount);
userRoute.get('/:id', UserController.getUserById);
export default userRoute;