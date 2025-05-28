import { Router } from 'express';
import { HomeController } from './../controllers/home-controller';
import { RegisterController } from './../controllers/user/register-controller';
import { LoginController } from './../controllers/user/login-controller';
import { authenticateToken } from './../middlewares/auth-middleware';
import { CreateTaskController } from './../controllers/task/create-controller';
import { ReadAllTaskController } from './../controllers/task/read-controller';
import { UpdateTaskController } from './../controllers/task/update-task-controller';

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
    await ReadTaskController.getAllTasks(req, res);
});

router.put('/task/:id', authenticateToken, async (req, res) => {
     await UpdateTaskController.update(req, res);
});

router.delete('/task/:id', authenticateToken, async (req, res) => {
    await DeleteTaskController.delete(req, res);
});

router.delete('/tasks/completed', authenticateToken, async (req, res) => {
    await DeleteTaskController.deleteCompletedTasks(req, res);
});

router.get('/task/:id', authenticateToken, async (req, res) => {
    await ReadTaskController.getTaskById(req, res);
});

router.get('/tasks/search', authenticateToken, async (req, res) => {
    await ReadTaskController.search(req, res);
});