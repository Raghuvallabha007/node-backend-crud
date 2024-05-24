const express = require('express');
const multer = require('multer');
const { uploadImage, getImageById, deleteImage } = require('../controller/imageController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), uploadImage);
router.get('/:id', getImageById).delete('/:id', deleteImage);;
  
module.exports = router;