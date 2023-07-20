import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async findOne(req: Request, res: Response) {
    const { email, password } = req.body;
    const serviceResponse = await this.userService.findOne(email, password);
    res.status(200).json(serviceResponse.data);
  }

  public async getAllUsers(_req: Request, res: Response) {
    const serviceResponse = await this.userService.getAllUsers();
    res.status(200).json(serviceResponse.data);
  }
}
