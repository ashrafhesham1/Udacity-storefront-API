import { Pool } from "pg";
import config from "./config";

const configs = config();

const client = new Pool({
  host: configs.databaseHost,
  database: configs.database,
  user: configs.databaseUser,
  password: configs.databasePassword,
  port: configs.databasePort,
});

export const query = async (sql: string) => {
  const connection = await client.connect();
  const res = await connection.query(sql);
  connection.release();
  return res;
};

export default client;
