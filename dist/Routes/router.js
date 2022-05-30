"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var users_1 = require("../handlers/users");
var products_1 = require("../handlers/products");
var orders_1 = require("../handlers/orders");
var products_orders_1 = require("../handlers/products_orders");
var signin_1 = require("../signin");
var express_1 = __importDefault(require("express"));
var userRouter = (0, express_1["default"])();
(0, users_1.userRoutes)(userRouter);
var productsRouter = (0, express_1["default"])();
(0, products_1.productsRoutes)(productsRouter);
var orderRouter = (0, express_1["default"])();
(0, orders_1.ordersRoutes)(orderRouter);
var ProductOrdersRouter = (0, express_1["default"])();
(0, products_orders_1.ProductOrdersRoutes)(ProductOrdersRouter);
var router = (0, express_1["default"])();
router.post('/signin', signin_1.signIn);
router.use('/users', userRouter);
router.use('/products', productsRouter);
router.use('/orders', orderRouter);
router.use('/productorder', ProductOrdersRouter);
exports["default"] = router;