const Logger = require('peculiar-logger');

const Journal = Logger.journal();

module.exports = {
  server: new Journal('Server', { file: './logs' }, { console: true, file: true, db: false }),
  users: new Journal('Users', { file: './logs' }, { console: true, file: true, db: false }),
  auth: new Journal('Auth', { file: './logs' }, { console: true, file: true, db: false }),
};
