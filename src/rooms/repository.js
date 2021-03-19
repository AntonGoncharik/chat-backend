const Rooms = require('./model');

const getRoomById = async (id) => {
  try {
    const result = await Rooms.findById(id);

    return result;
  } catch (error) {
    throw error;
  }
};

const getRooms = async (userId, page = 1, records = 20) => {
  try {
    const result = await Rooms
      .find({ 'users.userId': userId }, { __v: 0 })
      .limit(records)
      .skip(records * (page - 1));

    return result;
  } catch (error) {
    throw error;
  }
};

const createRoom = async (data) => {
  try {
    const result = await new Rooms(data).save();

    return result;
  } catch (error) {
    throw error;
  }
};

const updateRoom = async (id, data) => {
  try {
    const result = await Rooms.findByIdAndUpdate(id, data, { new: true });

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteRoom = async (id) => {
  try {
    const result = await Rooms.deleteOne(id);

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getRoomById,
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom,
};
