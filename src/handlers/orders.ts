import express, { Request, Response } from "express";
import { Orders } from "../models/orders";
import { ProductOrders } from "../models/products_orders";
import { CrossModels } from "../services/crossModels";
import { authenticate } from "../middleware/authenticate";

const orders = new Orders();
const productOrders = new ProductOrders();
const crossModels = new CrossModels();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const ordersIndex = await orders.index();
    res.json(ordersIndex);
  } catch (error) {
    throw new Error(`cannot get the orders ${error}`);
  }
};

const showorder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await orders.show(Number(req.params.id));
    res.json(order);
  } catch (error) {
    throw new Error(`cannot get the order ${error}`);
  }
};

const createorder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await orders.create(
      Number(req.query.userId),
      Boolean(req.query.active)
    );
    res.json(order);
  } catch (error) {
    throw new Error(`cannot create the order ${error}`);
  }
};

const editorder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await orders.edit(
      Number(req.params.id),
      Boolean(req.query.active)
    );
    res.json(order);
  } catch (error) {
    throw new Error(`cannot edit the order ${error}`);
  }
};

const deleteorder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await orders.delete(Number(req.params.id));
    res.json(order);
  } catch (error) {
    throw new Error(`cannot edit the order ${error}`);
  }
};

const addProductToOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await productOrders.create(
      Number(req.params.id),
      Number(req.query.productId),
      Number(req.query.quantity)
    );
    res.json(product);
  } catch (error) {
    throw new Error(`cannot edit the order ${error}`);
  }
};

const deleteProductFromOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await productOrders.delete(
      Number(req.params.id),
      Number(req.query.productId)
    );
    res.json(product);
  } catch (error) {
    throw new Error(`cannot edit the order ${error}`);
  }
};

const editProductInOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await productOrders.edit(
      Number(req.params.id),
      Number(req.query.productId),
      Number(req.query.quantity)
    );
    res.json(product);
  } catch (error) {
    throw new Error(`cannot edit the order ${error}`);
  }
};

const useOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const userOrders = await orders.userOrders(Number(req.params.userid));
    res.send(userOrders);
  } catch (error) {
    throw new Error(`cannot show the orders ${error}`);
  }
};

const userActiveOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const activeOrders = await orders.useractiveOrders(
      Number(req.params.userid)
    );
    res.send(activeOrders);
  } catch (error) {
    throw new Error(`cannot show the orders ${error}`);
  }
};

const showOrderProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await crossModels.showProductsInOrder(
      Number(req.params.id)
    );
    res.send(products);
  } catch (error) {
    throw new Error(`cannot show the orders ${error}`);
  }
};

export const ordersRoutes = (app: express.Application) => {
  app.get("/index", authenticate, index);
  app.get("/:id", authenticate, showorder);
  app.post("/create", authenticate, createorder);
  app.post("/edit/:id", authenticate, editorder);
  app.post("/delete/:id", authenticate, deleteorder);
  app.post("/:id/addProduct", authenticate, addProductToOrder);
  app.post("/:id/editProduct", authenticate, editProductInOrder);
  app.post("/:id/deleteProduct", authenticate, deleteProductFromOrder);
  app.get("/user/:userid", authenticate, useOrders);
  app.get("/user/:userid/active", authenticate, userActiveOrders);
  app.get("/:id/products", authenticate, showOrderProducts);
};
