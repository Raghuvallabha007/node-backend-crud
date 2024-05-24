const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).send(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).send(newProduct);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(updatedProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "product not found" });
          }
        res.status(200).send(deletedProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}