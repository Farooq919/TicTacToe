
const mongoose = require('mongoose');


const connectToDatabase = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        return true;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        return false;
    }
};

module.exports = connectToDatabase;


