import Head from 'next/head';
import MatchCard from '../components/MatchCard';
import { useState } from 'react';
import { GROUPS } from '../utils/teams';

export default function Matches() {
  const [selectedGroup, setSelectedGroup] = useState('A');
  const [mockMatches] = useState([
    {
      id: 1,
      stage: 'Group A',
      team1Name: 'Brazil',
      team1Flag: '🇧🇷',
      team2Name: 'Mexico',
      team2Flag: '🇲🇽',
      score1: null,
      score2: null,
      date: '2026-06-15',
      time: '20:00 UTC',
      status: 'scheduled',
    },
    {
      id: 2,
      stage: 'Group A',
      team1Name: 'Senegal',
      team1Flag: '🇸🇳',
      team2Name: 'Türkiye',
      team2Flag: '🇹🇷',
      score1: 1,
      score2: 2,
      date: '2026-06-15',
      time: '23:00 UTC',
      status: 'finished',
    },
  ]);

  const groupMatches = mockMatches.filter((m) => m.stage.includes(selectedGroup));

  return (
    <>
      <Head>
        <title>Match Schedule - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-12">⚽ MATCH SCHEDULE</h1>

        {/* Group Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {GROUPS.map((group) => (
            <button
              key={group.name}
              onClick={() => setSelectedGroup(group.name)}
              className={`px-6 py-2 rounded-lg font-bold transition ${
                selectedGroup === group.name
                  ? 'bg-football-blue text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Group {group.name}
            </button>
          ))}
        </div>

        {/* Matches */}
        <div className="space-y-6">
          {groupMatches.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">No matches scheduled for this group yet.</p>
          ) : (
            groupMatches.map((match) => <MatchCard key={match.id} match={match} />)
          )}
        </div>
      </div>
    </>
  );
}
