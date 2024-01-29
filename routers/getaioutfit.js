// routes.js
const express = require('express');
const router = express.Router();
const {shirtgetaioutfit,pantgetaioutfit}= require('../controllers/getaioutfit'); // Replace with the actual path to your buyer controller

router.get('/shirts/:color', shirtgetaioutfit);

router.get('/pants/:color',pantgetaioutfit );


module.exports = router;
