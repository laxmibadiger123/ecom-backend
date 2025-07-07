const express = require("express");

const { isAuth } = require("../middlewares/authMiddlewares");

const {
  createRazorpayOrder,
  verifypayment,
  razorpayWebhook,
} = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("/create-razorpay-order", isAuth, createRazorpayOrder);
orderRouter.post("/verify-payment", isAuth, verifypayment);
orderRouter.post("/webhook", razorpayWebhook);

module.exports = orderRouter;
