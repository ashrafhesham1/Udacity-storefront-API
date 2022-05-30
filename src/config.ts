import dotenv from "dotenv";

dotenv.config();

type configType = {
  databaseHost: string;
  databasePort: number;
  databaseUser: string;
  databasePassword: string;
  database: string;
  serverHost: string;
  serverPort: string;
  tokenSecret: string;
};

const config = (): configType => {
  return {
    databaseHost: process.env.POSTGRES_HOST as string,
    databasePort: process.env.POSTGRES_PORT as unknown as number,
    databaseUser: process.env.POSTGRES_USER as string,
    databasePassword: process.env.POSTGRES_PASSWORD as string,
    database: (process.env.ENVIRONMENT === "test"
      ? process.env.POSTGRES_DB_TEST
      : process.env.POSTGRES_DB) as string,
    serverHost: process.env.SERVER_HOST as string,
    serverPort: process.env.SERVER_PORT as string,
    tokenSecret: process.env.TOKEN_SECRET as string,
  };
};

export default config;
