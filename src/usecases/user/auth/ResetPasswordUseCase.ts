import { IUserRepository } from "../../../domain/repositories/user-repository";
import bcrypt from "bcryptjs";

export class ResetPasswordUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(token: string, newPassword: string): Promise<void> {
    const user = await this.userRepo.findByResetToken(token);
    if (!user || user.tokenExpires < new Date()) {
      throw new Error("Token inválido ou expirado");
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = null;
    user.tokenExpires = null;
    await this.userRepo.save(user);
  }
}
