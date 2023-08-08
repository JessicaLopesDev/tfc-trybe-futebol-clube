import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ILeaderBoardModel } from '../Interfaces/LeaderBoard/ILeaderBoardModel';
import LeaderBoardModel from '../models/LeaderBoardModel';
import { ILeaderboard } from '../Interfaces/LeaderBoard/ILeaderBoard';

export default class LeaderBoardService {
  constructor(
    private leaderBoardModel: ILeaderBoardModel = new LeaderBoardModel(),
  ) {}

  public async getLeaderBoardHome(): Promise<ServiceResponse<ILeaderboard[]>> {
    const response = await this.leaderBoardModel.getLeaderBoardHome();
    const data = response
      .sort((a, b) => b.goalsFavor - a.goalsFavor)
      .sort((a, b) => b.goalsBalance - a.goalsBalance)
      .sort((a, b) => b.totalVictories - a.totalVictories)
      .sort((a, b) => b.totalPoints - a.totalPoints);
    return { status: 'SUCCESSFUL', data };
  }
}
