import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import JwtToken from '../utils/JwtToken';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async getUserByEmail(req: Request, res: Response) {
    const { email, password } = req.body;
    const serviceResponse = await this.userService.getUserByEmail(
      email,
      password,
    );
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }

    res.status(200).json({ token: JwtToken.sign(email) });
  }

  public async getUser(req: Request, res: Response) {
    const { authorization } = req.headers as { authorization: string };
    const validEmail = JwtToken.verify(authorization.split(' ')[1]) as string;

    const serviceResponse = await this.userService.getUser(validEmail);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }
    // console.log(data);
    const roleUpdated = serviceResponse.data.role;
    res.status(200).json({ role: roleUpdated });
  }

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.getAllUsers();
    res.status(200).json(serviceResponse.data);
  }
}
