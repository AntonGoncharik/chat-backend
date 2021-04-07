const ErrorApp = require('../errors/error-app');

const repository = require('./repository');

const getRooms = async (userId, page = 1, records = 20) => {
  try {
    if (!userId) {
      throw new ErrorApp('Not transferred user id', 400);
    }

    const result = await repository.getRooms(userId, +page, +records);

    return result;
  } catch (error) {
    throw error;
  }
};

const createRoom = async (name, userId) => {
  try {
    if (!userId) {
      throw new ErrorApp('Not transferred user id', 400);
    }
    if (!name) {
      throw new ErrorApp('Not transferred name of room', 400);
    }

    const body = { name, users: [{ userId, lastReadMessageId: null }] };

    const result = await repository.createRoom(body);

    return result;
  } catch (error) {
    throw error;
  }
};

const updateRoom = async (id, data) => {
  try {
    if (!id) {
      throw new ErrorApp('Not transferred room id', 400);
    }

    const resultRoom = await repository.getRoomById(id);

    if (!resultRoom) {
      throw new ErrorApp('Room not found', 404);
    }

    const body = {};
    if (data.name) {
      body.name = data.name;
    }
    if (data.userId && data.addUser) {
      body.users = [
        ...resultRoom.users,
        { userId: data.userId, lastReadMessageId: null },
      ];
    }
    if (data.userId && data.updateUser) {
      body.users = [
        ...resultRoom.users.filter((item) => item.userId !== data.userId),
        { userId: data.userId, lastReadMessageId: data.lastReadMessageId },
      ];
    }
    if (data.userId && data.deleteUser) {
      body.users = resultRoom.users.filter((item) => item.userId !== data.userId);
    }

    const result = await repository.updateRoom(id, body);

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async (id) => {
  try {
    const result = await repository.deleteRoom(id);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
