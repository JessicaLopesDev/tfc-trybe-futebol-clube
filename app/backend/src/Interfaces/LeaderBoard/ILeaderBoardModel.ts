import { IMatch } from '../Match/IMatch';

export interface ILeaderBoardModel {
  findAll(): Promise<IMatch[]>;
}
