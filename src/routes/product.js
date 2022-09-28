const router = require('express').Router();

const {
  getProducts,
  getAllCategories,
  filterByCategory,
  filterByPrice,
} = require('../controllers');
router.get('/', getProducts);

router.get('/categories', getAllCategories);

router.post('/filterCategory', filterByCategory);

router.post('/filterPrice', filterByPrice);
module.exports = router;
