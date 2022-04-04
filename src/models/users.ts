import { QueryResult } from "pg";
import { stringify } from "querystring";
import client from "../datebase";
import { createJWT } from "../middleware/authenticate";

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

     async create( firstName: string , lastName: string, password: string):Promise<String> {
        try {
         const connection = await client.connect();
         const sql = `INSERT INTO users (first_name, last_name, password) VALUES ('${firstName}','${lastName}','${password}') ;`
         const res = await connection.query(sql)
         connection.release();
         const userID = await lastUser();
         const userToken =  createJWT(String(userID));
         return userToken;
 
        } catch (error) {
            throw new Error (`cannot create the user ${error}`);
        }
     }

}

const lastUser = async () : Promise<Number>=>{
    try {
        const connection = await client.connect();
        const sql = `select id from users order by id desc limit 1 ;`
        const res = await connection.query(sql)
        connection.release();
        return res.rows[0][0];

       } catch (error) {
           throw new Error (`cannot create the user ${error}`);
       }
    
}