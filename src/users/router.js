const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route('/').post(async (req, res, next) => {
  try {
    const user = await service.createUser(req.body.email, req.body.password);
    journal.auth.info('POST CREATE USER');

    res.status(200).json(user);
  } catch (error) {
    journal.auth.error(`POST CREATE USER ${error}`);
    next(error);
  }
});

router.route('/').get(async (req, res, next) => {
  try {
    const users = await service.getUsers();
    journal.auth.info('GET RETURN USERS');

    res.status(200).json(users);
  } catch (error) {
    journal.auth.error(`GET RETURN USERS ${error}`);
    next(error);
  }
});

module.exports = router;
