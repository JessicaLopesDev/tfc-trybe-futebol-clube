import { ILeaderboard } from './ILeaderBoard';

export interface ILeaderBoardModel {
  getLeaderBoardHome(): Promise<ILeaderboard[]>;
}
