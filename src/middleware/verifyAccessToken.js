const jwt = require('jsonwebtoken');
const CustomizedError = require('../error/customizedError');
require('dotenv').config();

const verifyAccessToken = (req, res, next) => {
  const { token } = req.cookies;

  try {
    if (!token) throw new CustomizedError(401, 'Unauthorized');

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        throw new CustomizedError(401, 'Unauthorized');
      } else {
        req.user = decoded;
        next();
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = verifyAccessToken;
