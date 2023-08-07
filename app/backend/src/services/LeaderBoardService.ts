import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderBoardModel } from '../Interfaces/LeaderBoard/ILeaderBoardModel';
import LeaderBoardModel from '../models/LeaderBoardModel';
import { ILeaderboard } from '../Interfaces/LeaderBoard/ILeaderBoard';

export default class LeaderBoardService {
  constructor(
    private leaderBoardModel: ILeaderBoardModel = new LeaderBoardModel(),
  ) {}

  public async getLeaderBoardHome(): Promise<ServiceResponse<ILeaderboard[]>> {
    const data = await this.leaderBoardModel.getLeaderBoardHome();
    console.log(data);
    return { status: 'SUCCESSFUL', data };
  }
}
