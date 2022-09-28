const { getFilteredProductsQuery } = require('../../database/queries');

const getAllProducts = (req, res, next) => {
  getFilteredProductsQuery(req.query)
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};
module.exports = getAllProducts;
