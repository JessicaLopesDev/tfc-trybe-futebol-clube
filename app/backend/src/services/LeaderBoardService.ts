import { IMatch } from '../Interfaces/Match/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderBoardModel } from '../Interfaces/LeaderBoard/ILeaderBoardModel';
import LeaderBoardModel from '../models/LeaderBoardModel';

export default class LeaderBoardService {
  constructor(
    private leaderBoardModel: ILeaderBoardModel = new LeaderBoardModel(),
  ) {}

  public async getLeaderBoardHome(): Promise<ServiceResponse<IMatch[]>> {
    const data = await this.leaderBoardModel.findAll();
    return { status: 'SUCCESSFUL', data };
  }
}
