import { Tarefa } from "@prisma/client";
import { CreateTaskDTO } from "../dtos/create-task-dto";

export interface ITaskRepository {
    create(task: CreateTaskDTO): Promise<Tarefa>;
    getAll(userId: number): Promise<Tarefa[]>;
    update(taskId: number, taskData: Partial<Tarefa>): Promise<Tarefa>;
}