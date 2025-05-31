import { describe, it, expect, vi } from 'vitest';
import { CreateTaskUseCase } from '../../../../../src/usecases/task/create-use-case';
import { mockTaskRepository} from './create-task-use-case.mock';

describe('CreateTaskUseCase', () => {
  it('deve criar uma nova tarefa utilizando o repositório', async () => {
    // Arrange
    const createTaskUseCase = new CreateTaskUseCase(mockTaskRepository);

    // Act
    const resultado = await createTaskUseCase.execute(mockTask);

    // Assert
    expect(mockTaskRepository.create).toHaveBeenCalledWith(mockTask);
    expect(resultado).toEqual(mockTask);
  });

  it('deve lançar erro se o repositório falhar ao criar a tarefa', async () => {
    // Arrange
    const createTaskUseCase = new CreateTaskUseCase({
      ...mockTaskRepository,
      create: vi.fn().mockRejectedValue(new Error('Erro no banco')),
    });

    // Assert
    await expect(() => createTaskUseCase.execute(mockTask))
      .rejects
      .toThrowError('Erro no banco');
  });

  it('deve lançar erro se o título da tarefa estiver vazio', async () => {
    // Arrange
    const createTaskUseCase = new CreateTaskUseCase(mockTaskRepository);
    const taskInvalida = { ...mockTask, titulo: '' };

    // Assert
    await expect(() => createTaskUseCase.execute(taskInvalida))
      .rejects
      .toThrowError('Title is required');
  });
});