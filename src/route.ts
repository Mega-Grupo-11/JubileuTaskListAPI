import { Router } from 'express';
import { HomeController } from './interfaces/controllers/home-controller';
import { RegisterController } from './interfaces/controllers/user/register-controller';
import { LoginController } from './interfaces/controllers/user/login-controller';
import { authenticateToken } from './interfaces/middlewares/auth-middleware';
import { CreateTaskController } from './interfaces/controllers/task/create-controller';
import { ReadAllTaskController } from './interfaces/controllers/task/read-controller';
import { UpdateTaskController } from './interfaces/controllers/task/update-task-controller';
import { DeleteTaskController } from './interfaces/controllers/task/delete-task-controller';

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
    await ReadAllTaskController.getAllTasks(req, res);
});

router.put('/task/:id', authenticateToken, async (req, res) => {
     await UpdateTaskController.update(req, res);
});

router.delete('/task/:id', authenticateToken, async (req, res) => {
    await DeleteTaskController.delete(req, res);
});