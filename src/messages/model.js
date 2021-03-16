const { Schema, model } = require('mongoose');

const schema = new Schema(require('./schema'), { timestamps: true });

module.exports = model('Messages', schema);
