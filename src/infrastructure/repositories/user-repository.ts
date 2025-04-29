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
}
