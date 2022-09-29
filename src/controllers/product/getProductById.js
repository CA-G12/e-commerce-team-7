const {getProductByIdQuery} = require('../../database/queries');

const getProductById = (req, res, next) => {
    const { id } = req.query;
    getProductByIdQuery(id)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err));
}

module.exports = getProductById;