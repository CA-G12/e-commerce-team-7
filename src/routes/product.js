const router = require('express').Router();

const { getProducts } = require('../controllers')
router.get('/', getProducts)


module.exports = router;
