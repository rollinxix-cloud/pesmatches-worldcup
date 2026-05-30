import Link from 'next/link';

export default function TournamentCard({ tournament }) {
  return (
    <div className="card">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-football-blue mb-2">{tournament.name}</h2>
        <p className="text-gray-600">📅 {tournament.date}</p>
      </div>
      <p className="text-gray-700 mb-4 line-clamp-3">{tournament.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{tournament.matches?.length || 0} Matches</span>
        <Link
          href={`/tournament/${tournament.id}`}
          className="btn-primary text-sm"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
