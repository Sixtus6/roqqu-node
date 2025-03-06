import ApiResponse from "../config/response.config";
import { User } from "../model/user.model";

class UserService {
    static async createUser(body: any): Promise<any> {
        const existingUser = await User.findOne({ where: { email: body.email } });
        if (existingUser) {
            return { code: ApiResponse.code.conflict, body: { error: true, message: ApiResponse.fail.account_conflict } };
        }
        const user = await User.create(body);
        return { code: ApiResponse.code.create, body: { error: false, message: ApiResponse.pass.register, data: user } };
    }

    static async getAllUsers(pageNumber: number, pageSize: number): Promise<any> {
        const users = await User.findAll({
            limit: pageSize,
            offset: pageNumber * pageSize,
            attributes: { exclude: ['password'] },
        });
        return { code: ApiResponse.code.success, body: { error: false, message: ApiResponse.pass.getUsers, data: users } };
    }

    static async getUserById(id: string): Promise<any> {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found("User") } };
        }
        return { code: ApiResponse.code.success, body: { error: false, message: ApiResponse.pass.getUsers, data: user } };
    }
}

export default UserService;