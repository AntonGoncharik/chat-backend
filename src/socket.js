const usersSocket = require('./users/socket');

const listenSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('disconnect', (reason) => usersSocket.disconnectUser(io, socket.id));
    socket.on('connectUser', (userId) => usersSocket.connectUser(io, userId, socket.id));
  });
};

module.exports = listenSocket;
