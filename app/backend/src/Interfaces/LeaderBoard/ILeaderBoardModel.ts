import { IMatch } from '../Match/IMatch';

export interface ILeaderBoardModel {
  findAllMatches(): Promise<IMatch[]>;
}
