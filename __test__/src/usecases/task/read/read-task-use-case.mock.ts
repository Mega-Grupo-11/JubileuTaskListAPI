import { vi } from 'vitest';
import { ITaskRepository } from '../../../../../src/domain/repositories/task-repository';
import { Task } from '../../../../../src/domain/entities/task';

export const mockTaskRepository: ITaskRepository = {
  create: vi.fn(),
  getAll: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
  deleteCompletedTasks: vi.fn(),
  findById: vi.fn(async (taskId: number) => [
    {
      id: taskId,
      titulo: 'Estudar Vitest',
      descricao: 'Aprender testes com Vitest',
      status: false,
      usuarioId: 123,
      dataPrevista: new Date(),
      prioridade: 'MEDIA',
      createdAt: new Date(),
    },
  ]),
  searchTasks: vi.fn(),
};

export const mockTask: Task = {
  id: 1,
  titulo: 'Estudar Vitest',
  descricao: 'Aprender testes com Vitest',
  status: false,
  usuarioId: 123,
  dataPrevista: new Date(),
  prioridade: 'MEDIA',
  createdAt: new Date(),
};