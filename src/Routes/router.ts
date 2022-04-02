import { userRoutes } from "../handlers/users";
import { productsRoutes } from "../handlers/products";
import { ordersRoutes } from "../handlers/orders";
import { ProductOrdersRoutes } from "../handlers/products_orders";
import { signIn } from "../signin";
import express from "express";

const userRouter = express();
userRoutes(userRouter);

const productsRouter = express();
productsRoutes(productsRouter);

const orderRouter = express();
ordersRoutes(orderRouter);

const ProductOrdersRouter = express();
ProductOrdersRoutes(ProductOrdersRouter);

const router = express();
router.post('/signin',signIn);
router.use('/users',userRouter);
router.use('/products',productsRouter);
router.use('/orders',orderRouter);
router.use('/productorder',ProductOrdersRouter);



export default router


