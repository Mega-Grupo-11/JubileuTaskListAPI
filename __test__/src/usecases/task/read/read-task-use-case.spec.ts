import { describe, it, expect, vi } from 'vitest';
import { ReadByIdTaskUseCase } from '../../../../../src/usecases/task/read-by-id-use-case';
import { mockTaskRepository, mockTask } from './read-task-use-case.mock';

describe('ReadByIdTaskUseCase', () => {
  it('deve buscar uma tarefa pelo ID utilizando o repositório', async () => {
    // Arrange
    const readByIdTaskUseCase = new ReadByIdTaskUseCase(mockTaskRepository);
    const taskId = 1;

    // Act
    const resultado = await readByIdTaskUseCase.execute(taskId);

    // Assert
    expect(mockTaskRepository.findById).toHaveBeenCalledWith(taskId);
    expect(resultado).toEqual(mockTask);
  });

  it('deve lançar erro se o ID da tarefa não for fornecido', async () => {
    // Arrange
    const readByIdTaskUseCase = new ReadByIdTaskUseCase(mockTaskRepository);

    // Assert
    await expect(() => readByIdTaskUseCase.execute(undefined))
      .rejects
      .toThrowError('Task ID is required');
  });

  it('deve lançar erro se a tarefa não for encontrada', async () => {
    // Arrange
    const readByIdTaskUseCase = new ReadByIdTaskUseCase({
      ...mockTaskRepository,
      findById: vi.fn().mockResolvedValue(null),
    });
    const taskId = 999;

    // Assert
    await expect(() => readByIdTaskUseCase.execute(taskId))
      .rejects
      .toThrowError('Task not found');
  });
});