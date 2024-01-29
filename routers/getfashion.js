const express = require('express');
const buyfood = require('../controllers/getfashion');

const router = express.Router();

router.use('/',buyfood);


module.exports = router