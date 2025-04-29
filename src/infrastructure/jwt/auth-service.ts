import jwt from 'jsonwebtoken';

export class AuthService {
    private secretKey = process.env.JWT_SECRET_KEY || 'S&cr3tK3y';

    generateToken(userId: string): string {
        const payload = { id: userId };
        return jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
    }
}
