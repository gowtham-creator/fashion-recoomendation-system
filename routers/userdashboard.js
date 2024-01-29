const express = require('express');
const userdashboard = require('../controllers/userdashboard');

const router = express.Router();

router.use('/',userdashboard);


module.exports = router