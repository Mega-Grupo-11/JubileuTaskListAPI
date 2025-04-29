import { describe, it, expect, vi } from 'vitest';
import { CreateUseCase } from '../../../../src/usecases/user/create-use-case';
import { User } from '../../../../src/domain/entities/user';
import { IUserRepository } from '../../../../src/domain/repositories/user-repository';

describe('CreateUseCase', () => {
  it('deve criar um novo usuário utilizando o repositório', async () => {
    // Arrange
    const user: User = {
      id: 123,
      nome: 'João',
      email: 'joao@example.com',
      passwordHash: 'hashedpassword123',
    };

    const mockUserRepository: IUserRepository = {
        create: vi.fn().mockResolvedValue(user),
        findByName: vi.fn(), // mock vazio só para cumprir o contrato
      };

    const createUseCase = new CreateUseCase(mockUserRepository);

    // Act
    const resultado = await createUseCase.execute(user);

    // Assert
    expect(mockUserRepository.create).toHaveBeenCalledWith(user);
    expect(resultado).toEqual(user);
  });
});
