// Mock database - replace with real database later
const mockTournaments = [
  {
    id: 1,
    name: '🌍 PES World Cup 2024',
    date: '2024-06-01',
    description: 'The ultimate eFootball tournament featuring the best players from around the world.',
    matches: [
      { id: 1, team1: 'Brazil', team2: 'Argentina', score1: 2, score2: 1, date: '2024-06-01' },
      { id: 2, team1: 'France', team2: 'Germany', score1: 1, score2: 1, date: '2024-06-02' },
      { id: 3, team1: 'Spain', team2: 'Italy', score1: 3, score2: 0, date: '2024-06-03' },
    ],
  },
  {
    id: 2,
    name: '🏆 Spring Cup 2024',
    date: '2024-04-15',
    description: 'Spring tournament for regional qualifiers.',
    matches: [
      { id: 1, team1: 'Portugal', team2: 'Netherlands', score1: 2, score2: 2, date: '2024-04-15' },
    ],
  },
  {
    id: 3,
    name: '⭐ Elite 8 Tournament',
    date: '2024-08-10',
    description: 'Only the top 8 teams compete in this exclusive tournament.',
    matches: [],
  },
];

export function getAllTournaments() {
  return mockTournaments;
}

export function getTournamentById(id) {
  return mockTournaments.find((t) => t.id === id);
}

export function addTournament(tournament) {
  const newTournament = {
    ...tournament,
    id: mockTournaments.length + 1,
    matches: [],
  };
  mockTournaments.push(newTournament);
  return newTournament;
}
