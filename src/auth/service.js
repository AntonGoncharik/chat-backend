const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const ErrorApp = require('../errors/error-app');
const repository = require('../users/repository');

const { tokenKey, refreshTokenKey, algorithm } = require('./constants');

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

    await repository.updateUser(user.id, { refreshToken });

    return {
      user,
      token,
      refreshToken,
    };
  } catch (error) {
    throw error;
  }
};

const logoutUser = async (id) => {
  try {
    if (!id) {
      throw new ErrorApp('Not transferred user id', 400);
    }

    await repository.updateUser(id, { refreshToken: '' });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  loginUser,
  logoutUser,
};
