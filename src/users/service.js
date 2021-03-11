const bcrypt = require('bcrypt');

const throwError = require('../errors/throw-error');
// const serviceAuth = require('../auth/service');

const repository = require('./repository');

const createUser = async (email, password) => {
  try {
    if (!email) {
      throwError('Email not found', 404);
    }

    if (!password) {
      throwError('Password not found', 404);
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const body = { email, password: passwordHash };

    const user = await repository.createUser(body);

    // const tokens = await serviceAuth.loginUser();

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
