const jwt = require('jsonwebtoken');

const journal = require('../modules/logger');
const ErrorApp = require('../errors/error-app');
const { tokenKey, algorithm, tokenLiveTimeMs } = require('../auth/constants');
const { routes } = require('../config');
const repository = require('./repository');

const checkUser = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[1], tokenKey, { algorithms: [algorithm] }, async (err, payload) => {
      if (err) {
        journal.auth.error(`CHECK USER TOKEN ${req.headers.authorization}`);
        return next(new ErrorApp('Invalid token', 401));
      }

      if (payload && !payload.id) {
        journal.auth.error('TOKEN IS NOT CONTAIN USER ID');
        return next(new ErrorApp('Invalid token', 401));
      }

      if (payload.date + tokenLiveTimeMs < Date.now()) {
        journal.auth.error('TOKEN IS DEAD');
        return next(new ErrorApp('Token is dead', 401));
      }

      try {
        const user = await repository.getUserById(payload.id);

        if (!user) {
          throw new ErrorApp('User not found', 404);
        }

        next();
      } catch (error) {
        journal.auth.error(`CHECK USER TOKEN ${error}`);
        next(error);
      }
    });
  } else if ((req.url === routes.users.main && req.method === 'POST') || req.url === routes.authorize.signin) {
    next();
  } else {
    next(new ErrorApp('Invalid token', 401));
  }
};

module.exports = {
  checkUser,
};
