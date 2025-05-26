export interface IMailerService {
  send(to: string, subject: string, body: string): Promise<void>;
}