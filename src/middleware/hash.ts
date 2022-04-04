import bcrypt from "bcrypt"
import {NextFunction, Request,Response} from 'express'
import dotenv from 'dotenv'

dotenv.config();

export const hashPass = async (req:Request,res:Response,next:NextFunction) : Promise<Response | void> => {
    try {

        const password = String(req.body.password);
        if (  password.length < 6 )
            return res.status(400).send('password is too short');
        
        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;

        next()

    } catch (error) {
        throw new Error(`couldn't hash the password ${error}`)
    }

        
}



