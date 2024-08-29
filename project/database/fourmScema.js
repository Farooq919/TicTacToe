const mongoose = require('mongoose');


const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    problemType: {
        type: String,
        required: false,
        enum: [
            "Not working properly",
            "Not Responsive",
            "Just want to say thank you"
        ]
    },
    message: {
        type: String,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const form = mongoose.model('Fourm', formSchema);
module.exports = {form};

