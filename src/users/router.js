const express = require('express');

const journal = require('../modules/logger');
const service = require('./service');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    const users = await service.getUsers(req.query, req.headers.authorization.split(' ')[1]);
    journal.auth.info('GET RETURN USERS');

    res.status(200).json(users);
  } catch (error) {
    journal.auth.error(`GET RETURN USERS ${error}`);
    next(error);
  }
});

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

router.route('/').patch(async (req, res, next) => {
  try {
    const user = await service.updateUser(req.body.id, req.body.data);
    journal.auth.info('PATCH UPDATE USER');

    res.status(200).json(user);
  } catch (error) {
    journal.auth.error(`PATCH UPDATE USER ${error}`);
    next(error);
  }
});

router.route('/').delete(async (req, res, next) => {
  try {
    const user = await service.deleteUser();
    journal.auth.info('DELETE USER');

    res.status(200).json(user);
  } catch (error) {
    journal.auth.error(`DELETE USER ${error}`);
    next(error);
  }
});

module.exports = router;
