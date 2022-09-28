const { getAllCategory } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const getAllCategories = (req, res, next) => {
  getAllCategory()
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};
module.exports = getAllCategories;
