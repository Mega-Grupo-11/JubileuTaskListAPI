import { describe, it, expect, vi } from 'vitest';
import { DeleteTaskUseCase } from '../../../../../src/usecases/task/delete-task-use-case';
import { mockTaskRepository } from './delete-task-use-case.mock';

describe('DeleteTaskUseCase', () => {
  it('deve excluir uma tarefa utilizando o repositório', async () => {
    // Arrange
    const deleteTaskUseCase = new DeleteTaskUseCase(mockTaskRepository);
    const taskId = 1;

    // Act
    await deleteTaskUseCase.execute(taskId);

    // Assert
    expect(mockTaskRepository.delete).toHaveBeenCalledWith(taskId);
    expect(mockTaskRepository.delete).toHaveBeenCalledOnce();
  });

  it('deve lançar erro ao tentar excluir uma tarefa inexistente', async () => {
    // Arrange
    const deleteTaskUseCase = new DeleteTaskUseCase({
      ...mockTaskRepository,
      delete: vi.fn().mockRejectedValue(new Error('Task not found')),
    });
    const taskId = 999;

    // Assert
    await expect(() => deleteTaskUseCase.execute(taskId))
      .rejects
      .toThrowError('Task not found');
  });

  it('deve lançar erro se o repositório falhar ao excluir a tarefa', async () => {
    // Arrange
    const deleteTaskUseCase = new DeleteTaskUseCase({
      ...mockTaskRepository,
      delete: vi.fn().mockRejectedValue(new Error('Erro no banco')),
    });
    const taskId = 1;

    // Assert
    await expect(() => deleteTaskUseCase.execute(taskId))
      .rejects
      .toThrowError('Erro no banco');
  });

  it('deve lançar erro se o ID da tarefa for inválido', async () => {
    // Arrange
    const deleteTaskUseCase = new DeleteTaskUseCase(mockTaskRepository);
    const invalidTaskId = -1;

    // Assert
    await expect(() => deleteTaskUseCase.execute(invalidTaskId))
      .rejects
      .toThrowError('Invalid task ID');
  });
});