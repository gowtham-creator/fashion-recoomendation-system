const express = require('express');
const sellfood = require('../controllers/uploadfashion');

const router = express.Router();

router.use('/',sellfood);


module.exports = router