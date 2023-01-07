import { NextFunction, Request, Response } from "express"
import { Schema } from "joi"
import { STATUS_CODES } from "../utils/constant";
import { errorRespose } from "../utils/response";

const validate = (schema:Schema,body:any) =>{
    return new Promise((resolve)=>{
        try{
            const {error} = schema.validate(body);
            resolve(error)
        }catch(e){
            throw e;
        }
    })
}

const validateRequest = (schema:Schema,isQuery:boolean=false)=>{
    return async (req:Request, res:Response, next:NextFunction) =>{
        const body = isQuery?req.query:req.body;
        const error:any = await validate(schema,body);
        if(error){
            return errorRespose(res,error.details[0].message,{})
        }
        

        return next();
    }
}


export default validateRequest;