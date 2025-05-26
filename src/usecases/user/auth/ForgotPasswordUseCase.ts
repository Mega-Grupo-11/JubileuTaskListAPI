import { IUserRepository } from "../../../domain/repositories/user-repository";
import { IMailerService } from "../../../domain/services/IMailerService";
import crypto from "crypto";

export class ForgotPasswordUseCase {
  constructor(
    private userRepo: IUserRepository,
    private mailer: IMailerService
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.userRepo.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado");

    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 min

    user.resetToken = token;
    user.tokenExpires = tokenExpires;
    await this.userRepo.save(user);
    
    const resetLink = `http://localhost:3002/resetar-senha?token=${token}`;
    await this.mailer.send(email, "Recuperação de senha", `Clique aqui: ${resetLink}`);
  }
}
