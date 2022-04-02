import client from "../datebase";

export type product = {
    id: Number;
    name: string;
    price: Number;
}

export class Products {

     async index():Promise<product[]> {
       try {
        const connection = await client.connect()
        const sql = ' SELECT * FROM products ;'
        const res = await connection.query(sql)
        connection.release();
        return res.rows;

       } catch (error) {
           throw new Error (`couldn't get products ${error}`);
       }
    }

    async show( id: Number ):Promise<product> {
        try {
         const connection = await client.connect()
         const sql = `SELECT * FROM products WHERE id=${id} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows[0];
 
        } catch (error) {
            throw new Error (`couldn't get the product ${error}`);
        }
     }

     async create( name: string, price: Number):Promise<Number> {
        try {
         const connection = await client.connect();
         const sql = `INSERT INTO products (name,price) VALUES ('${name}',${price}) ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rowCount;
 
        } catch (error) {
            throw new Error (`cannot create the product ${error}`);
        }
     }

     async edit( id: Number, newName: string = "", newPrice: Number = 0 ):Promise<product> {
        try {
         
         const oldProduct = await this.show(id);
         newName = newName || oldProduct.name;
         newPrice = newPrice || oldProduct.price;
         
         const connection = await client.connect();
         const sql = `UPDATE products SET name='${newName}' , price=${newPrice} WHERE id=${id} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows[0];
 
        } catch (error) {
            throw new Error (`cannot edit the product ${error}`);
        }
     }

    
}