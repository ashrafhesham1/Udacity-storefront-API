import express,{ Request, Response } from "express";
import { ProductOrders } from "../models/products_orders";
import { authenticate } from "../middleware/authenticate";

const productsOrders = new ProductOrders();

const index = async (_req: Request, res:Response):Promise<void> => {
   const productsOrdersIndex = await productsOrders.index();
   res.json(productsOrdersIndex); 
}

const showProductOrders = async (req: Request, res:Response):Promise<void> => {
    const productsOrder = await productsOrders.show(Number(req.body.orderId),Number(req.body.productId));
    res.json(productsOrder); 
 }

 const createProductOrders = async (req: Request, res:Response):Promise<void> => {
    const productsOrder = await productsOrders.create(Number(req.body.orderId),Number(req.body.productId),req.body.quantity);
    res.json(productsOrder); 
 }

 const editProductOrders = async (req: Request, res:Response):Promise<void> => {
    const productsOrder = await productsOrders.edit(Number(req.body.orderId),Number(req.body.productId),req.body.quantity);
    res.json(productsOrder); 

 }



 export const ProductOrdersRoutes = ( app: express.Application ) => {
     app.get('/index',authenticate,index);
     app.get('/show',authenticate,showProductOrders);
     app.post('/create',authenticate,createProductOrders);
     app.post('/edit',authenticate,editProductOrders);
 }