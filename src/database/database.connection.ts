import { DBPORT, DBNAME, } from '../config/environment.config';
import { Sequelize } from 'sequelize';
import { initializeUserModel, User } from '../model/user.model';
import { Address, initializeAddressModel } from '../model/address.model';
import { initializePostModel, Post } from '../model/post.model';
import Relationships from './database.relationship';

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.DATABASE_NAME, // SQLite database file
    logging: false, // Disable logging (optional)
});

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = initializeUserModel(sequelize);
db.address = initializeAddressModel(sequelize);
db.post = initializePostModel(sequelize)


Relationships.group(User, Address, Post);


export { db };
