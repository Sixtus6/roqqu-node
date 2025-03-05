import { Association, DataTypes, Model, Sequelize } from 'sequelize';
import { User } from './user.model';


class Post extends Model {
    public id!: number;
    public userId!: number;
    public title!: string;
    public body!: string;
}

const initializePostModel = (sequelize: Sequelize) => {
    Post.init({
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
        title: { type: DataTypes.STRING, allowNull: false },
        body: { type: DataTypes.TEXT, allowNull: false },
    }, {
        sequelize,
        tableName: 'posts',
        timestamps: true,
    });

    return Post;
};

export { Post, initializePostModel };
