import UserModel from '../model/user.model';
import { CreateUserDto } from '../interfaces/user.dto';



export const createUser = async (data:CreateUserDto) =>{
    const newUser = new UserModel(data);
    return await newUser.save();
}