import express, { Request, Response } from "express";
import { Suppliers } from "../models/suppliers";
import { authenticate } from "../middleware/authenticate";

const suppliers = new Suppliers();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const suppliersIndex = await suppliers.index();
    res.json(suppliersIndex);
  } catch (error) {
    throw new Error(`cannot show the suppliers ${error}`);
  }
};

const showSupplier = async (req: Request, res: Response): Promise<void> => {
  try {
    const supplier = await suppliers.show(Number(req.params.id));
    res.json(supplier);
  } catch (error) {
    throw new Error(`cannot show the supplier ${error}`);
  }
};

const createSupplier = async (req: Request, res: Response): Promise<void> => {
  try {
    const supplier = await suppliers.create(
      String(req.query.name),
      Number(req.query.phone)
    );
    res.json(supplier);
  } catch (error) {
    throw new Error(`cannot create the supplier ${error}`);
  }
};

const editSupplier = async (req: Request, res: Response): Promise<void> => {
  try {
    const newName = req.query.name == undefined ? "" : String(req.query.name);
    const newPhone = req.query.phone == undefined ? 0 : Number(req.query.phone);

    const supplier = await suppliers.edit(
      Number(req.params.id),
      newName,
      newPhone
    );
    res.json(supplier);
  } catch (error) {
    throw new Error(`cannot edit the supplier ${error}`);
  }
};

const deleteSupplier = async (req: Request, res: Response): Promise<void> => {
  try {
    const supplier = await suppliers.delete(Number(req.params.id));
    res.json(supplier);
  } catch (error) {
    throw new Error(`cannot delete the supplier ${error}`);
  }
};

export const suppliersRoutes = (app: express.Application) => {
  app.get("/index", index);
  app.get("/:id", showSupplier);
  app.post("/create", authenticate, createSupplier);
  app.post("/edit/:id", authenticate, editSupplier);
  app.post("/delete/:id", authenticate, deleteSupplier);
};
