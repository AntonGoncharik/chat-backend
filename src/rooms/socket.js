const service = require('./service');

const createRoom = async (io, socketList, hostId, guestId, name) => {
  try {
    const room = await service.createRoom(name, hostId);
    const updatedRoom = await addToRoom(room._id.toString(), guestId);

    const host = socketList.find((item) => item.userId === hostId);
    joinToRoom(io, host.socketId, updatedRoom);

    const guest = socketList.find((item) => item.userId === guestId);
    if (guest) {
      joinToRoom(io, guest.socketId, updatedRoom);
    }

    sendRoom(io, 'rooms:create', updatedRoom);
  } catch (error) {
    console.log(error);
  }
};

const updateRoom = async () => {
  console.log(1);
};

const addToRoom = async (roomId, userId) => {
  try {
    const room = await service.updateRoom(roomId, { addUser: true, userId });

    return room;
  } catch (error) {
    console.log(error);
  }
};

const joinToRoom = (io, socketId, room) => {
  const socket = io.sockets.sockets.get(socketId);
  socket.join(room._id.toString());
};

const sendRoom = (io, type, room) => {
  io.to(room._id.toString()).emit(type, room);
};

const joinUserToRooms = async (io, socketId, userId) => {
  try {
    const rooms = await service.getRooms(userId, 1, 100000);

    if (rooms.length) {
      rooms.forEach((item) => {
        joinToRoom(io, socketId, item);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRoom, updateRoom, joinUserToRooms };
