const connectUser = (io, userId, socketId) => {
  const sockets = io.of('/').sockets;

  let onlineUsers = 0;
  for (let socket of sockets) {
    onlineUsers += 1;
  }

  io.emit('connectUser', userId, onlineUsers);
};

const disconnectUser = (io, socketId) => {
  const sockets = io.of('/').sockets;

  let onlineUsers = 0;
  for (let socket of sockets) {
    onlineUsers += 1;
  }

  io.emit('disconnectUser', onlineUsers);
};

module.exports = { connectUser, disconnectUser };
