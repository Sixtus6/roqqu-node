import ApiResponse from "../config/response.config";
import { Address } from "../model/address.model";
import { User } from "../model/user.model";

class AddressService {
    static async getAddressByUserId(userId: number): Promise<any> {
        const address = await Address.findOne({ where: { userId } });
        if (!address) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('Address') } };
        }
        return { code: ApiResponse.code.success, body: { error: false, message: ApiResponse.pass.read, data: address } };
    }

    static async createOrUpdateAddress(body: any): Promise<any> {
        const user = await User.findByPk(body.userId);
        if (!user) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('User') } };
        }

        const existingAddress = await Address.findOne({ where: { userId: body.userId } });
        if (existingAddress) {
            await existingAddress.update(body);
            return { code: ApiResponse.code.success, body: { error: false, message: 'Address updated successfully', data: existingAddress } };
        }

        const newAddress = await Address.create(body);
        return { code: ApiResponse.code.create, body: { error: false, message: ApiResponse.pass.create, data: newAddress } };
    }
}
export default AddressService;