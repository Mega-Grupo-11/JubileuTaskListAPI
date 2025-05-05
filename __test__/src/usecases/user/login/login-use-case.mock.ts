import { vi } from 'vitest';
import bcrypt from 'bcrypt';
import { IUserRepository } from '../../../../../src/domain/repositories/user-repository';
import { AuthService } from '../../../../../src/infrastructure/jwt/auth-service';

export const senha = 'senha123';
export const senhaErrada = 'outraSenha';

export const user = {
  id: 1,
  nome: 'João',
  email: 'joao@example.com',
  passwordHash: '',
};

export let mockUserRepository: IUserRepository;
export let mockAuthService: AuthService;

export async function setupMocks() {
  const senhaHash = await bcrypt.hash(senha, 10);

  user.passwordHash = senhaHash;

  mockUserRepository = {
    findByName: vi.fn().mockResolvedValue(user),
    create: vi.fn(),
    findByEmail: vi.fn(),
  };

  mockAuthService = {
    generateToken: vi.fn().mockReturnValue('fake-jwt-token'),
  } as unknown as AuthService;
}
