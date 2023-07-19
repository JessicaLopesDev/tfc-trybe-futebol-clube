import UserModel from '../models/UserModel';
import { IUser } from '../Interfaces/User/IUser';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IUserModel } from '../Interfaces/User/IUserModel';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  public async getAllUsers(): Promise<ServiceResponse<IUser[]>> {
    const allUsers = await this.userModel.findAll();
    console.log(allUsers);
    return { status: 'SUCCESSFUL', data: allUsers };
  }

  public async getUserById(id: number): Promise<ServiceResponse<IUser>> {
    const user = await this.userModel.findById(id);
    if (!user) { return { status: 'NOT_FOUND', data: { message: `User ${id} not found` } }; }
    return { status: 'SUCCESSFUL', data: user };
  }
}
