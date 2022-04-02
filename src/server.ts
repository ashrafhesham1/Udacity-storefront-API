import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './Routes/router'



dotenv.config()

const app: express.Application = express()

const port = process.env.SERVER_PORT ;
const address: string = `http://localhost:${port}`

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req: Request, res: Response)=> {
    res.send(`Please visit '/api' to start using the storefront api`)
})

app.use('/api',router);


app.listen(port, function () {
    console.log(`starting app on: ${address}`)
})



export default app;
