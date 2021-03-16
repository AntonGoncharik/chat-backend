const sendError = (error, req, res, next) => {
  res.status(error.code).json({ code: error.code, message: error.message });
};

module.exports = {
  sendError,
};
