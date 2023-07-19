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

  async findById(id: IUser['id']): Promise<IUser | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;

    const { email, password, username, role }: IUser = user;
    return { id, email, password, username, role };
  }
}
