const router = require('express').Router();
const auth = require('./auth');
const product = require('./product');
const cart = require('./cart');
const verifyAccessToken = require('../middleware/verifyAccessToken');
router.use('/auth', auth);
router.use('/product', product);
router.use('/cart', verifyAccessToken, cart);

module.exports = router;
