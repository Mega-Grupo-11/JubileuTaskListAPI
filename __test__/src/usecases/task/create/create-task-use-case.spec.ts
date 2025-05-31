import { describe, it, expect, vi } from 'vitest';
import { CreateTaskUseCase } from '../../../../../src/usecases/task/create-use-case';
import { mockTaskRepository, mockTask } from './create-task-use-case.mock';

describe('CreateTaskUseCase', () => {
  it('deve criar uma nova tarefa utilizando o repositório', async () => {
    const createTaskUseCase = new CreateTaskUseCase(mockTaskRepository);

    const resultado = await createTaskUseCase.execute(mockTask);

    expect(mockTaskRepository.create).toHaveBeenCalledWith(mockTask);
    expect(resultado).toEqual(mockTask);
  });

  it('deve lançar erro se o repositório falhar ao criar a tarefa', async () => {
    const createTaskUseCase = new CreateTaskUseCase({
      ...mockTaskRepository,
      create: vi.fn().mockRejectedValue(new Error('Erro no banco')),
    });

    await expect(() => createTaskUseCase.execute(mockTask))
      .rejects
      .toThrowError('Erro no banco');
  });

  it('deve lançar erro se o título da tarefa estiver vazio', async () => {
    const createTaskUseCase = new CreateTaskUseCase(mockTaskRepository);
    const taskInvalida = { ...mockTask, titulo: '' };

    await expect(() => createTaskUseCase.execute(taskInvalida))
      .rejects
      .toThrowError('Title is required');
  });
});