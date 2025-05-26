import nodemailer from "nodemailer";
import { IMailerService } from "../../domain/services/IMailerService";

export class NodemailerService implements IMailerService {
  async send(to: string, subject: string, body: string): Promise<void> {
    const transporter = nodemailer.createTransport({
        
    });

    await transporter.sendMail({
      from: "naoresponda@seusite.com",
      to,
      subject,
      html: body,
    });
  }
}