export default function MatchCard({ match }) {
  return (
    <div className="card flex items-center justify-between">
      <div className="flex-1 text-center">
        <p className="font-bold text-lg">{match.team1}</p>
      </div>
      <div className="flex-1 text-center px-4">
        <p className="text-2xl font-bold text-football-blue">
          {match.score1 !== undefined ? `${match.score1} - ${match.score2}` : 'vs'}
        </p>
        <p className="text-xs text-gray-500 mt-1">{match.date || 'TBD'}</p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-bold text-lg">{match.team2}</p>
      </div>
    </div>
  );
}
