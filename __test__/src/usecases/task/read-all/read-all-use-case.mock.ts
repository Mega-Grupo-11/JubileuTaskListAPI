import { vi } from 'vitest';
import { ITaskRepository } from '../../../../../src/domain/repositories/task-repository';
import { Task } from '../../../../../src/domain/entities/task';
import { Prioridade, Usuario } from "@prisma/client";
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const password = faker.internet.password();
const saltRounds = 10;

const hash = await bcrypt.hash(password, saltRounds);

export const mockTaskRepository: ITaskRepository = { 
  getAll: vi.fn(),
  create: vi.fn(),
  update: vi.fn(), 
};

const mockUsuario: Usuario = {
  id: 1,
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  passwordHash: hash,
  createdAt: new Date(),
};

export const mockTasks: Task[] = [
  new Task(
    "Task 1",
    null,
    new Date("2025-05-01"),
    Prioridade.BAIXA,
    false,
    mockUsuario,
    1,
    new Date("2025-05-01T10:00:00Z")
  ),
  new Task(
    "Task 2",
    null,
    new Date("2025-05-02"),
    Prioridade.MEDIA,
    false,
    mockUsuario,
    2,
    new Date("2025-05-02T10:00:00Z")
  ),
];
