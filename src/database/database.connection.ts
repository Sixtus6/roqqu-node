import { DBPORT, DBNAME, } from '../config/environment.config';
import { Sequelize } from 'sequelize';
// import { Account, initializeAccountModel } from './user.model';

// import Relationships from './database.relationship';
// import { Booking, initializeBookingModel } from './booking.model';
// import { EventsModel, initializeEventModel } from './event.model';
// import { initializeWaitingListModel, WaitingList } from './waiting_list.model';



const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: process.env.DATABASE_NAME, // SQLite database file
    logging: false, // Disable logging (optional)
});

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.account = initializeAccountModel(sequelize);
// db.booking = initializeBookingModel(sequelize);
// db.event = initializeEventModel(sequelize);
// db.waitinglist = initializeWaitingListModel(sequelize);


// Relationships.group(Account, WaitingList, Booking, EventsModel);

//, Account, WaitingList, Booking, EventsModel 
export { db };
