const express = require('express');

const router = require('./router');

const app = express();
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

module.exports = app;
