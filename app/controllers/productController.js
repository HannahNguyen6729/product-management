const {
  getList,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../services/productService");

const getListController = (req, res) => {
  const productList = getList();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const getProductByIdController = (req, res) => {
  const { id } = req.params;
  const product = getProductById(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const createProductController = (req, res) => {
  const product = req.body;
  const newProduct = createProduct(product);
  res.status(201).send(newProduct);
};
const updateProductController = (req, res) => {
  const { id } = req.params;
  const { name, price, amount, sale } = req.body;
  const updatedProduct = updateProduct(id, name, price, amount, sale);
  if (updatedProduct) {
    res.status(200).send(updatedProduct);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const deleteProductController = (req, res) => {
  const { id } = req.params;
  const deletedProduct = deleteProduct(id);
  if (deleteProduct) {
    res.status(200).send(deletedProduct);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
module.exports = {
  getListController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
};
