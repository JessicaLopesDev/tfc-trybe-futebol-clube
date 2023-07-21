import { IMatch } from './IMatch';

export interface IMatchModel {
  findAll(): Promise<IMatch[]>;
  filterByProgress(inProgress: boolean): Promise<IMatch[]>;
  finishMatch(id: IMatch['id']): Promise<IMatch | null>;
}
