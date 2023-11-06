const User = require('./../models/userModel');

exports.getUser = (req, res, next) => {



    res.status(200).json({
        status: 'success',
        user: 'user'
    })
}

exports.getAllUsers = (req, res, next) => {



    res.status(200).json({
        status: 'success',
        length: 'test length',
        users: 'users'
    })
}

exports.createUser = (req, res, next) => {


    res.status(201).json({
        status: 'success',
        user: 'user'
    })
}

exports.updateUser = (req, res, next) => {



    res.status(200).json({
        status: 'success',
        user: 'user'
    })
}

exports.deleteUser = (req, res, next) => {



    res.status(204).json({
        status: 'success',
        user: 'user'
    })
}