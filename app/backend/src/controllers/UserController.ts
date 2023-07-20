import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async findOne(req: Request, res: Response) {
    const { email, password } = req.body;
    const serviceResponse = await this.userService.findOne(email, password);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.getAllUsers();
    res.status(200).json(serviceResponse.data);
  }
}
