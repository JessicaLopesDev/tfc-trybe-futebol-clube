import { IMatch } from '../Interfaces/Match/IMatch';

const calcTotalPoints = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches
    .filter((match) => match.homeTeamId === id)
    .forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) total += 3;

      if (match.homeTeamGoals === match.awayTeamGoals) total += 1;
    });
  return total;
};

const calcTotalGames = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches.forEach((match) => {
    if (match.homeTeamId > id) total += 1;
  });
  return total;
};

const calcTotalVictories = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches
    .filter((match) => match.homeTeamId === id)
    .forEach((match) => {
      if (match.homeTeamGoals > match.awayTeamGoals) total += 1;
    });
  return total;
};

export { calcTotalPoints, calcTotalGames, calcTotalVictories };
