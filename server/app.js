const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/connection');
// const User = require('./model/userSchema');

const PORT = process.env.PORT;


//Middleware
const middleware = (req, res, next) => {
    console.log('Running Middleware');
    next();
}

app.get('/', (req,res) => {
    res.send('This is a Home Page');
});
app.get('/about', middleware, (req, res) => {
    res.send('This is About Page');
});
app.get('contact', (req,res) => {
    res.send('This is a Contact Page');
});
app.get('login', (req,res) => {
    res.send('This is a Login Page');
});
app.get('register', (req,res) => {
    res.send('This is a Registration Page');
});
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})