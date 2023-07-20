import { IUser } from '../Interfaces/User/IUser';
import { IUserModel } from '../Interfaces/User/IUserModel';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel implements IUserModel {
  private model = SequelizeUser;

  async findAll(): Promise<IUser[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, email, password, username, role }) => ({
      id,
      email,
      password,
      username,
      role,
    }));
  }

  async findOne(email: IUser['email']): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    return user;
  }
}
