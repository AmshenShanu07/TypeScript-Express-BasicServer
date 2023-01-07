import { Router } from 'express';
import { createUserController } from '../controller/auth.controller';
import { createUserValidation } from '../middlewares/requestValidators/auth.validator';
const router = Router();

router.post('/user',
    createUserValidation,
    createUserController
);

export default router;