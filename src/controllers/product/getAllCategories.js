const { getAllCategory } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');
const getAllCategories = (req, res) => {
  getAllCategory()
    .then((data) => res.json(data.rows))
    .catch((err) => next(new CustomizedError()));
};
module.exports = getAllCategories;
