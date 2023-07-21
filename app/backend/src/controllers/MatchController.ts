import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(private matchService = new MatchService()) {}

  public async getAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (!inProgress) {
      const serviceResponse = await this.matchService.getAllMatches();
      console.log(serviceResponse);
      return res.status(200).json(serviceResponse.data);
    }
    const isInProgress = inProgress ? inProgress === 'true' : false;

    const serviceResponse = await this.matchService.filterByProgress(isInProgress);
    console.log(serviceResponse);
    res.status(200).json(serviceResponse.data);
  }
}
