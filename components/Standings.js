export default function Standings({ tournament }) {
  // Mock standings data - update based on your tournament structure
  const standings = [
    { rank: 1, team: 'Team A', wins: 3, draws: 0, losses: 0, points: 9 },
    { rank: 2, team: 'Team B', wins: 2, draws: 1, losses: 0, points: 7 },
    { rank: 3, team: 'Team C', wins: 1, draws: 0, losses: 2, points: 3 },
    { rank: 4, team: 'Team D', wins: 0, draws: 0, losses: 3, points: 0 },
  ];

  return (
    <div className="card">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-football-blue">
            <th className="text-left py-2 text-sm">Rank</th>
            <th className="text-left py-2 text-sm">Team</th>
            <th className="text-center py-2 text-sm">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr key={team.rank} className="border-b hover:bg-gray-100">
              <td className="py-3 font-bold text-football-gold">{team.rank}</td>
              <td className="py-3">{team.team}</td>
              <td className="text-center py-3 font-bold">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
