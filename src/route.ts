import { Router } from 'express';
import { HomeController } from './controllers/home-controller';
import { RegisterController } from './controllers/user/register-controller';

export const router  = Router();

router.get('/', (req, res) => HomeController.welcome(req, res));    

router.post('/register', async (req, res) => {
    await RegisterController.register(req, res);
});
