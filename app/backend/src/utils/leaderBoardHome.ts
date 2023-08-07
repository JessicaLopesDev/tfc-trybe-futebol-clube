import { IMatch } from '../Interfaces/Match/IMatch';

const totalPoints = (id: number, matches: IMatch[]) => {
  let total = 0;

  const matchesFiltered = matches
    .filter((match) => match.homeTeamId === id);

  matchesFiltered.map((match) => {
    if (match.homeTeamGoals > match.awayTeamGoals) total += 3;

    if (match.homeTeamGoals === match.awayTeamGoals) total += 1;

    return total;
  });
  return total;
};

export default totalPoints;
