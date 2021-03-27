const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route(routes.authorize.login).post(async (req, res, next) => {
  try {
    const user = await service.loginUser(req.body.email, req.body.password);
    journal.auth.info(`POST LOGIN USER EMAIL ${req.body.email} PASSWORD ${req.body.password}`);

    res.status(200).json(user);
  } catch (error) {
    journal.auth.error(`POST LOGIN ${error}`);
    next(error);
  }
});

router.route(routes.authorize.logout).post(async (req, res, next) => {
  try {
    await service.logoutUser(req.body.id);
    journal.auth.info(`POST LOGOUT USER ${req.body.id}`);

    res.status(200).json({});
  } catch (error) {
    journal.auth.error(`POST LOGOUT USER ${req.body.id} ${error}`);
    next(error);
  }
});

module.exports = router;
