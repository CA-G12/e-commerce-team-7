const { filterCategory } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const filterByCategory = (req, res, next) => {
  const { category } = req.body;
  filterCategory(category)
    .then((data) => res.json(data.rows))
    .catch(() => next(new CustomizedError()));
};
module.exports = filterByCategory;
