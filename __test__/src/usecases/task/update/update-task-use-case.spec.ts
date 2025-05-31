import { describe, it, expect, vi } from 'vitest';
import { UpdateTaskUseCase } from '../../../../../src/usecases/task/update-task-use-case';
import { mockTaskRepository, mockUpdatedTask } from './update-task-use-case.mock';

describe('UpdateTaskUseCase', () => {
  it('deve atualizar uma tarefa utilizando o repositório', async () => {
    // Arrange
    const updateTaskUseCase = new UpdateTaskUseCase(mockTaskRepository);
    const taskId = 1;
    const taskData = {
      titulo: 'Tarefa Atualizada',
      descricao: 'Descrição atualizada',
      prioridade: 'ALTA',
      status: true,
    };

    // Act
    const resultado = await updateTaskUseCase.execute(taskId, taskData);

    // Assert
    expect(mockTaskRepository.update).toHaveBeenCalledWith(taskId, taskData);
    expect(resultado).toEqual(mockUpdatedTask);
  });

  it('deve lançar erro se o ID da tarefa não for fornecido', async () => {
    // Arrange
    const updateTaskUseCase = new UpdateTaskUseCase(mockTaskRepository);
    const taskData = {
      titulo: 'Tarefa Atualizada',
      descricao: 'Descrição atualizada',
      prioridade: 'ALTA',
      status: true,
    };

    // Assert
    await expect(() => updateTaskUseCase.execute(NaN, taskData))
      .rejects
      .toThrowError('Task ID is required');
  });

  it('deve lançar erro se o repositório falhar ao atualizar a tarefa', async () => {
    // Arrange
    const updateTaskUseCase = new UpdateTaskUseCase({
      ...mockTaskRepository,
      update: vi.fn().mockRejectedValue(new Error('Erro no banco')),
    });
    const taskId = 1;
    const taskData = {
      titulo: 'Tarefa Atualizada',
      descricao: 'Descrição atualizada',
      prioridade: 'ALTA',
      status: true,
    };

    // Assert
    await expect(() => updateTaskUseCase.execute(taskId, taskData))
      .rejects
      .toThrowError('Erro no banco');
  });
});