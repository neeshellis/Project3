'use strict'
const User = require('./user') //require the model
const Booking = require('./booking');
const Review = require('./review');



async function init() {
await User.sync(); 
await Booking.sync();
await Review.sync();// sync the model
// also sync any extra models here
};

init();

module.exports = {
User, Review, Booking// export the model
// also export any extra models here
};