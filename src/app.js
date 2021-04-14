const express = require('express');
const cors = require('cors');

const config = require('./config');
const router = require('./router');
const usersMiddleware = require('./users/middleware');
const errorsMiddleware = require('./errors/middleware');

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(config.server.cors));
app.use('/avatars', express.static(`${process.env.PWD}/avatars`));
app.use(usersMiddleware.checkUser);
app.use('/', router);
app.use(errorsMiddleware.sendError);

module.exports = app;
