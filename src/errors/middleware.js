const errorMiddleware(err, req, res, next) {
  let { code } = err;

  if (typeof err.code !== 'number') {
    switch (code) {
      case 'ER_NO_REFERENCED_ROW_2':
        code = 400;
        break;
      default:
        code = 500;
        break;
    }
  }

  res.status(code).json({
    code,
    message: err.message.toString(),
  });
}

module.exports = errorMiddleware;
