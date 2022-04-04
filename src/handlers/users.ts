import express,{ Request, Response } from "express";
import { Users } from "../models/users";
import { hashPass } from "../middleware/hash";
import { authenticate } from "../middleware/authenticate";

const users = new Users();

const index = async (_req: Request, res:Response):Promise<void> => {

   try {
      const usersIndex = await users.index();
      res.json(usersIndex); 
   } catch (error) {
      throw new Error(`cannot show the users ${error}`);
   }
}

const showUser = async (req: Request, res:Response):Promise<void> => {

    try {
      const user = await users.show(Number(req.body.id));
      res.json(user); 
   } catch (error) {
      throw new Error(`cannot show the users ${error}`);
   }
 }

 const createUser = async (req: Request, res:Response):Promise<void> => {

    try {
      const user = await users.create(req.body.firstName,req.body.lastName,req.body.password);
      res.json(user); 
   } catch (error) {
      throw new Error(`cannot create the user ${error}`);
   }
 }



 export const userRoutes = ( app: express.Application ) => {
     app.get('/index',authenticate,index);
     app.get('/show',authenticate,showUser);
     app.post('/create',hashPass,createUser);
 }