const express = require('express');

const { routes } = require('../config');
const journal = require('../modules/logger');

const service = require('./service');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
  try {
    const rooms = await service.getRooms(req.body.userId);
    journal.rooms.info('GET RETURN ROOMS');

    res.status(200).json(rooms);
  } catch (error) {
    journal.rooms.error(`GET RETURN ROOMS ${error}`);
    next(error);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const room = await service.createRoom(req.body.name, req.body.userId);
    journal.rooms.info('POST CREATE ROOM');

    res.status(200).json(room);
  } catch (error) {
    journal.rooms.error(`POST CREATE ROOM ${error}`);
    next(error);
  }
});

router.route('/').patch(async (req, res, next) => {
  try {
    const room = await service.updateRoom(req.body);
    journal.rooms.info('PATCH UPDATE ROOM');

    res.status(200).json(room);
  } catch (error) {
    journal.rooms.error(`PATCH UPDATE ROOM ${error}`);
    next(error);
  }
});

router.route('/').delete(async (req, res, next) => {
  try {
    const room = await service.deleteRoom(req.body.id);
    journal.rooms.info('DELETE ROOM');

    res.status(200).json(room);
  } catch (error) {
    journal.rooms.error(`DELETE ROOM ${error}`);
    next(error);
  }
});

module.exports = router;
