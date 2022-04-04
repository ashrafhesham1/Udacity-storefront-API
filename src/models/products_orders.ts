import client from "../datebase";

export type productOrder = {
    orderId: Number;
    productId: Number;
    quantity: Number;
}

export class ProductOrders {

     async index():Promise<productOrder[]> {
       try {
        const connection = await client.connect()
        const sql = ' SELECT * FROM products_orders ;'
        const res = await connection.query(sql)
        connection.release();
        return res.rows;

       } catch (error) {
           throw new Error (`couldn't get the products in the orders ${error}`);
       }
    }

    async show( orderId: Number, productId: Number ):Promise<productOrder> {
        try {
         const connection = await client.connect()
         const sql = `SELECT * FROM products_orders WHERE order_id=${orderId} AND product_id=${productId} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows[0];
 
        } catch (error) {
            throw new Error (`couldn't get the order ${error}`);
        }
     }

     async create(orderId: Number, productId: Number, quantity: Number ):Promise<Number> {
        try {
         const connection = await client.connect();
         const sql = `INSERT INTO products_orders (order_id,product_id,quantity) VALUES (${orderId},${productId},${quantity}) ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rowCount;
 
        } catch (error) {
            throw new Error (`cannot create the order ${error}`);
        }
     }

     async edit( orderId: Number, productId: Number, quantity: Number ):Promise<Number> {
        try {
         
         const connection = await client.connect();
         const sql = `UPDATE products_orders SET quantity=${quantity} WHERE order_id=${orderId} AND product_id=${productId} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rowCount;
 
        } catch (error) {
            throw new Error (`cannot edit the order ${error}`);
        }
     }

    

}