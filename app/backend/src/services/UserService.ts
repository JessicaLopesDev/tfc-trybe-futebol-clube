import UserModel from '../models/UserModel';
import { IUser } from '../Interfaces/User/IUser';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IUserModel } from '../Interfaces/User/IUserModel';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async findOne(
    email: string,
    password: string,
  ): Promise<ServiceResponse<unknown>> {
    const user = await this.userModel.findOne(email);
    console.log(password);
    return { status: 'SUCCESSFUL', data: user };
  }

  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const allUsers = await this.userModel.findAll();
    console.log(allUsers);
    return { status: 'SUCCESSFUL', data: allUsers };
  }
}
