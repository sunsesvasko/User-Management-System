const User = require('./../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getUser = catchAsync(async(req, res, next) => {
    const user = await User.findById({ _id: req.params.id });

    res.status(200).json({
        status: 'success',
        user
    })
});

exports.getAllUsers = catchAsync(async(req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        status: 'success',
        length: users.length,
        users
    })
});

exports.createUser = catchAsync(async(req, res, next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        user: newUser
    })
});

exports.updateUser = catchAsync(async(req, res, next) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!updatedUser) return next(new AppError('No user found with that ID', 404));

    res.status(200).json({
        status: 'success',
        user: updatedUser
    })
});

exports.deleteUser = catchAsync(async(req, res, next) => {
    const deletedUser = await User.findByIdAndDelete({ _id: req.params.id });

    if(!deletedUser) return next(new AppError('No user found with that ID', 404));

    res.status(204).json({
        status: 'success'
    })
});