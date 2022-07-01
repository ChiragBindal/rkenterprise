const path = require('path');
const express = require('express');
const morgan = require('morgan');
const productRouter = require('./Router/productRouter');
const userRouter = require('./Router/userRouter');
// const cartRouter = require('./Router/cartRouter');
const rkError = require('./UtilsRk/rkError');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');

// Middleware
const app = express();
app.use(cors());
// Serving static files
app.use(express.static(`${__dirname}/public`));

// Security HTTP headers
app.use(helmet());

//Body parser , reading data from body in req.body
app.use(express.json({limit : '10kb'}));
app.use(cookieParser());

app.use(mongoSanitize());

// Data Sanitizaiton against xss
app.use(xss());
const limiter = rateLimit({
    max : 100,
    windowMs : 60*60*1000,
    message : 'Too many requests from this api,Please try again in an hour!'
});

app.use('/api' , limiter);

// Using morgan 
app.use(morgan('dev'));

// Making Routes
app.use('/api/v1/products' , productRouter);
app.use('/api/v1/users' , userRouter);
// app.use('/api/v1/carts' , cartRouter);


// Defining the error middleware
app.all('*' , (req , res, next)=>{
    next(new rkError(`Cannot find ${req.originalUrl} on this server!` , 404))
});

// Implementing Global Error Handler


// exporting 
module.exports = app;