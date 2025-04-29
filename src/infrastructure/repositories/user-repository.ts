import { PrismaClient } from "@prisma/client";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/repositories/user-repository";

const prisma = new PrismaClient();

export class PrismaUserRepository implements IUserRepository {

    async create(user: User): Promise<User> {
        const newUser = await prisma.usuario.create({
            data: {
                nome: user.nome,
                email: user.email,
                passwordHash: user.passwordHash,
            },
        });
        return newUser;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await prisma.usuario.findUnique({
            where: { email },
        });
        return user;
    }

    async UserExists(nome: string, email: string): Promise<boolean> {
        const user = await prisma.usuario.findUnique({
            where: {
                nome: nome,
                email: email,
            },
        });
        return user !== null;
    }
}
