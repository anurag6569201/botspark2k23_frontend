const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test", {
        });
        console.log('MongoDB connection SUCCESS');
    }
    catch (error) {
        console.error('MongoDB connection Faulty');
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = connectDB;