import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./Routes/router";
import config from "./config";

const configs = config();

const app: express.Application = express();

const host = configs.serverHost;
const port = configs.serverPort;
const address: string = `http://${host}:${port}`;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send(`Please visit '/api' to start using the storefront api`);
});

app.use("/api", router);

app.listen(port, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
