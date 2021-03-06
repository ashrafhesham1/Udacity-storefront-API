import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Users } from "./models/users";
import { createJWT } from "./middleware/authenticate";

const users = new Users();

export const signIn = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const password = String(req.body.password);

    const user = await users.show(id);
    const checkValid = user && (await bcrypt.compare(password, user.password));

    if (!checkValid) return res.status(400).send("wrong cardintials");

    res.send(createJWT(id));
  } catch (error) {
    throw new Error(`couldn't sign in , ${error}`);
  }
};
