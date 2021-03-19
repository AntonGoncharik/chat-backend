const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    const messages = await service.getMessages(req.query.roomId, req.query.page, req.query.records);
    journal.messages.info('GET RETURN MESSAGES');

    res.status(200).json(messages);
  } catch (error) {
    journal.messages.error(`GET RETURN MESSAGES ${error}`);
    next(error);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const message = await service.createMessage(req.body);
    journal.messages.info('POST CREATE MESSAGE');

    res.status(200).json(message);
  } catch (error) {
    journal.messages.error(`POST CREATE MESSAGE ${error}`);
    next(error);
  }
});

router.route('/').patch(async (req, res, next) => {
  try {
    const message = await service.updateMessage(req.body);
    journal.messages.info('PATCH UPDATE MESSAGE');

    res.status(200).json(message);
  } catch (error) {
    journal.messages.error(`PATCH UPDATE MESSAGE ${error}`);
    next(error);
  }
});

router.route('/').delete(async (req, res, next) => {
  try {
    const message = await service.deleteMessage(req.body.id);
    journal.messages.info('DELETE MESSAGE');

    res.status(200).json(message);
  } catch (error) {
    journal.messages.error(`DELETE MESSAGE ${error}`);
    next(error);
  }
});

module.exports = router;
