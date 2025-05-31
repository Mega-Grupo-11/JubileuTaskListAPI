import { ITaskRepository } from "../../domain/repositories/task-repository";
import { CreateTaskDTO } from "../../domain/dtos/task/create-task-dto";
import { prisma } from "../../lib/prisma";
import { Tarefa } from "prisma/client";


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
    
    async update(taskId: number, taskData: Partial<Tarefa>): Promise<Tarefa> {
        const updatedTask = await prisma.tarefa.update({
            where: { id: taskId },
            data: taskData,
        });
        return updatedTask;
    }
    
    async delete(taskId: number): Promise<void> {
        await prisma.tarefa.delete({
            where: { id: taskId },
        });
    }

    async deleteCompletedTasks(): Promise<void> {
        await prisma.tarefa.deleteMany({
            where: { status: true },
        });
    }

    async findById(taskId: number): Promise<Tarefa[]> {
        const task = await prisma.tarefa.findMany({
            where: { id: taskId },
        });
        return task;
    }

    async searchTasks(
        title: string,
        filters?: { priority?: string; date?: string },
        sort?: { field: string; order: "asc" | "desc" }
    ): Promise<Tarefa[]> {
        const where: any = {
            titulo: { contains: title, mode: "insensitive" },
        };

        if (filters?.priority) {
            where.prioridade = filters.priority.toUpperCase();
        }

        if (filters?.date) {
            where.dataPrevista = new Date(filters.date);
        }

        const orderBy: any = {};
        if (sort?.field) {
            orderBy[sort.field] = sort.order;
        }

        return await prisma.tarefa.findMany({
            where,
            orderBy,
        });
    }

}