import { Router } from 'express';
import { HomeController } from './../controllers/home-controller';
import { RegisterController } from './../controllers/user/register-controller';
import { LoginController } from './../controllers/user/login-controller';
import { authenticateToken } from './../middlewares/auth-middleware';
import { CreateTaskController } from './../controllers/task/create-controller';
import { ReadAllTaskController } from './../controllers/task/read-controller';
import { UpdateTaskController } from './../controllers/task/update-task-controller';
import { ForgotPasswordController } from '../controllers/user/auth/forgot-password-controller';
import { ForgotPasswordUseCase } from '../../usecases/user/auth/ForgotPasswordUseCase';
import { PrismaUserRepository } from '../../infrastructure/repositories/user-repositories';
import { NodemailerService } from '../../infrastructure/services/NodemailerService';
import { ResetPasswordUseCase } from '../../usecases/user/auth/ResetPasswordUseCase';
import { ResetPasswordController } from '../controllers/user/auth/reset-password-controller';

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

const userRepo = new PrismaUserRepository();
const mailer = new NodemailerService();

const forgotPasswordUseCase = new ForgotPasswordUseCase(userRepo, mailer);
const forgotPasswordController = new ForgotPasswordController(forgotPasswordUseCase);

router.post('/forgot-password', async (req, res) => {
  await forgotPasswordController.forgotPassword(req, res);
});

const resetPasswordUseCase = new ResetPasswordUseCase(userRepo);
const resetPasswordController = new ResetPasswordController(resetPasswordUseCase);

router.post('/reset-password', async (req, res) => {
    await resetPasswordController.resetPassword(req, res);
});
