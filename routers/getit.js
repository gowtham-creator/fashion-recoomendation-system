// routes.js
const express = require('express');
const router = express.Router();
const getit = require('../controllers/getit'); // Replace with the actual path to your buyer controller

router.get('/:category', getit);

module.exports = router;
