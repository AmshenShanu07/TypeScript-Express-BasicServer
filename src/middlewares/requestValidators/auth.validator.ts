import joi from 'joi';
import { ERROR_MESSAGE } from '../../utils/constant';

import validateRequest from "../validator";

export const createUserValidation = validateRequest(
    joi.object({
        firstName:joi.string().max(30).min(2).required(),
        lastName:joi.string().max(30).min(1).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).max(25).required(),
        confirmPassword: joi.ref('password')
    }).with("password","confirmPassword")
)