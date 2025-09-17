const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Booking extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");

Booking.init({

id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
userID: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: User, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },

accommodation: {
type: DataTypes.STRING, allowNull: false
},
datein: {
type: DataTypes.DATE, allowNull: false
},
dateout: {
type: DataTypes.DATE, allowNull: false
},
nights: {
type: DataTypes.INTEGER, allowNull: false
},

}, {
sequelize: sequelizeInstance, 
modelName: 'bookings', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Booking;