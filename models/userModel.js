const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name.']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'A user must have a male or female gender.']
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        required: [true, 'A user must have an active or inactive status.']
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;