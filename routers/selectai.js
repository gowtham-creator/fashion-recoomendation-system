// routes.js
const express = require('express');
const router = express.Router();
const selectai = require('../controllers/selectai'); // Replace with the actual path to your buyer controller

router.get('/:category', selectai);

module.exports = router;
