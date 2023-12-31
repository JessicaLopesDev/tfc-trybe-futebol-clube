import { ITeam } from '../Interfaces/Team/ITeam';
import SequelizeTeam from '../database/models/SequelizeTeam';
import { ILeaderBoardModel } from '../Interfaces/LeaderBoard/ILeaderBoardModel';
import { IMatch } from '../Interfaces/Match/IMatch';
import SequelizeMatch from '../database/models/SequelizeMatch';
import { ILeaderboard } from '../Interfaces/LeaderBoard/ILeaderBoard';
import {
  calcGoalsFavor,
  calcGoalsOwn,
  calcTotalDraws,
  calcTotalGames,
  calcTotalLosses,
  calcTotalPoints,
  calcTotalVictories,
} from '../utils/leaderBoardHome';

export default class LeaderBoardModel implements ILeaderBoardModel {
  private matchModel = SequelizeMatch;
  private teamModel = SequelizeTeam;

  async findAllMatches(): Promise<IMatch[]> {
    const allFinishedMatches = await this.matchModel.findAll({
      where: { inProgress: false },
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
    return allFinishedMatches;
  }

  async findAllTeams(): Promise<ITeam[]> {
    const allTeams = await this.teamModel.findAll();
    return allTeams;
  }

  async getLeaderBoardHome(): Promise<ILeaderboard[]> {
    const teams = await this.findAllTeams();
    console.log(teams);
    const matches = await this.findAllMatches();

    return teams.map((team) => ({
      name: team.teamName,
      totalPoints: calcTotalPoints(team.id, matches),
      totalGames: calcTotalGames(team.id, matches),
      totalVictories: calcTotalVictories(team.id, matches),
      totalDraws: calcTotalDraws(team.id, matches),
      totalLosses: calcTotalLosses(team.id, matches),
      goalsFavor: calcGoalsFavor(team.id, matches),
      goalsOwn: calcGoalsOwn(team.id, matches),
      goalsBalance:
        calcGoalsFavor(team.id, matches) - calcGoalsOwn(team.id, matches),
      efficiency:
        ((calcTotalPoints(team.id, matches) / (calcTotalGames(team.id, matches) * 3)) * 100)
          .toFixed(2),
    }));
  }
}
