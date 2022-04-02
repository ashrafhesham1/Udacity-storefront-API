import { QueryResult } from "pg";
import client from "../datebase";

export type user = {
    id: Number;
    firstName: string;
    lastName: string;
    password: string;
}

export class Users {

     async index():Promise<user[]> {
       try {
        const connection = await client.connect()
        const sql = ' SELECT * FROM users ;'
        const res = await connection.query(sql)
        connection.release();
        return res.rows;

       } catch (error) {
           throw new Error (`couldn't get users ${error}`);
       }
    }

    async show( id: Number ):Promise<user> {
        try {
         const connection = await client.connect()
         const sql = `SELECT * FROM USERS WHERE id=${id} ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows[0];
 
        } catch (error) {
            throw new Error (`couldn't get the user ${error}`);
        }
     }

     async create( firstName: string , lastName: string, password: string):Promise<user[]> {
        try {
         const connection = await client.connect();
         const sql = `INSERT INTO users (first_name, last_name, password) VALUES ('${firstName}','${lastName}','${password}') ;`
         const res = await connection.query(sql)
         connection.release();
         return res.rows;
 
        } catch (error) {
            throw new Error (`cannot create the user ${error}`);
        }
     }

    

}