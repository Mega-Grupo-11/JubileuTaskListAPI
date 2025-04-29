import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/repositories/user-repository";

export class CreateUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(user: User): Promise<User> {
        return await this.userRepository.create(user);
    }
}
