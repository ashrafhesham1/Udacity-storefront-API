import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";

const configs = config();

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const token = req.headers.x_auth_token as string;
    const secret = configs.tokenSecret;
    const valid = jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(400).send(`invalid Token , ${error}`);
  }
};

export const createJWT = (id: string): string => {
  const tokenSecret = configs.tokenSecret as jwt.Secret;
  const token = jwt.sign({ id }, tokenSecret);
  return token;
};
