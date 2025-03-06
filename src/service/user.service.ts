import { User } from "../model/user.model";

class UserService {
    static async createUser(body: any): Promise<any> {
        const existingUser = await User.findOne({ where: { email: body.email } });
        if (existingUser) {
            return { code: 409, body: { error: true, message: 'User already exists' } };
        }
        const user = await User.create(body);
        return { code: 201, body: { error: false, message: 'User created', data: user } };
    }

    static async getAllUsers(pageNumber: number, pageSize: number): Promise<any> {
        const users = await User.findAll({
            limit: pageSize,
            offset: pageNumber * pageSize,
            attributes: { exclude: ['password'] },
        });
        return { code: 200, body: { error: false, message: 'Users retrieved', data: users } };
    }

    static async getUserById(id: string): Promise<any> {
        const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        if (!user) {
            return { code: 404, body: { error: true, message: 'User not found' } };
        }
        return { code: 200, body: { error: false, message: 'User retrieved', data: user } };
    }
}

export default UserService;