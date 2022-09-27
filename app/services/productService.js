const { Product } = require("../productModel/index");

// let productList = [
//   {
//     id: 1,
//     name: "Nike Dri-FIT",
//     amount: 11,
//     price: 200,
//     sale: "10%",
//   }
// ];
const getList = async () => {
  const productList = await Product.findAll();
  if (productList) {
    return productList;
  } else {
    return false;
  }
};
const getProductById = async (id) => {
  const product = await Product.findOne({
    where: { id },
  });
  if (product) {
    return product;
  } else {
    return false;
  }
};
const createProduct = async (product) => {
  const newProduct = await Product.create(product);
  return newProduct;
};
const updateProduct = async (id, name, price, amount, sale) => {
  const updatedProduct = await Product.update(
    { name, price, amount, sale },
    {
      where: { id },
    }
  );
  if (updatedProduct) {
    return updatedProduct;
  } else {
    return false;
  }
  //   const product = await getProductById(id);
  //   if (product) {
  //     product.name = name;
  //     product.price = price;
  //     product.amount = amount;
  //     product.sale = sale;
  //     const updatedProduct = await product.save();
  //     return updatedProduct;
  //   } else {
  //     return false;
  //   }
};
const deleteProduct = async (id) => {
  const deletedProduct = await getProductById(id);
  if (deletedProduct) {
    await Product.destroy({
      where: { id },
    });
    return deletedProduct;
  } else {
    return false;
  }
};
module.exports = {
  getList,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
