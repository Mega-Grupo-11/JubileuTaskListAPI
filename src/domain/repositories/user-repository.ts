import { User } from "../entities/user";

export interface IUserRepository {   
    create(user: User): Promise<User>;
    findByName(name: string): Promise<User | null>;
}