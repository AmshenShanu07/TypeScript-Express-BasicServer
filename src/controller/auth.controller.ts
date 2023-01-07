import { Request, Response } from "express";
import { CreateUserDto } from "../interfaces/user.dto";
import { signUpUserService } from "../service/auth.service";
import { SUCCESS_MESSAGE } from "../utils/constant";
import { successResponse } from "../utils/response";

export const createUserController = (req:Request, res:Response) => {
    const newUser:CreateUserDto = req.body;
    signUpUserService(newUser).then(()=>{
        return successResponse(res,SUCCESS_MESSAGE.CREATED_USER);
    }).catch(()=>{

    })
}