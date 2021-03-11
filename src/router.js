const express = require('express');

const routes = require('./config');
const authRouter = require('./auth/router');
const usersRouter = require('./users/router');

const router = express.Router();

router.use('/', authRouter);
router.use(routes.routes.users.main, usersRouter);

module.exports = router;
