import { Tarefa } from "@prisma/client";
import { CreateTaskDTO } from "../dtos/create-task-dto";

export interface ITaskRepository {
    create(task: CreateTaskDTO): Promise<Tarefa>;
}