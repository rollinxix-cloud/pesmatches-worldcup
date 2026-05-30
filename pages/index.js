import Head from 'next/head';
import TournamentCard from '../components/TournamentCard';
import { getAllTournaments } from '../utils/db';

export default function Home({ tournaments }) {
  return (
    <>
      <Head>
        <title>PES Matches World Cup - eFootball Tournament</title>
        <meta name="description" content="PES Matches World Cup eFootball Tournament Website" />
      </Head>

      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-football-blue mb-4">⚽ PES Matches World Cup</h1>
          <p className="text-xl text-gray-600">Experience the ultimate eFootball tournament</p>
        </div>

        {tournaments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tournaments available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const tournaments = getAllTournaments();
  return {
    props: { tournaments },
    revalidate: 3600,
  };
}
