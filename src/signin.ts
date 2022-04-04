import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { Request,Response } from 'express'
import { Users } from './models/users'
import { createJWT } from './middleware/authenticate'

dotenv.config();
const users = new Users();

export const signIn = async ( req:Request, res:Response) =>{
    const id = req.body.id;
    const password = req.body.password;

    const user = await users.show(id);
    const checkValid = user && await bcrypt.compare(password,user.password)

    if (!checkValid)
        return res.status(400).send('wrong cardintials');
    
    res.send(createJWT(id));
    
}

