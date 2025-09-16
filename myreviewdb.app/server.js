const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
res.json({ message: "Welcome to my SQL DB application." });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

let reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/reviews', reviewRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8081;


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});