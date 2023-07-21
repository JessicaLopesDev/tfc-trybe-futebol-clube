import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../../Interfaces/User/IUser';
import Email from '../../validations/Email';
import JwtToken from '../../utils/JwtToken';

class Validations {
  private static minLength = 6;

  static loginValidation(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { email, password } = req.body as ILogin;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!Email.isValid(email) || password.length < Validations.minLength) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }

  static tokenValidation(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      JwtToken.verify(authorization.split(' ')[1]);

      next();
    } catch (error) {
      return res.status(401)
        .json({ message: 'Token must be a valid token' });
    }
  }
}

export default Validations;
