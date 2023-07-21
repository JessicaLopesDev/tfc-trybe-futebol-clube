import * as bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel';
import { IUser } from '../Interfaces/User/IUser';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IUserModel } from '../Interfaces/User/IUserModel';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async getUserByEmail(
    email: string,
    password: string,
  ): Promise<ServiceResponse<IUser>> {
    const user = await this.userModel.findOne(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Invalid email or password' },
      };
    }
    return { status: 'SUCCESSFUL', data: user };
  }

  public async getUser(email: string): Promise<ServiceResponse<IUser>> {
    const validUser = await this.userModel.findOne(email);
    if (!validUser) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'Invalid email or password' },
      };
    }
    return { status: 'SUCCESSFUL', data: validUser };
  }

  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const allUsers = await this.userModel.findAll();
    console.log(allUsers);
    return { status: 'SUCCESSFUL', data: allUsers };
  }
}
