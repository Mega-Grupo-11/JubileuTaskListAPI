import { PrismaClient, Tarefa } from "@prisma/client";
import { ITaskRepository } from "../../domain/repositories/task-repository";
import { CreateTaskDTO } from "../../domain/dtos/create-task-dto";

const prisma = new PrismaClient();

export class PrismaTaskRepository implements ITaskRepository{
    
    async create(task: CreateTaskDTO): Promise<Tarefa> {
        const newTask = await prisma.tarefa.create({
            data: task,
        });
        return newTask;
    }

    async getAll(userId: number): Promise<Tarefa[]> {
        const userIdInt = Number(userId);

        if (isNaN(userIdInt)) {
            throw new Error('Invalid userId provided');
        }

        const tasks = await prisma.tarefa.findMany({
            where: {
                usuarioId: userIdInt,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        return tasks;
        }
}