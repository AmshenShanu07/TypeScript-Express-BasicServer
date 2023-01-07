import { CreateUserDto } from "../interfaces/user.dto"

export const signUpUserService = (data:CreateUserDto) =>{
    return new Promise((resolve,reject)=>{
        try{
            resolve("great")
        }catch(e){
            reject(e);
        }
    }) 
}