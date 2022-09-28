const { getCountQuery } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const getCount = (req, res, next) => {
  getCountQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => next(new CustomizedError()));
};

module.exports = getCount;
