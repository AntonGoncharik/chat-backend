const usersSocket = require('./users/socket');
const roomsSocket = require('./rooms/socket');
const messagesSocket = require('./messages/socket');

let socketList = [];

const listenSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('disconnect', (reason) => {
      usersSocket.disconnectUser(io);
      socketList = socketList.filter((item) => item.socketId !== socket.id);
    });
    socket.on('users:connect', (userId) => {
      usersSocket.connectUser(io);
      socketList = [...socketList, { socketId: socket.id, userId: userId }];
    });
    socket.on('rooms:create', (hostId, guestId, name) => {
      roomsSocket.createRoom(io, socketList, hostId, guestId, name);
    });
    socket.on('rooms:update', () => {
      roomsSocket.updateRoom();
    });
    socket.on('messages:create', (userId, roomId, text) => {
      messagesSocket.createMessage(io, userId, roomId, text);
    });
  });
};

module.exports = listenSocket;
