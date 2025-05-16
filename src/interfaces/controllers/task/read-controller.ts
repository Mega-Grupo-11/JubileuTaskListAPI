import { Request, Response } from 'express';
import { PrismaTaskRepository } from "../../../infrastructure/repositories/task-repositories";
import { ReadAllTaskUseCase } from "../../../usecases/task/read-all-use-case";
import { ReadByIdTaskUseCase } from "../../../usecases/task/read-by-id-use-case";
import { SearchTasksUseCase } from "../../../usecases/task/search-tasks-use-case";


export class ReadTaskController {
    static async getAllTasks(req: Request, res: Response) {
        const taskRepository = new PrismaTaskRepository(); 
        const getAllTaskUseCase = new ReadAllTaskUseCase(taskRepository);
        
        const userId = req.user?.id;

        try {
            const tasks = await getAllTaskUseCase.execute(userId);
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(500).json({ message: "Error fetching tasks", error: error.message });
        }
    }

    static async getTaskById(req: Request, res: Response) {
        const taskRepository = new PrismaTaskRepository();
        const getTaskByIdUseCase = new ReadByIdTaskUseCase(taskRepository);
    
        const taskId = req.params.id;
        try {
            const task = await getTaskByIdUseCase.execute(Number(taskId));
            return res.status(200).json(task);
        } catch (error: any) {
            return res.status(500).json({ message: "Error fetching task", error: error.message });
        }
    }

    static async search(req: Request, res: Response) {
        const { title, priority, date, sortField, sortOrder } = req.query;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const taskRepository = new PrismaTaskRepository();
        const searchTasksUseCase = new SearchTasksUseCase(taskRepository);

        try {
            const tasks = await searchTasksUseCase.execute(
                title as string,
                { priority: priority as string, date: date as string },
                { field: sortField as string, order: sortOrder as "asc" | "desc" }
            );
            return res.status(200).json(tasks);
        } catch (error: any) {
            return res.status(500).json({ message: "Error searching tasks", error: error.message });
        }
    }
}