const {
  getList,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../services/productService");

const getListController = async (req, res) => {
  const productList = await getList();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const createProductController = async (req, res) => {
  const product = req.body;
  const newProduct = await createProduct(product);
  res.status(201).send(newProduct);
};
const updateProductController = async (req, res) => {
  const { id } = req.params;
  const { name, price, amount, sale } = req.body;
  const updatedProduct = await updateProduct(id, name, price, amount, sale);
  if (updatedProduct) {
    res.status(200).send(updatedProduct);
  } else {
    res.status(404).send("NOT FOUND");
  }
};
const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
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
