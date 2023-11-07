const User = require('./../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async(req, res, next) => {
    const users = await User.find();

    res.status(200).render('users', {
        title: 'User Management System',
        users
    });
});

exports.getNewUserForm = (req, res) => {
    res.status(200).render('newUser', {
        title: 'Create New User'
    });
}

exports.getUpdateUserForm = (req, res) => {
    res.status(200).render('updateUser', {
        title: 'Update a User'
    });
}