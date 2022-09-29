const { compare } = require('bcrypt');
const { getUserQuery } = require('../../database/queries/users');
const CustomizedError = require('../../error/customizedError');
const { loginValidation } = require('../../utils/validation');
const generateToken = require('../../utils/generateToken');

const login = (req, res, next) => {
  loginValidation(req.body)
    .then(() => getUserQuery(req.body.username))
    .then((data) => {
      if (!data.rowCount) throw new CustomizedError(400, 'Wrong credentials');
      req.userData = data;
      return compare(req.body.password, data.rows[0].password);
    })
    .then((verified) => {
      if (!verified) throw new CustomizedError(400, 'Wrong credentials');
      return generateToken({
        id: req.userData.rows[0].id,
        username: req.userData.rows[0].username,
      });
    })
    .then((token) => {
      const { username, id, avatar } = req.userData.rows[0];
      res.cookie('token', token).json({ id, username, avatar });
    })
    .catch((err) => {
      next(err);
    });
};
module.exports = login;
