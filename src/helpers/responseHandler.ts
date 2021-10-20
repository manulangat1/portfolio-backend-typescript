import { Request,Response} from 'express';
export default (res:Response,message:string,status:any,data:any) => {
    res.status(status).send(
        data
    )
}