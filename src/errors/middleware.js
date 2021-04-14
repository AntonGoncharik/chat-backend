const sendError = (error, req, res, next) => {
  res.status(+error.code ? error.code : 500).json({ code: +error.code ? error.code : 500, message: error.message });
};

module.exports = {
  sendError,
};
