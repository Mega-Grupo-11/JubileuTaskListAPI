import { Router } from 'express';
import { HomeController } from './interfaces/controllers/home-controller';
import { RegisterController } from './interfaces/controllers/user/register-controller';
import { LoginController } from './interfaces/controllers/user/login-controller';
import { authenticateToken } from './interfaces/middlewares/auth-middleware';

export const router  = Router();

router.get('/', (req, res) => HomeController.welcome(req, res));    

router.post('/register', async (req, res) => {
    await RegisterController.register(req, res);
});

router.post('/login', async (req, res) => {
    await LoginController.login(req, res);
});

router.post('/task', authenticateToken, async (req, res) => {
    res.status(200).json({ message: "creation successfully completed!" });
});
