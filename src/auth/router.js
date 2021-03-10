const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route(routes.authorize.login).post(async (req, res, next) => {
  try {
    const user = await service.loginUser(req.body.email, req.body.password);

    res.status(200).json(user);
  } catch (error) {
    journal.auth.error(`ERROR POST /login ${error.stack}`);
    next(error);
  }
});

router.route(routes.authorize.logout).post(async (req, res, next) => {
  try {
    await service.logoutUser(req.body.fbToken, req.body.refreshToken);

    journal.auth.info(`Logout user ${req.user.id} token ${req.body.fbToken}`);

    res.status(200).json({});
  } catch (error) {
    journal.auth.error(`ERROR POST /logout user: ${req.user.email} token: ${req.body.fbToken} ${error.stack}`);
    next(error);
  }
});

module.exports = router;
