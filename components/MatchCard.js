export default function MatchCard({ match }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'live':
        return 'bg-red-100 border-red-500';
      case 'finished':
        return 'bg-green-100 border-green-500';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className={`card border-2 transition hover:shadow-xl ${getStatusColor(match.status || 'scheduled')}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Team 1 */}
        <div className="flex-1 text-center md:text-right mb-4 md:mb-0 md:pr-4">
          <div className="text-5xl mb-2">{match.team1Flag}</div>
          <h3 className="text-xl font-bold mb-1">{match.team1Name}</h3>
          {match.status === 'finished' || match.status === 'live' ? (
            <p className="text-4xl font-black text-football-blue">{match.score1}</p>
          ) : (
            <p className="text-lg text-gray-600">vs</p>
          )}
        </div>

        {/* VS and Status */}
        <div className="w-full md:w-auto text-center px-4 mb-4 md:mb-0 md:border-l-2 md:border-r-2 border-gray-300 md:px-6">
          {match.status === 'live' && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block animate-pulse">
              🔴 LIVE
            </div>
          )}
          {match.status === 'finished' && (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
              ✓ FINISHED
            </div>
          )}
          <p className="text-sm text-gray-600 font-bold">{match.date}</p>
          <p className="text-xs text-gray-500">{match.time || 'TBA'}</p>
        </div>

        {/* Team 2 */}
        <div className="flex-1 text-center md:text-left md:pl-4">
          {match.status === 'finished' || match.status === 'live' ? (
            <p className="text-4xl font-black text-football-blue mb-1">{match.score2}</p>
          ) : (
            <p className="text-lg text-gray-600 mb-1">vs</p>
          )}
          <h3 className="text-xl font-bold mb-1">{match.team2Name}</h3>
          <div className="text-5xl">{match.team2Flag}</div>
        </div>
      </div>
    </div>
  );
}
