export default function StandingsTable({ standings }) {
  return (
    <div className="space-y-8">
      {Object.entries(standings).map(([groupName, teams]) => (
        <div key={groupName} className="card">
          <h3 className="text-2xl font-bold mb-6 pb-4 border-b-4 border-football-blue">Group {groupName}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left font-bold">Pos</th>
                  <th className="p-3 text-left font-bold">Team</th>
                  <th className="p-3 text-center font-bold">P</th>
                  <th className="p-3 text-center font-bold">W</th>
                  <th className="p-3 text-center font-bold">D</th>
                  <th className="p-3 text-center font-bold">L</th>
                  <th className="p-3 text-center font-bold">GF</th>
                  <th className="p-3 text-center font-bold">GA</th>
                  <th className="p-3 text-center font-bold">GD</th>
                  <th className="p-3 text-center font-bold text-lg">Pts</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, idx) => (
                  <tr
                    key={team.teamId}
                    className={`border-b transition hover:bg-gray-50 ${
                      idx < 2 ? 'bg-green-50' : idx === 2 ? 'bg-yellow-50' : ''
                    }`}
                  >
                    <td className="p-3 font-black text-football-gold text-xl">{idx + 1}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{team.flag}</span>
                        <div>
                          <p className="font-bold">{team.teamName}</p>
                          {idx < 2 && (
                            <p className="text-xs text-green-600 font-bold">✓ Qualified</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">{team.played}</td>
                    <td className="p-3 text-center text-green-600 font-bold">{team.wins}</td>
                    <td className="p-3 text-center text-gray-600 font-bold">{team.draws}</td>
                    <td className="p-3 text-center text-red-600 font-bold">{team.losses}</td>
                    <td className="p-3 text-center">{team.goalsFor}</td>
                    <td className="p-3 text-center">{team.goalsAgainst}</td>
                    <td className="p-3 text-center font-bold">{team.goalDifference}</td>
                    <td className="p-3 text-center font-black text-lg">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
