import { Router } from "express";
import AddressController from "../controllers/address.controller";
import { validateAddress, validateAddressPatch } from "../validators/address.validator";

const addressRouter = Router();
addressRouter.get('/:userID', AddressController.getAddressByUserId);
addressRouter.post('/', validateAddress, AddressController.createAddress);
addressRouter.patch('/:userID', validateAddressPatch, AddressController.updateAddress);

export default addressRouter;