module.exports = {
  name: {
    type: String,
    unique: false,
    required: false,
    index: true,
    default: '',
  },
  users: {
    type: Array,
    unique: false,
    required: false,
    index: false,
    default: [],
  },
};
