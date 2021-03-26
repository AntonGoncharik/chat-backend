module.exports = {
  email: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
    index: true,
  },
  name: {
    type: String,
    unique: false,
    required: false,
    index: true,
    default: '',
  },
  refreshToken: {
    type: String,
    unique: false,
    required: false,
    index: true,
    default: '',
  },
};
