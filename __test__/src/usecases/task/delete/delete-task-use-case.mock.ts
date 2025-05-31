import { vi } from 'vitest';
import { ITaskRepository } from '../../../../../src/domain/repositories/task-repository';

export const mockTaskRepository: ITaskRepository = {
  create: vi.fn(),
  getAll: vi.fn(),
  update: vi.fn(),
  delete: vi.fn(),
  deleteCompletedTasks: vi.fn(),
  findById: vi.fn(),
  searchTasks: vi.fn(),
};