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

  public async filterByProgress(inProgress: boolean): Promise<ServiceResponse<IMatch[]>> {
    const filteredMatches = await this.matchModel.filterByProgress(inProgress);

    return { status: 'SUCCESSFUL', data: filteredMatches };
  }
}
