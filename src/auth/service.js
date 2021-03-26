const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const journal = require('../modules/logger');
const ErrorApp = require('../errors/error-app');

const { tokenKey, refreshTokenKey, algorithm } = require('./constants');
const repository = require('../users/repository');

const loginUser = async (email, password) => {
  try {
    if (!email) {
      throw new ErrorApp('Not transferred Email', 400);
    }

    if (!password) {
      throw new ErrorApp('Not transferred password', 400);
    }

    const user = await repository.getUserByEmail(email);

    if (!user) {
      throw new ErrorApp('User not found', 404);
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new ErrorApp('Wrong password', 401);
    }

    const token = jwt.sign({
      id: user.id, date: Date.now(), typ: 'JWT', sub: 'auth',
    }, tokenKey, { algorithm });

    const refreshToken = jwt.sign({ id: user.id }, refreshTokenKey, { algorithm });

    await repository.updateUser(user.id, { token });

    return {
      user,
      token,
      refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

const logoutUser = async (token, refreshToken) => {
  try {
    if (!token) {
      throw new ErrorApp('Not transferred token', 400);
    }

    await repository.logoutUser(token, refreshToken);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  loginUser,
  logoutUser,
};
