import { Request,Response} from 'express';
import responseHandler from '../../helpers/responseHandler';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()
// @ts-ignore
import {User } from './../../database/models'
import bcrypt from 'bcryptjs';
class authController {
    static async getUser(req:Request,res:Response){
        try{
            const users = await User.findAll()
            res.status(200).send(users)
        } catch(error){
            console.error("Hey,an error here");
            
        }
    }
    static async createUser(req:Request,res:Response){
        try{
            const { username,password,email} = req.body;
            const findUser = await User.findOne({where:{email}});
            if(findUser){
                return responseHandler(res,400,"A user Already exists with that email")
            }
            const hash = await bcrypt.hashSync(password,10);
            console.log(hash)
            const user = await User.create({
                username,
                email,
                password:hash
            });
            const data = {
                message:"User created successfully",
                data:user
            }
            return responseHandler(res,201,data)
        } catch(error){
            console.error(error)
        }
    } 
    static async login(req:Request,res:Response){
        try{
            const { password,email} = req.body;
            const findUser = await User.findOne({where:{email:email}});
            if(findUser){
                const isPassword = await bcrypt.compareSync(password,findUser.dataValues.password)
                if(isPassword) {
                    // const token = jwt.sign(email, "hello", { expiresIn: '24h' })
                    const token = jwt.sign(
                        { email },
                        process.env.JWT_SECRET_KEY || "hello",
                        {
                          expiresIn: "24h",
                        }
                      );
                    return responseHandler(res,200,token)
                }
                return responseHandler(res,200,"login fail")
            }
            return 
        } catch(error){
            console.log(error)
        }
    }
}

export default authController;