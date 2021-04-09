const express = require('express');

const service = require('./service');
const { routes } = require('../config');
const journal = require('../modules/logger');

const router = express.Router();

router.route(routes.authorize.signin).post(async (req, res, next) => {
  try {
    const user = await service.signinUser(req.body.email, req.body.password);
    journal.auth.info(`POST signin USER EMAIL ${req.body.email} PASSWORD ${req.body.password}`);

    res.status(200).json(user);
  } catch (error) {
    journal.auth.error(`POST signin ${error}`);
    next(error);
  }
});

router.route(routes.authorize.signout).post(async (req, res, next) => {
  try {
    await service.signoutUser(req.body.id);
    journal.auth.info(`POST signout USER ${req.body.id}`);

    res.status(200).json({});
  } catch (error) {
    journal.auth.error(`POST signout USER ${req.body.id} ${error}`);
    next(error);
  }
});

module.exports = router;
