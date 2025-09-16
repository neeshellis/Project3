"use strict";
const axios = require('axios');
const Models = require('../models');
const { Op } = require("sequelize");
const User = require("../models/user")

// const storeData = async (table, body, res) => {
    const storeUsers= async () => {
    let response = await axios.get(`http://localhost:3000/Users/`);
    try {
        const array = response.data;
        console.log(array)
        for(let i of array) {
        console.log(i.createdAt, i.updatedAt)
//Format this according to your table
        const formatObj ={
            firstName: i.firstName,
            secondName: i.secondName,
            email: i.email,
            mobile:i.mobile,
            address: i.address
            // amount: i.amount
        };
//change Table to the name of your table
        let [newi, created ] = await Models.User.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }
    // res.send({message:'Data import complete.'})
}
    catch (err) {
        // res.send(err.message)
    }
}


// const storeData = async (table, body, res) => {
    const storeBooking = async () => {
    let response = await axios.get(`http://localhost:3000/Bookings/`);
    try {
        const array = response.data;
        console.log(array)
        for(let i of array) {
        console.log(i.createdAt, i.updatedAt)
//Format this according to your table
        const formatObj ={
            userID: i.userID,
            accommodation: i.accommodation,
            datein: i.datein,
            dateout: i.dateout,
            nights: i.nights
            // amount: i.amount
        };
//change Table to the name of your table
        let [newi, created ] = await Models.Booking.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }
    // res.send({message:'Data import complete.'})
}
    catch (err) {
        // res.send(err.message)
    }
}



// const storeData = async (table, body, res) => {
    const storeReview = async () => {
    let response = await axios.get(`http://localhost:3000/Reviews/`);
    try {
        const array = response.data;
        console.log(array)
        for(let i of array) {
        console.log(i.createdAt, i.updatedAt)
//Format this according to your table
        const formatObj ={
            userID: i.userID,
            bookingid: i.bookingid,
            accommodation: i.accommodation,
            datein: i.datein,
            review: i.rating,
            rating: i.rating
            // amount: i.amount
        };
//change Table to the name of your table
        let [newi, created ] = await Models.Review.findOrCreate({
            where: {id: i.id},
            defaults: i
        })
    }
    // res.send({message:'Data import complete.'})
}
    catch (err) {
        // res.send(err.message)
    }
}
module.exports = {
    storeUsers, storeBooking, storeReview
}

