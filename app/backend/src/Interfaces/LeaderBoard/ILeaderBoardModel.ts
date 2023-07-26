import { IMatch } from '../Match/IMatch';

export interface ILeaderBoardModel {
  findLeaderBoard(): Promise<IMatch[]>;
}
