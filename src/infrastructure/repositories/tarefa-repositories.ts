import { PrismaClient } from "@prisma/client";
import { ITaskRepository } from "../../domain/repositories/task-repositories";
import { CreateTaskDTO } from "../../domain/dtos/create-task-dto";

const prisma = new PrismaClient();

export class PrismaTaskRepository implements ITaskRepository{
    async create(task: CreateTaskDTO): Promise<any> {
        const newTask = await prisma.tarefa.create({
            data: task,
        });
        return newTask;
    }
}