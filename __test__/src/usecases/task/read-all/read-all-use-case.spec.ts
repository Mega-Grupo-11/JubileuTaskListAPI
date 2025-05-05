import { describe, it, expect, vi, Mock } from 'vitest';
import { ReadAllTaskUseCase } from '../../../../../src/usecases/task/read-all-use-case';
import { mockTaskRepository, mockTasks } from './read-all-use-case.mock';

describe('ReadAllTaskUseCase', () => {
  const readAllTaskUseCase = new ReadAllTaskUseCase(mockTaskRepository);

  it('deve retornar uma lista de tarefas quando o repositório retornar tarefas', async () => {
    (mockTaskRepository.getAll as Mock).mockResolvedValue(mockTasks);

    const result = await readAllTaskUseCase.execute(1);

    expect(mockTaskRepository.getAll).toHaveBeenCalledWith(1);
    expect(result).toEqual(mockTasks);
  });

  it('deve gerar um erro quando o repositório retornar nulo ou indefinido', async () => {
    (mockTaskRepository.getAll as Mock).mockResolvedValue(null);

    await expect(readAllTaskUseCase.execute(1)).rejects.toThrow(
      'Failed to get tasks'
    );
    expect(mockTaskRepository.getAll).toHaveBeenCalledWith(1);
  });

  it('deve gerar um erro quando o repositório gerar um erro', async () => {
    (mockTaskRepository.getAll as Mock).mockRejectedValue(
      new Error('Repository error')
    );

    await expect(readAllTaskUseCase.execute(1)).rejects.toThrow(
      'Error in get all task use case: Repository error'
    );
    expect(mockTaskRepository.getAll).toHaveBeenCalledWith(1);
  });
});
