const { Schema } = require('mongoose');

module.exports = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    index: true,
  },
  roomId: {
    type: Schema.Types.ObjectId,
    ref: 'Rooms',
    required: true,
    index: true,
  },
  text: {
    type: String,
    unique: false,
    required: false,
    index: true,
    default: '',
  },
  images: {
    type: Array,
    unique: false,
    required: false,
    index: false,
    default: [],
  },
};
