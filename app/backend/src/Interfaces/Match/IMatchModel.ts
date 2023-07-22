import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>;
  filterByProgress(inProgress: boolean): Promise<IMatch[]>;
  finishMatch(id: IMatch['id']): Promise<IMatch | null>;
  updateMatch(
    id: IMatch['id'],
    homeTeamGoals: IMatch['homeTeamGoals'],
    awayTeamGoals: IMatch['awayTeamGoals'],
  ): Promise<IMatch | null>;
  createMatch(newMatch: Partial<IMatch>): Promise<IMatch>;
}
