// MODULES
const xss = require('xss-clean');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');

const viewRoutes = require('./routes/viewRoutes');
const userRoutes = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express(); 

// Set view engine and views folder
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES
// implementing CORS & handling options request
app.use(cors());
app.options('*', cors());

// set security HTTP headers
app.use(helmet({
    contentSecurityPolicy: false,
    xDownloadOptions: false,
}));

// data sanitization against NoSQL query injection
app.use(mongoSanitize());

// data sanitization against XSS
app.use(xss());

// body parser to access data in req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// cookie parser to access cookies in req.cookies
app.use(cookieParser());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

app.use('/', viewRoutes); 
app.use('/api/users', userRoutes);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`), 404);
});

app.use(globalErrorHandler);

module.exports = app;