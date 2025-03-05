import bcrypt from 'bcryptjs';
import { Association, DataTypes, Model, Sequelize } from 'sequelize';
import { Post } from './post.model';
import { Address } from './address.model';

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;

    public static associations: {
        addresses: Association<User, Address>;
        posts: Association<User, Post>;
    };

    public async comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}

const initializeUserModel = (sequelize: Sequelize) => {
    User.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
    }, {
        sequelize,
        tableName: 'users',
        timestamps: true,
    });

    User.beforeCreate(async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
    });

    return User;
};

export { User, initializeUserModel };
