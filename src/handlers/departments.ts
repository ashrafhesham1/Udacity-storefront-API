import express, { Request, Response } from "express";
import { Departments } from "../models/departments";
import { authenticate } from "../middleware/authenticate";

const departments = new Departments();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const departmentsIndex = await departments.index();
    res.json(departmentsIndex);
  } catch (error) {
    throw new Error(`cannot show the departments ${error}`);
  }
};

const showDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const department = await departments.show(Number(req.params.id));
    res.json(department);
  } catch (error) {
    throw new Error(`cannot show the department ${error}`);
  }
};

const createDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const department = await departments.create(String(req.query.name));
    res.json(department);
  } catch (error) {
    throw new Error(`cannot create the department ${error}`);
  }
};

const editDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const newName = req.query.name == undefined ? "" : String(req.query.name);

    const department = await departments.edit(Number(req.params.id), newName);
    res.json(department);
  } catch (error) {
    throw new Error(`cannot edit the department ${error}`);
  }
};

const deleteDepartment = async (req: Request, res: Response): Promise<void> => {
  try {
    const department = await departments.delete(Number(req.params.id));
    res.json(department);
  } catch (error) {
    throw new Error(`cannot delete the department ${error}`);
  }
};

export const departmentsRoutes = (app: express.Application) => {
  app.get("/index", index);
  app.get("/:id", showDepartment);
  app.post("/create", authenticate, createDepartment);
  app.post("/edit/:id", authenticate, editDepartment);
  app.post("/delete/:id", authenticate, deleteDepartment);
};
