import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderBoardController {
  constructor(private leaderBoardService = new LeaderBoardService()) {}

  public async getLeaderBoardHome(req: Request, res: Response) {
    const serviceResponse = await this.leaderBoardService.getLeaderBoardHome();
    res.status(200).json(serviceResponse.data);
  }
}
