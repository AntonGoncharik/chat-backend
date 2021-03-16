const repository = require('./repository');

const getRooms = async () => {
  try {
    const rooms = await repository.getRooms();

    return rooms;
  } catch (error) {
    throw error;
  }
};

const createRoom = async () => {
  try {
    const room = await repository.createRoom();

    return room;
  } catch (error) {
    throw error;
  }
};

const updateRoom = async () => {
  try {
    const room = await repository.updateRoom();

    return room;
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async () => {
  try {
    const room = await repository.deleteRoom();

    return room;
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
