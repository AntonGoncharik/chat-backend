const User = require('./model');

const getUserById = async (id) => {
  try {
    const result = await User.findById(id);

    return result;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await User.findOne({ email });

    return result;
  } catch (error) {
    throw error;
  }
};

const createUser = async (data) => {
  try {
    const result = await new User(data).save();

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
};
