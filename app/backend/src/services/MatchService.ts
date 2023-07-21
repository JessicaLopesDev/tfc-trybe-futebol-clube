import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/Match/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMatchModel } from '../Interfaces/Match/IMatchModel';

export default class MatchService {
  constructor(private matchModel: IMatchModel = new MatchModel()) {}

  public async getAllMatches(): Promise<ServiceResponse<IMatch[]>> {
    const allMatchs = await this.matchModel.findAll();
    console.log(allMatchs);
    return { status: 'SUCCESSFUL', data: allMatchs };
  }

  public async filterByProgress(
    inProgress: boolean,
  ): Promise<ServiceResponse<IMatch[]>> {
    const filteredMatches = await this.matchModel.filterByProgress(inProgress);

    return { status: 'SUCCESSFUL', data: filteredMatches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<IMatch>> {
    const selectedMatch = await this.matchModel.finishMatch(id);
    if (!selectedMatch) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'Match not found' },
      };
    }
    return { status: 'SUCCESSFUL', data: selectedMatch };
  }
}
