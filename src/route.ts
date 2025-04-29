import { Router } from 'express';
import { HomeController } from './controllers/home-controller';
import { RegisterController } from './controllers/user/register-controller';
import { LoginController } from './controllers/user/login-controller';

export const router  = Router();

router.get('/', (req, res) => HomeController.welcome(req, res));    

router.post('/register', async (req, res) => {
    await RegisterController.register(req, res);
});

router.post('/login', async (req, res) => {
    await LoginController.login(req, res);
});
