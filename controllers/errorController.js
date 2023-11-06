const AppError = require('../utils/appError');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'Error';

    if(req.originalUrl.startsWith('/api')) {
        return res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        });
    }
    console.log('ERROR!', err);
    return res.status(err.statusCode).render('error', {
        title: 'Something went wrong!',
        msg: err.message
    });
}