import express,{ Request, Response } from "express";
import { Users } from "../models/users";
import { hashPass } from "../middleware/hash";
import { authenticate } from "../middleware/authenticate";

const users = new Users();

const index = async (_req: Request, res:Response):Promise<void> => {
   const usersIndex = await users.index();
   res.json(usersIndex); 
}

const showUser = async (req: Request, res:Response):Promise<void> => {
    const user = await users.show(Number(req.body.id));
    res.json(user); 
 }

 const createUser = async (req: Request, res:Response):Promise<void> => {
    const user = await users.create(req.body.firstName,req.body.lastName,req.body.password);
    res.json(user); 
 }



 export const userRoutes = ( app: express.Application ) => {
     app.get('/index',authenticate,index);
     app.get('/show',authenticate,showUser);
     app.post('/create',authenticate,hashPass,createUser);
 }