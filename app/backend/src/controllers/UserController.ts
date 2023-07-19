import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.getAllUsers();
    res.status(200).json(serviceResponse.data);
  }

  public async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this.userService.getUserById(Number(id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }
}
