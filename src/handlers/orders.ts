import express,{ Request, Response } from "express";
import { Orders } from "../models/orders";
import { Dashboard } from "../services/dashboard";
import { authenticate } from "../middleware/authenticate";


const orders = new Orders();
const dashboard = new Dashboard();


const index = async (_req: Request, res:Response):Promise<void> => {
   const ordersIndex = await orders.index();
   res.json(ordersIndex); 
}

const showorder = async (req: Request, res:Response):Promise<void> => {
    const order = await orders.show(Number(req.body.id));
    res.json(order); 
 }

 const createorder = async (req: Request, res:Response):Promise<void> => {
    const order = await orders.create(req.body.userId,req.body.active);
    res.json(order); 
 }

 const editorder = async (req: Request, res:Response):Promise<void> => {
    const order = await orders.edit(req.body.id,req.body.active);
    res.json(order); 

 }


 const userCurrentOrders = async (req: Request, res:Response):Promise<void> => {
   const orders = await dashboard.userCurrentOrders(req.body.id);
   res.send(orders);
}

 export const ordersRoutes = ( app: express.Application ) => {
     app.get('/index',authenticate,index);
     app.get('/show',authenticate,showorder);
     app.post('/create',authenticate,createorder);
     app.post('/edit',authenticate,editorder);
     app.get('/current',authenticate,userCurrentOrders)
 }