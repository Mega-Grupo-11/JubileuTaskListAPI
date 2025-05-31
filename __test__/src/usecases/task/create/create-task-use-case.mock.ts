import { vi } from 'vitest';
import { ITaskRepository } from '../../../../../src/domain/repositories/task-repository';
import { CreateTaskDTO } from '../../../../../src/domain/dtos/task/create-task-dto';

export const mockTaskRepository: ITaskRepository = {
  create: vi.fn(async (task: CreateTaskDTO) => ({
    ...task,
    id: 1,
    createdAt: new Date(),
  })),
  getAll: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
  deleteCompletedTasks: vi.fn(),
  findById: vi.fn(),
  searchTasks: vi.fn(),
};

export const mockTask: CreateTaskDTO = {
  titulo: 'Estudar Vitest',
  descricao: 'Aprender testes com Vitest',
  status: false,
  usuarioId: 123,
  dataPrevista: new Date(),
  prioridade: 'MEDIA',
};