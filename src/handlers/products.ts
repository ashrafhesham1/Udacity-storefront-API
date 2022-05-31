import express, { Request, Response } from "express";
import { Products } from "../models/products";
import { CrossModels } from "../services/crossModels";
import { authenticate } from "../middleware/authenticate";

const products = new Products();
const crossModels = new CrossModels();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const productsIndex = await products.index();
    res.json(productsIndex);
  } catch (error) {
    throw new Error(`cannot shpw the products ${error}`);
  }
};

const showProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await products.show(Number(req.params.id));
    res.json(product);
  } catch (error) {
    throw new Error(`cannot show the product ${error}`);
  }
};

const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await products.create(
      String(req.query.name),
      Number(req.query.price),
      Number(req.query.supplierId),
      Number(req.query.departmentId)
    );
    res.json(product);
  } catch (error) {
    throw new Error(`cannot create the product ${error}`);
  }
};

const editProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const newName = req.query.name == undefined ? "" : String(req.query.name);
    const newPrice = req.query.price == undefined ? 0 : Number(req.query.price);

    const product = await products.edit(
      Number(req.params.id),
      newName,
      newPrice
    );
    res.json(product);
  } catch (error) {
    throw new Error(`cannot edit the product ${error}`);
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await products.delete(Number(req.params.id));
    res.json(product);
  } catch (error) {
    throw new Error(`cannot delete the product ${error}`);
  }
};

const userRecentPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const Purchases = await crossModels.showUserRecentPurchases(
      Number(req.params.userid),
      Number(req.query.rows)
    );
    res.json(Purchases);
  } catch (error) {
    throw new Error(`cannot show the Purchases ${error}`);
  }
};

export const productsRoutes = (app: express.Application) => {
  app.get("/index", index);
  app.get("/:id", showProduct);
  app.get("/user/:userid/recent", authenticate, userRecentPurchases);
  app.post("/create", authenticate, createProduct);
  app.post("/edit/:id", authenticate, editProduct);
  app.post("/delete/:id", authenticate, deleteProduct);
};
