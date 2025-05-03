import { Request, Response } from 'express';
import { PrismaTaskRepository } from "../../../infrastructure/repositories/task-repositories";
import { GetAllTaskUseCase } from "../../../usecases/task/get-all-use-case";


export class GetAllTaskController {
    static async getAllTasks(req: Request, res: Response) {
        const taskRepository = new PrismaTaskRepository(); 
        const getAllTaskUseCase = new GetAllTaskUseCase(taskRepository);
        
        const userId = req.user?.id;

        try {
            const tasks = await getAllTaskUseCase.execute(userId);
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(500).json({ message: "Error fetching tasks", error: error.message });
        }
    }
}