const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    const rooms = await service.getRooms();
    journal.auth.info('GET RETURN ROOMS');

    res.status(200).json(rooms);
  } catch (error) {
    journal.auth.error(`GET RETURN ROOMS ${error}`);
    next(error);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const room = await service.createRoom();
    journal.auth.info('POST CREATE ROOM');

    res.status(200).json(room);
  } catch (error) {
    journal.auth.error(`POST CREATE ROOM ${error}`);
    next(error);
  }
});

router.route('/').patch(async (req, res, next) => {
  try {
    const room = await service.updateRoom();
    journal.auth.info('PATCH UPDATE ROOM');

    res.status(200).json(room);
  } catch (error) {
    journal.auth.error(`PATCH UPDATE ROOM ${error}`);
    next(error);
  }
});

router.route('/').delete(async (req, res, next) => {
  try {
    const room = await service.deleteRoom();
    journal.auth.info('DELETE ROOM');

    res.status(200).json(room);
  } catch (error) {
    journal.auth.error(`DELETE ROOM ${error}`);
    next(error);
  }
});

module.exports = router;
