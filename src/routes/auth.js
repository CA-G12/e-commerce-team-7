const router = require('express').Router();
const { signUp, login, logout, verify } = require('../controllers');
const verifyAccessToken = require('../middleware/verifyAccessToken');


router.post('/signup', signUp);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify', verifyAccessToken, verify);
module.exports = router;
