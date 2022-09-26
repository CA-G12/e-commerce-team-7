const { getProductsQuery } = require('../../database/queries');

const getProducts = (req, res) => {
    getProductsQuery().then((data) => res.json(data.rows))
        .catch((err) => console.log(err));
};

module.exports = getProducts;
