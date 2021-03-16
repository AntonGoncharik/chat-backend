const bcrypt = require('bcrypt');

const ErrorApp = require('../errors/error');

const repository = require('./repository');

const getUsers = async () => {
  try {
    const users = await repository.getUsers();

    return users;
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

    const user = await repository.createUser(body);

    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async () => {
  try {
    const users = await repository.updateUser();

    return users;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async () => {
  try {
    const user = await repository.deleteUser();

    return user;
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
