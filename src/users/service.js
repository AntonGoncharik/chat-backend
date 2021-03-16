const bcrypt = require('bcrypt');

const ErrorApp = require('../errors/error-app');

const repository = require('./repository');

const getUsers = async () => {
  try {
    const result = await repository.getUsers();

    return result;
  } catch (error) {
    throw error;
  }
};

const createUser = async (email, password) => {
  try {
    if (!email) {
      throw new ErrorApp('Not transferred Email', 400);
    }

    if (!password) {
      throw new ErrorApp('Not transferred password', 400);
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const body = { email, password: passwordHash };

    const result = await repository.createUser(body);

    return result;
  } catch (error) {
    throw error;
  }
};

const updateUser = async () => {
  try {
    const result = await repository.updateUser();

    return result;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async () => {
  try {
    const result = await repository.deleteUser();

    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
