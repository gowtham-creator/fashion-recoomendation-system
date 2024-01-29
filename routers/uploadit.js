const express = require('express');
const multer = require("multer");
const {uploadit , uploaditpost} = require('../controllers/uploadit');



const router = express.Router();


const storage = multer.diskStorage({
    destination: 'uploads',
    filename : (req,file , cb) => {
        cb(null,file.originalname)
}
})

const uploads = multer({
    storage:storage
})

router.get('/:cat',uploadit);
router.post('/:cat',uploads.single('file'),uploaditpost)


module.exports = router