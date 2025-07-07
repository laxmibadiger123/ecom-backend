const express = require("express");
const { isAuth } = require("../middlewares/authMiddlewares");
const {
  getCart,
  addToCart,
  updateQuantity,
  removeProduct,
  clearCart,
} = require("../controllers/cartController");
const cartRoutes = express.Router();

cartRoutes.get("/", isAuth, getCart);
cartRoutes.post("/add", isAuth, addToCart);
cartRoutes.put("/", isAuth, updateQuantity);
cartRoutes.delete("/product", isAuth, removeProduct);
cartRoutes.delete("/", isAuth, clearCart);
module.exports = cartRoutes;
