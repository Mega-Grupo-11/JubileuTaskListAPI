import { vi } from 'vitest';
import { ITaskRepository } from '../../../../../src/domain/repositories/task-repository';
import { UpdateTaskDTO } from '../../../../../src/domain/dtos/task/update-task-dto';
import { Tarefa } from 'prisma/client';

export const mockTaskRepository: ITaskRepository = {
  create: vi.fn(),
  getAll: vi.fn(),
  update: vi.fn(async (taskId: number, taskData: Partial<UpdateTaskDTO>) => ({
    id: taskId,
    ...taskData,
    createdAt: new Date(),
  })),
  delete: vi.fn(),
  deleteCompletedTasks: vi.fn(),
  findById: vi.fn(),
  searchTasks: vi.fn(),
};

export const mockUpdatedTask: Tarefa = {
  id: 1,
  titulo: 'Tarefa Atualizada',
  descricao: 'Descrição atualizada',
  prioridade: 'ALTA',
  status: true,
  usuarioId: 123,
  dataPrevista: new Date(),
  createdAt: new Date(),
};