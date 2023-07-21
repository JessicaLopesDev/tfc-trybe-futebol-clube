import * as jwt from 'jsonwebtoken';

export default class JwtToken {
  private static jwtSecret = process.env.JWT_SECRET || 'segredo';

  static verify(token: string) {
    return jwt.verify(token, JwtToken.jwtSecret);
  }

  static sign(payload: string): string {
    return jwt.sign(payload, JwtToken.jwtSecret);
  }
}
