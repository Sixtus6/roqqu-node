import ApiResponse from "../config/response.config";
import { Address } from "../model/address.model";
import { User } from "../model/user.model";

class UserService {

    static async createUser(body: any): Promise<any> {
        const existingUser = await User.findOne({ where: { email: body.email } });
        if (existingUser) {
            return { code: ApiResponse.code.conflict, body: { error: true, message: ApiResponse.fail.account_conflict } };
        }
        const user = await User.create(body);
        const { password, ...userWithoutPassword } = user.get({ plain: true });
        return { code: ApiResponse.code.create, body: { error: false, message: ApiResponse.pass.create, data: userWithoutPassword } };
    }

    static async getAllUsers(pageNumber: number, pageSize: number): Promise<any> {
        const { count, rows: users } = await User.findAndCountAll({
            limit: pageSize,
            offset: pageNumber * pageSize,
            attributes: { exclude: ['password'] },
        });
        return {
            code: ApiResponse.code.success,
            body: {
                error: false,
                message: ApiResponse.pass.getUsers,
                data: users,
                pagination: {
                    total: count,
                    pageNumber,
                    pageSize,
                    totalPages: Math.ceil(count / pageSize)
                }
            }
        };
    }

    static async getUserById(id: string): Promise<any> {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Address, as: 'address' }],
        });
        if (!user) {
            return { code: ApiResponse.code.not_found, body: { error: true, message: ApiResponse.fail.not_found('User') } };
        }
        return { code: ApiResponse.code.success, body: { error: false, message: ApiResponse.pass.getUser, data: user } };
    }

    static async getUserCount(): Promise<any> {
        const count = await User.count();
        console.log('count');
        return { code: ApiResponse.code.success, body: { error: false, message: ApiResponse.pass.userCount, data: { count } } };
    }

}
export default UserService;