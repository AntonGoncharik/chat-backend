const service = require('./service');

const connectUser = async (io) => {
  const allUsers = await service.getCountUsers();

  io.emit('users:connect', io.sockets.sockets.size, allUsers);
};

const disconnectUser = async (io) => {
  const allUsers = await service.getCountUsers();

  io.emit('users:disconnect', io.sockets.sockets.size, allUsers);
};

module.exports = { connectUser, disconnectUser };
