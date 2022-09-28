const router = require('express').Router();

const {
  getProducts,
  getAllCategories,
  filterByCategory,
  filterByPrice,
  getCount,
} = require('../controllers');

router.get('/:offset', getProducts);

router.get('/all/count', getCount);

router.get('/categories', getAllCategories);

router.post('/filterCategory', filterByCategory);

router.post('/filterPrice', filterByPrice);

module.exports = router;
