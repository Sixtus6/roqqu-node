import { Router } from "express";
import AddressController from "../controller/address.controller";
import { validateAddress, validateAddressPatch } from "../validator/address.validator";

const addressRouter = Router();
addressRouter.get('/:userID', AddressController.getAddressByUserId);
addressRouter.post('/', validateAddress, AddressController.createAddress);
addressRouter.patch('/:userID', validateAddressPatch, AddressController.updateAddress);

export default addressRouter;