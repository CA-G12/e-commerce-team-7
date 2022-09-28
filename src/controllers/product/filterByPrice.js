const { filterPrice } = require('../../database/queries');
const CustomizedError = require('../../error/customizedError');

const filterByPrice = (req, res, next) => {
  const {order} = req.body
    filterPrice(order)
    .then((data) =>res.json(data.rows))
    .catch((err) => next(new CustomizedError()));

};
module.exports = filterByPrice;
