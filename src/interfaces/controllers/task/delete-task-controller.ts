import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../../../usecases/task/delete-task-use-case";
import { PrismaTaskRepository } from "../../../infrastructure/repositories/task-repositories";

export class DeleteTaskController {
    static async delete(req: Request, res: Response) {
        const taskId = req.params.id;

        if (!taskId) {
            return res.status(400).json({ message: "Task ID is required" });
        }

        const taskRepository = new PrismaTaskRepository();
        const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);

        try {
            await deleteTaskUseCase.execute(Number(taskId));
            return res.status(204).send();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            return res.status(500).json({ message: "Error deleting task", error: errorMessage });
        }
    }
}