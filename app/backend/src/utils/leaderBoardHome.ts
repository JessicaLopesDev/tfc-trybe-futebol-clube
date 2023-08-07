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

const calcTotalDraws = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches
    .filter((match) => match.homeTeamId === id)
    .forEach((match) => {
      if (match.awayTeamGoals === match.homeTeamGoals) total += 1;
    });
  return total;
};

const calcTotalLosses = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches
    .filter((match) => match.homeTeamId === id)
    .forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) total += 1;
    });
  return total;
};

const calcGoalsFavor = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches
    .filter((match) => match.homeTeamId === id)
    .forEach((match) => { total += match.homeTeamGoals; });
  return total;
};

const calcGoalsOwn = (id: number, matches: IMatch[]) => {
  let total = 0;

  matches
    .filter((match) => match.homeTeamId === id)
    .forEach((match) => {
      total += match.awayTeamGoals;
    });
  return total;
};

export {
  calcTotalPoints,
  calcTotalGames,
  calcTotalVictories,
  calcTotalDraws,
  calcTotalLosses,
  calcGoalsFavor,
  calcGoalsOwn,
};
