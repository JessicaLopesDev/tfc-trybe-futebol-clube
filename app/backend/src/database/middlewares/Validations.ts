import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../../Interfaces/User/IUser';
import Email from '../../validations/Email';
import JwtToken from '../../utils/JwtToken';
import SequelizeTeam from '../models/SequelizeTeam';

class Validations {
  private static minLength = 6;

  static login(
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

  static token(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      JwtToken.verify(authorization.split(' ')[1]);

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }

  static async match(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    const { homeTeamId, awayTeamId } = req.body;
    const home = await SequelizeTeam.findByPk(homeTeamId);
    const away = await SequelizeTeam.findByPk(awayTeamId);

    if (!home || !away) {
      return res.status(404).json({
        message: 'There is no team with such id!',
      });
    }

    if (awayTeamId === homeTeamId) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }
    next();
  }
}

export default Validations;
