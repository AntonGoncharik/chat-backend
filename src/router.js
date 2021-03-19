const express = require('express');

const routes = require('./config');
const authRouter = require('./auth/router');
const usersRouter = require('./users/router');
const roomsRouter = require('./rooms/router');

const router = express.Router();

router.use('/', authRouter);
router.use(routes.routes.users.main, usersRouter);
router.use(routes.routes.rooms.main, roomsRouter);

module.exports = router;
