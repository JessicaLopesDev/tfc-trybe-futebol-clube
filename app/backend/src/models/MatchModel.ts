import SequelizeTeam from '../database/models/SequelizeTeam';
import { IMatch } from '../Interfaces/Match/IMatch';
import { IMatchModel } from '../Interfaces/Match/IMatchModel';
import SequelizeMatch from '../database/models/SequelizeMatch';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatch;

  async findAll(): Promise<IMatch[]> {
    const allMatches = await this.model.findAll({
      include: [
        { model: SequelizeTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return allMatches;
  }

  async filterByProgress(inProgress: IMatch['inProgress']): Promise<IMatch[]> {
    const filteredMatches = await this.model.findAll({
      where: { inProgress },
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        {
          model: SequelizeTeam,
          as: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          model: SequelizeTeam,
          as: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return filteredMatches;
  }
}
