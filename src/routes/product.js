const router = require('express').Router();

const {
  getProducts,
  getAllCategories,
  filterByCategory,
  filterByPrice,
  getCount,
  getAllProducts
} = require('../controllers');


router.get('/all/count', getCount);

router.get('/filterAll', getAllProducts)
router.get('/categories', getAllCategories);

router.post('/filterCategory', filterByCategory);

router.post('/filterPrice', filterByPrice);
router.get('/:offset', getProducts);

module.exports = router;
