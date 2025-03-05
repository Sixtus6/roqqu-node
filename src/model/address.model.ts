import { Association, DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user.model';


class Address extends Model {
    public id!: number;
    public userId!: number;
    public street!: string;
    public city!: string;
    public state!: string;
    public zipCode!: string;
}

const initializeAddressModel = (sequelize: Sequelize) => {
    Address.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
        street: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        state: { type: DataTypes.STRING, allowNull: false },
        zipCode: { type: DataTypes.STRING, allowNull: false },
    }, {
        sequelize,
        tableName: 'addresses',
        timestamps: true,
    });

    return Address;
};

export { Address, initializeAddressModel };