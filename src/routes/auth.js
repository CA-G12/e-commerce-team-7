const router = require('express').Router();
const { singUp } = require('../controllers');

router.post('/singup', singUp);
module.exports = router;
