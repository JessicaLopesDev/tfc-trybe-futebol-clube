import { ILeaderBoardModel } from '../Interfaces/LeaderBoard/ILeaderBoardModel';
import { IMatch } from '../Interfaces/Match/IMatch';
import SequelizeMatch from '../database/models/SequelizeMatch';
import SequelizeTeam from '../database/models/SequelizeTeam';

export default class LeaderBoardModel implements ILeaderBoardModel {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const allMatches = await this.model.findAll({
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
      ],
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      where: { inProgress: false },
    });
    return allMatches;
  }
}
