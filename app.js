// MODULES
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const viewRoutes = require('./routes/viewRoutes');
const userRoutes = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express(); 

// Set view engine and views folder
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// GLOBAL MIDDLEWARES

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

app.use(globalErrorHandler);

module.exports = app;