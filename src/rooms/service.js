const ErrorApp = require('../errors/error-app');

const repository = require('./repository');

const getRooms = async (userId) => {
  try {
    if (userId) {
      throw new ErrorApp('Not transferred user id', 400);
    }

    const result = await repository.getRooms(userId);

    return result;
  } catch (error) {
    throw error;
  }
};

const createRoom = async (name, userId) => {
  try {
    if (!name) {
      throw new ErrorApp('Not transferred name of room', 400);
    }

    const data = { name, users: [{ userId, lastReadMessageId: null }] };

    const result = await repository.createRoom(data);

    return result;
  } catch (error) {
    throw error;
  }
};

const updateRoom = async (data) => {
  try {
    if (!data.roomId) {
      throw new ErrorApp('Not transferred room id', 400);
    }

    const resultRoom = await repository.getRoomById(data.roomId);

    if (!resultRoom) {
      throw new ErrorApp('Room not found', 404);
    }

    const updateData = {};
    if (data.name) {
      updateData.name = data.name;
    }
    if (data.userId && data.addUser) {
      updateData.users = [
        ...resultRoom.users,
        { userId: data.userId, lastReadMessageId: null },
      ];
    }
    if (data.userId && data.updateUser) {
      updateData.users = [
        ...resultRoom.users.filter((item) => item.userId !== data.userId),
        { userId: data.userId, lastReadMessageId: data.lastReadMessageId },
      ];
    }
    if (data.userId && data.deleteUser) {
      updateData.users = resultRoom.users.filter((item) => item.userId !== data.userId);
    }

    const result = await repository.updateRoom(data.roomId, updateData);

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
