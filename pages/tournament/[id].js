import Head from 'next/head';
import { useRouter } from 'next/router';
import { getTournamentById } from '../../utils/db';
import MatchCard from '../../components/MatchCard';
import Standings from '../../components/Standings';

export default function TournamentDetails({ tournament }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  if (!tournament) {
    return <div className="container">Tournament not found</div>;
  }

  return (
    <>
      <Head>
        <title>{tournament.name} - PES Matches World Cup</title>
      </Head>

      <div className="container">
        <button
          onClick={() => router.back()}
          className="mb-6 text-football-blue hover:text-blue-700 font-semibold"
        >
          ← Back
        </button>

        <div className="bg-gradient-to-r from-football-blue to-football-green text-white rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold mb-2">{tournament.name}</h1>
          <p className="text-lg">📅 {tournament.date}</p>
          <p className="text-lg mt-2">{tournament.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Matches</h2>
            <div className="space-y-4">
              {tournament.matches && tournament.matches.length > 0 ? (
                tournament.matches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))
              ) : (
                <p className="text-gray-500">No matches scheduled yet.</p>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Standings</h2>
            <Standings tournament={tournament} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const tournament = getTournamentById(parseInt(params.id));
  return {
    props: { tournament: tournament || null },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const tournaments = require('../../utils/db').getAllTournaments();
  const paths = tournaments.map((t) => ({
    params: { id: t.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}
