import { DBPORT, DBNAME, } from '../config/environment.config';
import { Sequelize } from 'sequelize';
import { initializeUserModel } from '../model/user.model';
import { initializeAddressModel } from '../model/address.model';
import { initializePostModel } from '../model/post.model';

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



// Relationships.group(Account, WaitingList, Booking, EventsModel);

//, Account, WaitingList, Booking, EventsModel 
export { db };
