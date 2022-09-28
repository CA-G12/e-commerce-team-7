// eslint-disable-next-line no-unused-vars
const handleErrors = (err, req, res, next) => {
  const { status, message } = err;
  res.status(status || 500).json(message || 'Internal Server Error');
};

module.exports = handleErrors;
