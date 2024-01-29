const express = require('express');
const {deleteproduct }= require('../controllers/deleteproduct');


const router = express.Router();

router.use('/selling/:id',deleteproduct);




module.exports = router