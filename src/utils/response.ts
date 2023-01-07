import { Response } from "express"
import { STATUS_CODES } from '../utils/constant'
export const errorRespose = (res:Response, message?:string, data?:any, addOnData?:any)=>{
    return res.status(STATUS_CODES.BAD_REQUEST).json({
            data:data,
            status:"error",
            statusCode:400,
            message:[message],
            ...addOnData
        });
}

export const successResponse = (res:Response, message?:string, data?:any, addOnData?:any) =>{
    return res.status(STATUS_CODES.SUCESS).json({
            data:data,
            message:message,
            status:"success",
            statusCode:200,
            ...addOnData
        });
}