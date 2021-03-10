const throwError = (errorText, statusCode) => {
  const error = new Error();
  error.code = statusCode;
  error.message = errorText;

  throw error;
};

module.exports = throwError;
