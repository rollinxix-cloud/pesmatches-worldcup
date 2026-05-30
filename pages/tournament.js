import Head from 'next/head';
import { GROUPS, TEAMS_2026 } from '../utils/teams';
import { useState } from 'react';

export default function Tournament() {
  const [activeGroup, setActiveGroup] = useState('A');

  const currentGroup = GROUPS.find((g) => g.name === activeGroup);
  const groupTeams = currentGroup.teams.map((id) => TEAMS_2026.find((t) => t.id === id));

  return (
    <>
      <Head>
        <title>Tournament - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-12">🏆 TOURNAMENT OVERVIEW</h1>

        {/* Tournament Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tournament Format</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">📋 Group Stage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ 8 Groups (A-H)</li>
                <li>✅ 4 Teams per Group</li>
                <li>✅ Round Robin Format</li>
                <li>✅ Top 2 Qualify for Knockout</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4">🎯 Knockout Stage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ 16 Teams - Round of 16</li>
                <li>✅ 8 Teams - Quarterfinals</li>
                <li>✅ 4 Teams - Semifinals</li>
                <li>✅ Grand Final for Championship</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Group Stage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Group Stage Seeding</h2>

          {/* Group Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {GROUPS.map((group) => (
              <button
                key={group.name}
                onClick={() => setActiveGroup(group.name)}
                className={`px-4 py-2 rounded-lg font-bold transition ${
                  activeGroup === group.name
                    ? 'bg-football-blue text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Group {group.name}
              </button>
            ))}
          </div>

          {/* Group Teams */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groupTeams.map((team) => (
              <div key={team.id} className="card flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{team.flag}</div>
                  <div>
                    <h3 className="text-xl font-bold">{team.name}</h3>
                    <p className="text-sm text-gray-600">Rating: {team.rating}/100</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-2">Region</p>
                  <p className="font-bold">{team.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All 32 Teams */}
        <div>
          <h2 className="text-3xl font-bold mb-8">🌍 All 32 Qualified Nations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {TEAMS_2026.map((team) => (
              <div key={team.id} className="card text-center hover:ring-4 ring-football-gold transition">
                <div className="text-5xl mb-2">{team.flag}</div>
                <p className="text-sm font-bold line-clamp-2">{team.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
