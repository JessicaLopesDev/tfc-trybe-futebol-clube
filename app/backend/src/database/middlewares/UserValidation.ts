import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../../Interfaces/User/IUser';
import Email from '../../validations/Email';

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
      return res.status(401).json({ message: 'Invalid email or password!' });
    }

    next();
  }
}

export default Validations;
