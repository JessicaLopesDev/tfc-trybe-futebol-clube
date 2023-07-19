import { ID } from '..';
import { IUser } from './IUser';

export interface IUserModel {
  findAll(): Promise<IUser[]>;
  findById(id: ID): Promise<IUser | null>;
}
