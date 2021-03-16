const repository = require('./repository');

const getRooms = async () => {
  try {
    const result = await repository.getRooms();

    return result;
  } catch (error) {
    throw error;
  }
};

const createRoom = async () => {
  try {
    const result = await repository.createRoom();

    return result;
  } catch (error) {
    throw error;
  }
};

const updateRoom = async () => {
  try {
    const result = await repository.updateRoom();

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async () => {
  try {
    const result = await repository.deleteRoom();

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
