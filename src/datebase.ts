import dotenv from 'dotenv'
import { Pool } from 'pg'
import fs from 'fs'
import { hostname } from 'os';

const updateDBJson = (host: string , database:string, user:string, password:string)=>{
    const dbStr = fs.readFileSync('database.json','utf-8');
    const dbJson = JSON.parse(dbStr);

    dbJson.env.host = host;
    dbJson.env.database = database;
    dbJson.env.user = user;
    dbJson.env.password = password;

    fs.writeFileSync('database.json',JSON.stringify(dbJson,null,2))

}

dotenv.config();

const {POSTGRES_HOST,POSTGRES_USER,POSTGRES_PASSWORD,POSTGRES_PORT}= process.env ;
const POSTGRES_DB = process.env.ENVIRONMENT === "test" ? process.env.POSTGRES_DB_TEST : process.env.POSTGRES_DB

const client = new Pool({
    host : POSTGRES_HOST,
    database: POSTGRES_DB,
    user : POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port:POSTGRES_PORT as unknown as number
})

/*updateDBJson(
    POSTGRES_HOST as string,
    POSTGRES_DB as string,
    POSTGRES_USER as string,
    POSTGRES_PASSWORD as string )*/

export default client

