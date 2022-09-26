const { hash } = require('bcrypt');
const jwt = require('jsonwebtoken');
const { signUpQuery, getUsernameQuery } = require('../../database/queries');
const { signUpValidation } = require('../../utils/validation');
const generateToken = require('../../utils/generateToken');
const CustomizedError = require('../../error/customizedError');

const singUp = (req, res, next) => {
  console.log(req.body);
  signUpValidation(req.body)
    .then(() => getUsernameQuery(req.body.username))
    .then((username) => {
      if (username.rowCount) {
        throw new CustomizedError(400, 'user already exist');
      }
      return hash(req.body.password, 10);
    })
    .then((hashed) => signUpQuery({ ...req.body, password: hashed }))
    .then((data) => {
      req.userData = data;
      return generateToken({
        id: data.rows[0].id,
        username: data.rows[0].username,
      });
    })
    .then((token) => {
      res.cookie('token', token);
      res.json({
        status: 200,
        message: req.userData.rows,
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = singUp;
