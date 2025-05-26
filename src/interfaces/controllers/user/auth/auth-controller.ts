import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "../../../../usecases/user/auth/ForgotPasswordUseCase";
import { ResetPasswordUseCase } from "../../../../usecases/user/auth/ResetPasswordUseCase";

export class AuthController {
  constructor(
    private forgotPasswordUseCase: ForgotPasswordUseCase,
    private resetPasswordUseCase: ResetPasswordUseCase
  ) {}

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body;
    await this.forgotPasswordUseCase.execute(email);
    res.json({ message: "E-mail enviado" });
  }

  async resetPassword(req: Request, res: Response) {
    const { token, newPassword } = req.body;
    await this.resetPasswordUseCase.execute(token, newPassword);
    res.json({ message: "Senha redefinida com sucesso" });
  }
}
