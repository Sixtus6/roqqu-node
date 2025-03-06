// import { Account, Booking, WaitingList } from './database.connection';
// import { EventsModel } from './event.model';

import { Address } from "../models/address.model";
import { Post } from "../models/post.model";
import { User } from "../models/user.model";



class Relationships {

    static group(UserModel: typeof User, AddressModel: typeof Address, PostModel: typeof Post): void {
        UserModel.hasOne(AddressModel, { foreignKey: 'userId', as: 'address' });
        UserModel.hasMany(PostModel, { foreignKey: 'userId', as: 'posts' });
        AddressModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
        PostModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });

    }
}

export default Relationships;