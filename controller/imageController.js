const Image = require('../models/imageModel');

const uploadImage = async (req, res) => {
    try {
      const newImage = new Image({
        name: req.file.originalname,
        data: req.file.buffer,
        contentType: req.file.mimetype
      });
      await newImage.save();
      res.status(200).send('Image uploaded successfully to MongoDB.');
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).send('Error uploading image');
    }
  }

const getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).send('Image not found');
    }
    res.set('Content-Type', image.contentType);
    res.set('Content-Disposition', `attachment; filename="${image.name}"`);
    console.log(image.data);
    res.status(200).send(image.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteImage = async (req, res) => {
  try {
    const image = await Image.findByIdAndDelete(req.params.id);
    if (!image) {
      return res.status(404).send('Image not found');
    }
    res.send('Image deleted successfully');
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).send('Error deleting image');
  }
}

module.exports = {
    uploadImage,
    getImageById,
    deleteImage
}