const mongoose = require('mongoose');
const http = require('http');

const config = require('./config');
const app = require('./app');
const journal = require('./modules/logger');
const listenSocket = require('./socket');

const server = http.createServer(app);
const io = require('socket.io')(server);

const start = async () => {
  try {
    await mongoose.connect(config.db.url, config.db.options);
    journal.server.info('DB CONNECTED');

    server.listen(config.server.port, () => {
      listenSocket(io);
      journal.server.info(`SERVER LAUNCHED ON PORT ${config.server.port}`);
    });
  } catch (error) {
    journal.server.error(`ERROR CONNECTION SERVER/DB==${error}`);
  }
};

module.exports = start;
