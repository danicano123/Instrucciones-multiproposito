const socketIo = require('socket.io');

const socket = {};

const connect = (server) => {
  console.log(Object.values(server).toString());
  socket.io = socketIo(server);
};
module.exports = {
  connect,
  socket,
};
