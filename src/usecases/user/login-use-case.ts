import bcrypt from "bcrypt";
import { IUserRepository } from "../../domain/repositories/user-repository";
import { AuthService } from "../../infrastructure/jwt/auth-service";

export class LoginUseCase {
    constructor(
        private userRepository: IUserRepository,
        private readonly authService: AuthService = new AuthService()
    ) {}

    async execute(name: string, password: string): Promise<{ id: string, nome: string, email: string, token: string } | null> {
        const user = await this.userRepository.findByName(name);

        if (!user) return null;

        const passwordMatches = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatches) return null;

        const token = this.authService.generateToken(user.id?.toString() || "");

        return {
            id: user.id?.toString() || "",
            nome: user.nome,
            email: user.email,
            token
        };
    }
}
