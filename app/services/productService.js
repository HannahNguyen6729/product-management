let productList = [
  {
    id: 1,
    name: "Nike Dri-FIT",
    amount: 11,
    price: 200,
    sale: "10%",
  },
  {
    id: 2,
    name: "Nike ZoomX",
    amount: 40,
    price: 100,
    sale: "30%",
  },
  {
    id: 3,
    name: "Nike ProDri-FIT",
    amount: 50,
    price: 340,
    sale: "25%",
  },
];
const getList = () => {
  if (productList) {
    return productList;
  } else {
    return false;
  }
};
const getProductById = (id) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const product = productList[index];
    return product;
  } else {
    return false;
  }
};
const createProduct = (product) => {
  const newProduct = { id: Math.random(), ...product };
  productList = [...productList, newProduct];
  return newProduct;
};
const updateProduct = (id, name, price, amount, sale) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const product = productList[index];
    const updatedProduct = { ...product, name, price, amount, sale };
    productList[index] = updatedProduct;
    return updatedProduct;
  } else {
    return false;
  }
};
const deleteProduct = (id) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const deletedProduct = productList[index];
    productList = productList.filter((product) => product.id.toString() !== id);
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
