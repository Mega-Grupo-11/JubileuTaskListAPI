import { Request, Response } from "express";
import { CreateUseCase } from "../../usecases/user/create-use-case";
import { PrismaUserRepository } from "../../infrastructure/repositories/user-repository";
import { AuthService } from "../../infrastructure/jwt/auth-service";
import { hashPassword } from "../../utils/password-generator";

export class RegisterController {
    static async register(req: Request, res: Response) {
        const { nome, email, passwordHash } = req.body;

        if (!nome || !email || !passwordHash) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const hashedPassword = await hashPassword(passwordHash);

        if (!hashedPassword) {
            return res.status(500).json({ message: "Error hashing password" });
        }
        
        try {
            const userRepository = new PrismaUserRepository();
            const createUser = new CreateUseCase(userRepository);
            const user = await createUser.execute({ nome, email, passwordHash: hashedPassword });
            
            const authService = new AuthService();
            const token = authService.generateToken(user.id?.toString() || "");
 
            return res.status(201).json({
                message: "User registered successfully",
                user: { id: user.id, nome: user.nome, email: user.email },
                token: token
            });
        } catch (error: any) {
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }
}
