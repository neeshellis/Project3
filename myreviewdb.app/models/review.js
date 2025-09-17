const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Review extends Model { }
// Sequelize will create this table if it doesn't exist on startup

const User=require("./user");
const Booking = require("./booking");

Review.init({

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
bookingid: {
        type: DataTypes.INTEGER, allowNull: true, required: false,
        references: {
            model: Booking, //reference to another model
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
review: {
type: DataTypes.STRING, allowNull: false
},
rating: {
type: DataTypes.INTEGER, allowNull: false
},

}, {
sequelize: sequelizeInstance, 
modelName: 'reviews', //name the model (table)lowercase and plural is using Mongo
timestamps: true, 
freezeTableName: true
}
);
module.exports = Review;