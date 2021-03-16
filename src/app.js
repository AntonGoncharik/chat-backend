const express = require('express');

const checkUser = require('./users/middleware');

const router = require('./router');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', checkUser);
app.use('/', router);

module.exports = app;
