import express,{ Request, Response } from "express";
import { Orders } from "../models/orders";
import { Dashboard } from "../services/dashboard";
import { authenticate } from "../middleware/authenticate";


const orders = new Orders();
const dashboard = new Dashboard();


const index = async (_req: Request, res:Response):Promise<void> => {
   try {
      const ordersIndex = await orders.index();
      res.json(ordersIndex); 
   } catch (error) {
      throw new Error(`cannot get the orders ${error}`);
   }

}

const showorder = async (req: Request, res:Response):Promise<void> => {
    try {
      const order = await orders.show(Number(req.body.id));
      res.json(order); 
   } catch (error) {
      throw new Error(`cannot get the order ${error}`);
   }
 }

 const createorder = async (req: Request, res:Response):Promise<void> => {

    try {
      const order = await orders.create(req.body.userId,req.body.active);
      res.json(order); 
   } catch (error) {
      throw new Error(`cannot create the order ${error}`);
   }
 }

 const editorder = async (req: Request, res:Response):Promise<void> => {

    try {
      const order = await orders.edit(req.body.id,req.body.active);
      res.json(order); 
   } catch (error) {
      throw new Error(`cannot edit the order ${error}`);
   }
 }


 const userCurrentOrders = async (req: Request, res:Response):Promise<void> => {
   
   try {
      const orders = await dashboard.userCurrentOrders(req.body.id);
      res.send(orders);
   } catch (error) {
      throw new Error(`cannot show the orders ${error}`);
   }
}

 export const ordersRoutes = ( app: express.Application ) => {
     app.get('/index',authenticate,index);
     app.get('/show',authenticate,showorder);
     app.post('/create',authenticate,createorder);
     app.post('/edit',authenticate,editorder);
     app.get('/current',authenticate,userCurrentOrders)
 }