import { userRoutes } from "../handlers/users";
import { productsRoutes } from "../handlers/products";
import { ordersRoutes } from "../handlers/orders";
import { suppliersRoutes } from "../handlers/suppliers";
import { departmentsRoutes } from "../handlers/departments";
import { dashboardRoutes } from "../handlers/dashboard";
import { signIn } from "../signin";
import express from "express";

const userRouter = express();
userRoutes(userRouter);

const productsRouter = express();
productsRoutes(productsRouter);

const orderRouter = express();
ordersRoutes(orderRouter);

const suppliersRouter = express();
suppliersRoutes(suppliersRouter);

const departmentsRouter = express();
departmentsRoutes(departmentsRouter);

const dashboardRouter = express();
dashboardRoutes(dashboardRouter);

const router = express();
router.post("/signin", signIn);
router.use("/users", userRouter);
router.use("/products", productsRouter);
router.use("/orders", orderRouter);
router.use("/suppliers", suppliersRouter);
router.use("/departments", departmentsRouter);
router.use("/dashboard", dashboardRouter);

export default router;
