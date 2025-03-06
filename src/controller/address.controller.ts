import ApiResponse from "../config/response.config";
import AddressService from "../service/address.service";
import { Request, Response } from 'express';


class AddressController {
    static async getAddressByUserId(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.params.userID);
            const response = await AddressService.getAddressByUserId(userId);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }

    static async createOrUpdateAddress(req: Request, res: Response): Promise<void> {
        try {
            const response = await AddressService.createOrUpdateAddress(req.body);
            res.status(response.code).json(response.body);
        } catch (error) {
            res.status(ApiResponse.code.server_error).json({ error: true, message: `${ApiResponse.fail.server}: ${error}` });
        }
    }
}
export default AddressController;