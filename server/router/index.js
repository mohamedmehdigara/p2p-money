const express = require('express');

const Router = express.Router();

const { signup, logout, login } = require('./auth-router');
const { isClient } = require('../controllers/middlewares');
const clientRouter = require('./client');

Router.post('/login', login);
Router.post('/signup', signup);
Router.post('/logout', logout);

Router.use('/client', isClient, clientRouter);

module.exports = Router;
