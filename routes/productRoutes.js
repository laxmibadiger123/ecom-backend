const express = require("express");
const validateProduct = require("../utils/validateProduct.js");

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");
const productRoutes = express.Router();

productRoutes.post("/", isAdmin, validateProduct, createProduct);
productRoutes.get("/", isAuth, getAllProducts);
productRoutes.get("/:id", isAuth, getProductById);
productRoutes.put("/:id", isAuth, isAdmin, validateProduct, updateProduct);
productRoutes.delete("/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
