import { Router } from 'express';
import { HomeController } from './interfaces/controllers/home-controller';
import { RegisterController } from './interfaces/controllers/user/register-controller';
import { LoginController } from './interfaces/controllers/user/login-controller';
import { authenticateToken } from './interfaces/middlewares/auth-middleware';
import { CreateTaskController } from './interfaces/controllers/task/create-controller';
import { GetAllTaskController } from './interfaces/controllers/task/get-controller';

export const router  = Router();

router.get('/', (req, res) => HomeController.welcome(req, res));    

router.post('/register', async (req, res) => {
    await RegisterController.register(req, res);
});

router.post('/login', async (req, res) => {
    await LoginController.login(req, res);
});

router.post('/task', authenticateToken, async (req, res) => {
    await CreateTaskController.create(req, res);
});

router.get('/tasks', authenticateToken, async (req, res) => {
    await GetAllTaskController.getAllTasks(req, res);
});