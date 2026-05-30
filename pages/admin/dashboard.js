import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('bookings');

  useEffect(() => {
    // Load data from Firebase (implement actual Firebase calls)
    fetchBookings();
    fetchMatches();
    fetchStandings();
  }, []);

  const fetchBookings = async () => {
    try {
      // Implement Firebase Firestore query
      setBookings([]);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const fetchMatches = async () => {
    try {
      // Implement Firebase Firestore query
      setMatches([]);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  };

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
        <p className="text-center text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8">⚙️ ADMIN DASHBOARD</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 font-bold ${
              activeTab === 'bookings'
                ? 'border-b-4 border-football-blue text-football-blue'
                : 'text-gray-600'
            }`}
          >
            📋 Bookings
          </button>
          <button
            onClick={() => setActiveTab('matches')}
            className={`px-6 py-3 font-bold ${
              activeTab === 'matches'
                ? 'border-b-4 border-football-blue text-football-blue'
                : 'text-gray-600'
            }`}
          >
            ⚽ Matches
          </button>
          <button
            onClick={() => setActiveTab('standings')}
            className={`px-6 py-3 font-bold ${
              activeTab === 'standings'
                ? 'border-b-4 border-football-blue text-football-blue'
                : 'text-gray-600'
            }`}
          >
            🏆 Standings
          </button>
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Player Bookings</h2>
            {bookings.length === 0 ? (
              <p className="text-gray-600 text-lg">No bookings yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border p-3 text-left">Player</th>
                      <th className="border p-3 text-left">Team</th>
                      <th className="border p-3 text-left">Status</th>
                      <th className="border p-3 text-left">Entry Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="border p-3">{booking.playerName}</td>
                        <td className="border p-3">{booking.teamName}</td>
                        <td className="border p-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                              booking.status === 'paid'
                                ? 'bg-green-200 text-green-800'
                                : 'bg-yellow-200 text-yellow-800'
                            }`}
                          >
                            {booking.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="border p-3">$150</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Matches Tab */}
        {activeTab === 'matches' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Match Management</h2>
            <p className="text-gray-600">Match management interface coming soon...</p>
          </div>
        )}

        {/* Standings Tab */}
        {activeTab === 'standings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Tournament Standings</h2>
            {Object.keys(standings).length === 0 ? (
              <p className="text-gray-600">No matches yet. Standings will appear after first matches.</p>
            ) : (
              <div className="space-y-8">
                {Object.entries(standings).map(([groupName, teams]) => (
                  <div key={groupName} className="card">
                    <h3 className="text-2xl font-bold mb-4">Group {groupName}</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="p-2 text-left">Pos</th>
                            <th className="p-2 text-left">Team</th>
                            <th className="p-2 text-center">P</th>
                            <th className="p-2 text-center">W</th>
                            <th className="p-2 text-center">D</th>
                            <th className="p-2 text-center">L</th>
                            <th className="p-2 text-center">GF</th>
                            <th className="p-2 text-center">GA</th>
                            <th className="p-2 text-center">GD</th>
                            <th className="p-2 text-center font-bold">Pts</th>
                          </tr>
                        </thead>
                        <tbody>
                          {teams.map((team, idx) => (
                            <tr key={team.teamId} className="border-b hover:bg-gray-50">
                              <td className="p-2 font-bold text-football-gold">{idx + 1}</td>
                              <td className="p-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl">{team.flag}</span>
                                  <span className="font-bold">{team.teamName}</span>
                                </div>
                              </td>
                              <td className="p-2 text-center">{team.played}</td>
                              <td className="p-2 text-center">{team.wins}</td>
                              <td className="p-2 text-center">{team.draws}</td>
                              <td className="p-2 text-center">{team.losses}</td>
                              <td className="p-2 text-center">{team.goalsFor}</td>
                              <td className="p-2 text-center">{team.goalsAgainst}</td>
                              <td className="p-2 text-center">{team.goalDifference}</td>
                              <td className="p-2 text-center font-bold text-lg">{team.points}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
