const bcrypt = require('bcrypt');

const ErrorApp = require('../errors/error-app');

const repository = require('./repository');

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

const getUsers = async () => {
  try {
    const users = [1, 2, 3];

    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUsers,
};
