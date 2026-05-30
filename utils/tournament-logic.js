import { GROUPS, TEAMS_2026 } from './teams';

// Calculate standings based on match results
export const calculateStandings = (matches) => {
  const standings = {};

  // Initialize standings
  GROUPS.forEach((group) => {
    standings[group.name] = group.teams.map((teamId) => ({
      teamId,
      teamName: TEAMS_2026.find((t) => t.id === teamId)?.name,
      flag: TEAMS_2026.find((t) => t.id === teamId)?.flag,
      group: group.name,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    }));
  });

  // Process matches
  matches.forEach((match) => {
    if (match.score1 === null || match.score2 === null) return; // Skip unfinished

    const group = Object.values(standings).find((g) =>
      g.some((t) => t.teamId === match.team1Id)
    );

    if (!group) return;

    const team1 = group.find((t) => t.teamId === match.team1Id);
    const team2 = group.find((t) => t.teamId === match.team2Id);

    if (!team1 || !team2) return;

    team1.played++;
    team2.played++;
    team1.goalsFor += match.score1;
    team1.goalsAgainst += match.score2;
    team2.goalsFor += match.score2;
    team2.goalsAgainst += match.score1;

    if (match.score1 > match.score2) {
      team1.wins++;
      team1.points += 3;
      team2.losses++;
    } else if (match.score1 < match.score2) {
      team2.wins++;
      team2.points += 3;
      team1.losses++;
    } else {
      team1.draws++;
      team1.points += 1;
      team2.draws++;
      team2.points += 1;
    }

    team1.goalDifference = team1.goalsFor - team1.goalsAgainst;
    team2.goalDifference = team2.goalsFor - team2.goalsAgainst;
  });

  // Sort by points, then by goal difference
  Object.keys(standings).forEach((group) => {
    standings[group].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return b.goalDifference - a.goalDifference;
    });
  });

  return standings;
};

// Get qualified teams for knockout
export const getQualifiedTeams = (standings) => {
  const qualified = [];
  Object.values(standings).forEach((group) => {
    // Top 2 teams qualify
    qualified.push(group[0], group[1]);
  });
  return qualified;
};

// Generate knockout bracket
export const generateKnockoutBracket = (standings) => {
  const qualified = getQualifiedTeams(standings);

  // Seeding: 1st place teams in one half, 2nd place in other
  const firstPlace = [];
  const secondPlace = [];

  Object.values(standings).forEach((group) => {
    firstPlace.push(group[0]);
    secondPlace.push(group[1]);
  });

  // R16 matchups
  const r16 = [
    { team1: firstPlace[0], team2: secondPlace[7] },
    { team1: firstPlace[4], team2: secondPlace[3] },
    { team1: firstPlace[3], team2: secondPlace[4] },
    { team1: firstPlace[7], team2: secondPlace[0] },
    { team1: firstPlace[1], team2: secondPlace[6] },
    { team1: firstPlace[5], team2: secondPlace[2] },
    { team1: firstPlace[2], team2: secondPlace[5] },
    { team1: firstPlace[6], team2: secondPlace[1] },
  ];

  return {
    r16,
    quarterfinals: [],
    semifinals: [],
    final: null,
  };
};
