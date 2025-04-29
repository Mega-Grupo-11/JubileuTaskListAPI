import { IUserRepository } from "../../domain/repositories/user-repository";
import { AuthService } from "../../infrastructure/jwt/auth-service";

export class LoginUseCase { 
    constructor(private userRepository: IUserRepository) {}

    async execute(nome: string, email: string): Promise<{ id: string, nome: string, email: string, token: string } | null> {
        const user = await this.userRepository.findByEmail(email);
        if (user && user.nome === nome && user.email === email) {
            const authService = new AuthService();
            const token = authService.generateToken(user.id?.toString() || "");

            if (!token) {
                throw new Error("Error generating token");
            }

            return {
                id: user.id?.toString() || "",
                nome: user.nome,
                email: user.email,
                token: token
            };
        }
        return null;
    }
}
