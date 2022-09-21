const express = require("express");
const {
  getListController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productController");
const { checkEmpty } = require("../middlewares/validation/productValidation");
const productRouter = express.Router();

productRouter.get("/", getListController);
productRouter.get("/:id", getProductByIdController);
productRouter.post("/", checkEmpty, createProductController);
productRouter.put("/:id", updateProductController);
productRouter.delete("/:id", deleteProductController);
module.exports = productRouter;
