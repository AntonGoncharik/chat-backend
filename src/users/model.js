const { Schema, model } = require('mongoose');

const schema = new Schema(require('./schema'));

module.exports = model('Users', schema);
