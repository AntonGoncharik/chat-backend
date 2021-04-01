const service = require('./service');

const createMessage = async (io, userId, roomId, text) => {
  try {
    const message = await service.createMessage(userId, roomId, text);

    sendMessage(io, roomId, message);
  } catch (error) {
    console.log(error);
  }
};

const sendMessage = (io, roomId, message) => {
  io.to(roomId).emit('messages:create', message);
};

module.exports = { createMessage };
