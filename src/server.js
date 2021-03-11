const mongoose = require('mongoose');

const config = require('./config');
const app = require('./app');
const journal = require('./modules/logger');

const start = async () => {
  try {
    await mongoose.connect(config.db.url, config.db.connectionOptions);
    journal.server.info('DB CONNECTED');

    app.listen(config.server.port, () => {
      journal.server.info(`SERVER LAUNCHED ON PORT ${config.server.port}`);
    });
  } catch (error) {
    journal.server.error(`ERROR CONNECTION SERVER/DB==${error}`);
  }
};

module.exports = start;
