import { Request,Response} from 'express';
class authController {
    static async getUser(req:Request,res:Response){
        try{
            res.status(200).send("This is sth that can easily be done")
        } catch(error){
            console.error("Hey,an error here");
            
        }
    }
}

export default authController;