const connectUser = (io) => {
  io.emit('users:connect', io.sockets.sockets.size);
};

const disconnectUser = (io) => {
  io.emit('users:disconnect', io.sockets.sockets.size);
};

module.exports = { connectUser, disconnectUser };
