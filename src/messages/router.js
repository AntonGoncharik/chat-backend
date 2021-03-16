const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    const messages = await service.getMessages();
    journal.auth.info('GET RETURN MESSAGES');

    res.status(200).json(messages);
  } catch (error) {
    journal.auth.error(`GET RETURN MESSAGES ${error}`);
    next(error);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const message = await service.createMessage();
    journal.auth.info('POST CREATE MESSAGE');

    res.status(200).json(message);
  } catch (error) {
    journal.auth.error(`POST CREATE MESSAGE ${error}`);
    next(error);
  }
});

router.route('/').patch(async (req, res, next) => {
  try {
    const message = await service.updateMessage();
    journal.auth.info('PATCH UPDATE MESSAGE');

    res.status(200).json(message);
  } catch (error) {
    journal.auth.error(`PATCH UPDATE MESSAGE ${error}`);
    next(error);
  }
});

router.route('/').delete(async (req, res, next) => {
  try {
    const message = await service.deleteMessage();
    journal.auth.info('DELETE MESSAGE');

    res.status(200).json(message);
  } catch (error) {
    journal.auth.error(`DELETE MESSAGE ${error}`);
    next(error);
  }
});

module.exports = router;
