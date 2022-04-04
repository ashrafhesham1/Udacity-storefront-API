import express,{ Request, Response } from "express";
import { Products } from "../models/products";
import { authenticate } from "../middleware/authenticate";

const products = new Products();

const index = async (_req: Request, res:Response):Promise<void> => {

   try {
      const productsIndex = await products.index();
      res.json(productsIndex); 
   } catch (error) {
      throw new Error(`cannot shpw the products ${error}`);
   }
}

const showProduct = async (req: Request, res:Response):Promise<void> => {

    try {
      const product = await products.show(Number(req.body.id));
      res.json(product); 
   } catch (error) {
      throw new Error(`cannot show the product ${error}`);
   }
 }

 const createProduct = async (req: Request, res:Response):Promise<void> => {

    try {
      const product = await products.create(req.body.name,req.body.price);
      res.json(product); 
   } catch (error) {
      throw new Error(`cannot create the product ${error}`);
   }
 }

 const editProduct = async (req: Request, res:Response):Promise<void> => {

    try {

      const newName = req.body.name || '';
      const newPrice = req.body.price || 0 ;
  
      const product = await products.edit(req.body.id,newName,newPrice);
      res.json(product); 

   } catch (error) {
      throw new Error(`cannot edit the product ${error}`);
   }

 }



 export const productsRoutes = ( app: express.Application ) => {
     app.get('/index',index);
     app.get('/show',showProduct);
     app.post('/create',authenticate,createProduct);
     app.post('/edit',authenticate,editProduct);
 }