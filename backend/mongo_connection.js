const mongoose = require('mongoose');

// Database connection

const connectToDatabase = () => {
    const mongodburl = "mongodb://localhost/dic";
    mongoose.connect(mongodburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4,
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected...');
    }).on('error', (err) => {
        console.log('Connection failed...');
        console.log(err);
    });
};

module.exports = connectToDatabase;