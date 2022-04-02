import client from "../datebase";

export type order = {
    id: Number;
    user_id: Number;
    active: boolean;
}

export class Orders {

     async index():Promise<order[]> {
       try {
        const connection = await client.connect()
        const sql = ' SELECT * FROM orders ;'
        const res = await connection.query(sql)
        connection.release();
        return res.rows;

       } catch (error) {
           throw new Error (`couldn't get orders ${error}`);
       }
    }

    async show( id: Number ):Promise<order> {
        try {
         const connection = await client.connect()
         const sql = `SELECT * FROM orders WHERE id=${id} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows[0];
 
        } catch (error) {
            throw new Error (`couldn't get the order ${error}`);
        }
     }

     async create(userId: Number, active: boolean ):Promise<Number> {
        try {
         const connection = await client.connect();
         const sql = `INSERT INTO orders (user_id,active) VALUES (${userId},'${active}') ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rowCount;
 
        } catch (error) {
            throw new Error (`cannot create the order ${error}`);
        }
     }

     async edit( id: Number,active: boolean ):Promise<order> {
        try {
         
         const connection = await client.connect();
         const sql = `UPDATE orders SET active=${active} WHERE id=${id} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows[0];
 
        } catch (error) {
            throw new Error (`cannot edit the order ${error}`);
        }
     }

    

}