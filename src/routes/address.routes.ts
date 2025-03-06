import { Router } from "express";
import AddressController from "../controller/address.controller";
import { validateAddress } from "../validator/address.validator";

const addressRouter = Router();
addressRouter.get('/:userID', AddressController.getAddressByUserId);
addressRouter.post('/', validateAddress, AddressController.createAddress);
addressRouter.patch('/:userID', validateAddress, AddressController.updateAddress);

export default addressRouter;