const User = require('./model');

const getUserById = async (id) => {
  const user = {};

  return user;
};

const getUserByEmail = async (email) => {
  const user = {};

  return user;
};

const createUser = async (data) => {
  try {
    const user = await new User(data).save();

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
};
