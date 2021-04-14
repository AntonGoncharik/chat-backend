const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ErrorApp = require('../errors/error-app');
const repository = require('./repository');

const getUsers = async (query, token) => {
  try {
    let result = [];
    if (query.token) {
      const decodedPayload = jwt.decode(token, { json: true });

      result = await repository.getUserById(decodedPayload.id);
    } else {
      result = await repository.getUsers(+query.page, +query.records);
    }

    return result;
  } catch (error) {
    throw error;
  }
};

const getCountUsers = async () => {
  try {
    const result = await repository.getCountUsers();

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

    const user = await repository.getUserByEmail(email);

    if (user) {
      throw new ErrorApp(`User with ${email} email exists`, 400);
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

const updateUser = async (body) => {
  try {
    if (!body.id) {
      throw new ErrorApp('Not transferred user id', 400);
    }

    const result = await repository.updateUser(body.id, body.data || { avatar: body.avatar });

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
  getCountUsers,
  createUser,
  updateUser,
  deleteUser,
};
