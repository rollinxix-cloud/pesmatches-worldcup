import Head from 'next/head';
import StandingsTable from '../components/StandingsTable';
import { useState, useEffect } from 'react';

export default function Standings() {
  const [standings, setStandings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStandings();
  }, []);

  const fetchStandings = async () => {
    try {
      const response = await fetch('/api/tournaments/standings');
      if (response.ok) {
        const data = await response.json();
        setStandings(data.standings);
      }
    } catch (error) {
      console.error('Error fetching standings:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-12">
        <p className="text-center text-2xl">Loading standings...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Live Standings - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-12">🏆 GROUP STAGE STANDINGS</h1>

        {Object.keys(standings).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">Standings will appear after the first matches are played.</p>
          </div>
        ) : (
          <StandingsTable standings={standings} />
        )}
      </div>
    </>
  );
}
