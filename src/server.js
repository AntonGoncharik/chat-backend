const mongoose = require('mongoose');

const config = require('./config');
const app = require('./app');
const journal = require('./modules/logger');

const start = async () => {
  try {
    // await mongoose.connect(config.mongo.url, config.mongo.options);

    app.listen(config.port, () => {
      journal.server.info(`Server launched on port ${config.port}`);
    });
  } catch (error) {
    journal.server.error(`ERROR ${error}`);
  }
};

module.exports = start;
