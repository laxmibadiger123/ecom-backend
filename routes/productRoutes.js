const express = require("express");
const validateProduct = require("../utils/validateProduct.js");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");

const productRoutes = express.Router();

productRoutes.post("/", validateProduct, createProduct);
productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.put("/:id", validateProduct, updateProduct);
productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;
