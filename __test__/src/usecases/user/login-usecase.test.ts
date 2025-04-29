import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LoginUseCase } from '../../../../src/usecases/user/login-use-case';
import { IUserRepository } from '../../../../src/domain/repositories/user-repository';
import { AuthService } from '../../../../src/infrastructure/jwt/auth-service';
import bcrypt from 'bcrypt';

// Simula uma senha real + hash para teste
const senha = 'senha123';
const senhaHash = await bcrypt.hash(senha, 10);

describe('LoginUseCase', () => {
  let mockUserRepository: IUserRepository;
  let mockAuthService: AuthService;
  let loginUseCase: LoginUseCase;

  const user = {
    id: 1,
    nome: 'João',
    email: 'joao@example.com',
    passwordHash: senhaHash,
  };

  beforeEach(() => {
    mockUserRepository = {
      findByName: vi.fn().mockResolvedValue(user),
      create: vi.fn(), // apenas para satisfazer a interface
    };

    mockAuthService = {
      generateToken: vi.fn().mockReturnValue('fake-jwt-token'),
    } as unknown as AuthService;

    loginUseCase = new LoginUseCase(mockUserRepository, mockAuthService);
  });

  it('deve retornar token se as credenciais estiverem corretas', async () => {
    const result = await loginUseCase.execute('João', senha);

    expect(result).toEqual({
      id: '1',
      nome: 'João',
      email: 'joao@example.com',
      token: 'fake-jwt-token',
    });

    expect(mockUserRepository.findByName).toHaveBeenCalledWith('João');
    expect(mockAuthService.generateToken).toHaveBeenCalledWith('1');
  });

  it('deve retornar null se o usuário não existir', async () => {
    (mockUserRepository.findByName as any).mockResolvedValue(null);

    const result = await loginUseCase.execute('Inexistente', senha);
    expect(result).toBeNull();
  });

  it('deve retornar null se a senha estiver incorreta', async () => {
    const senhaErrada = 'outraSenha';
    const result = await loginUseCase.execute('João', senhaErrada);
    expect(result).toBeNull();
  });
});
