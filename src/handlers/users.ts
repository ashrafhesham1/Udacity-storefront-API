import express, { Request, Response } from "express";
import { Users } from "../models/users";
import { hashPass } from "../middleware/hash";
import { authenticate } from "../middleware/authenticate";

const users = new Users();

const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const usersIndex = await users.index();
    res.json(usersIndex);
  } catch (error) {
    throw new Error(`cannot show the users ${error}`);
  }
};

const showUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users.show(Number(req.params.id));
    res.json(user);
  } catch (error) {
    throw new Error(`cannot show the users ${error}`);
  }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users.create(
      String(req.query.firstName),
      String(req.query.lastName),
      String(req.query.password)
    );
    res.json(user);
  } catch (error) {
    throw new Error(`cannot create the user ${error}`);
  }
};

const editUserName = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users.editName(
      String(req.query.firstName),
      String(req.query.lastName),
      Number(req.params.id)
    );
    res.json(user);
  } catch (error) {
    throw new Error(`cannot edit the user ${error}`);
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users.delete(Number(req.params.id));
    res.json(user);
  } catch (error) {
    throw new Error(`cannot delete the user ${error}`);
  }
};

export const userRoutes = (app: express.Application) => {
  app.get("/index", authenticate, index);
  app.get("/:id", authenticate, showUser);
  app.post("/create", hashPass, createUser);
  app.post("/edit/:id", authenticate, editUserName);
  app.post("/delete/id", authenticate, deleteUser);
};
