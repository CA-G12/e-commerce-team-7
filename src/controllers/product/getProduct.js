const { getProductsQuery } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const getProducts = (req, res) => {
    getProductsQuery().then((data) => res.json(data.rows))
        .catch((err) => next(new CustomizedError()));
};

module.exports = getProducts;
