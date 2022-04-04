import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config();
if (process.env.ENVIRONMENT == "dev"){
    
}
const {POSTGRES_HOST,POSTGRES_USER,POSTGRES_PASSWORD} = process.env ;
const POSTGRES_DB = process.env.ENVIRONMENT === "test" ? process.env.POSTGRES_DB_TEST : process.env.POSTGRES_DB

const client = new Pool({
    host : POSTGRES_HOST,
    database: POSTGRES_DB,
    user : POSTGRES_USER,
    password: POSTGRES_PASSWORD
})

export default client