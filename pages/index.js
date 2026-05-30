import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date('2026-06-15').getTime();
      const now = new Date().getTime();
      const distance = target - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>PES WORLDCUP 2026 - Professional eFootball Tournament</title>
        <meta
          name="description"
          content="PES WORLDCUP 2026 - The Ultimate eFootball Tournament. 32 Teams, 8 Groups, World Cup Rules. Book Your Nation Now!"
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-football-blue via-purple-600 to-football-green text-white">
        <div className="container">
          <div className="py-20 text-center">
            <h1 className="text-6xl font-black mb-6 animate-pulse">⚽ PES WORLDCUP 2026</h1>
            <p className="text-2xl font-bold mb-4">THE ULTIMATE eFootball TOURNAMENT</p>
            <p className="text-lg mb-8">32 Nations • 8 Groups • Real FIFA Rules • $4,800 Prize Pool</p>

            {/* Countdown */}
            <div className="bg-black/30 backdrop-blur rounded-lg p-6 mb-8 inline-block">
              <p className="text-sm mb-2">Tournament Starts In:</p>
              <p className="text-4xl font-bold font-mono">{countdown}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-football-gold text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition transform hover:scale-105"
              >
                🎫 BOOK YOUR NATION NOW
              </Link>
              <Link
                href="/tournament"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white/20 transition"
              >
                📊 VIEW TOURNAMENT INFO
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-16">
        <h2 className="text-4xl font-black text-center mb-12">🏆 Tournament Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card text-center">
            <div className="text-5xl mb-4">32</div>
            <h3 className="text-2xl font-bold mb-2">Elite Teams</h3>
            <p className="text-gray-600">Top nations competing for glory</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl mb-4">8</div>
            <h3 className="text-2xl font-bold mb-2">Groups</h3>
            <p className="text-gray-600">4 teams in each group stage</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl mb-4">$150</div>
            <h3 className="text-2xl font-bold mb-2">Entry Fee</h3>
            <p className="text-gray-600">Book your spot now</p>
          </div>
          <div className="card text-center">
            <div className="text-5xl mb-4">$4.8K</div>
            <h3 className="text-2xl font-bold mb-2">Prize Pool</h3>
            <p className="text-gray-600">Winners take home!</p>
          </div>
        </div>

        {/* Tournament Structure */}
        <h3 className="text-3xl font-bold mb-8">📋 Tournament Structure</h3>
        <div className="bg-gray-100 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <div className="text-lg font-bold mb-4">32 TEAMS</div>
            <div className="text-gray-600">↓</div>
            <div className="text-lg font-bold mb-4">8 GROUPS (A-H)</div>
            <div className="text-gray-600">4 Teams per Group • Round Robin • Top 2 Qualify</div>
            <div className="text-gray-600">↓</div>
            <div className="text-lg font-bold mb-4">16 TEAMS - ROUND OF 16</div>
            <div className="text-gray-600">↓</div>
            <div className="text-lg font-bold mb-4">8 TEAMS - QUARTERFINALS</div>
            <div className="text-gray-600">↓</div>
            <div className="text-lg font-bold mb-4">4 TEAMS - SEMIFINALS</div>
            <div className="text-gray-600">↓</div>
            <div className="text-lg font-bold text-football-gold">3RD PLACE MATCH & GRAND FINAL</div>
          </div>
        </div>

        {/* Prize Distribution */}
        <h3 className="text-3xl font-bold mb-8">💰 Prize Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-center">
            <div className="text-3xl mb-2">🥇</div>
            <h4 className="font-bold mb-2">1st Place</h4>
            <p className="text-2xl font-bold">$1,920</p>
            <p className="text-sm">40% of pool</p>
          </div>
          <div className="card bg-gradient-to-br from-gray-400 to-gray-600 text-white text-center">
            <div className="text-3xl mb-2">🥈</div>
            <h4 className="font-bold mb-2">2nd Place</h4>
            <p className="text-2xl font-bold">$960</p>
            <p className="text-sm">20% of pool</p>
          </div>
          <div className="card bg-gradient-to-br from-orange-400 to-orange-600 text-white text-center">
            <div className="text-3xl mb-2">🥉</div>
            <h4 className="font-bold mb-2">3rd Place</h4>
            <p className="text-2xl font-bold">$480</p>
            <p className="text-sm">10% of pool</p>
          </div>
          <div className="card bg-gradient-to-br from-blue-400 to-blue-600 text-white text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h4 className="font-bold mb-2">Semifinalists</h4>
            <p className="text-2xl font-bold">$240</p>
            <p className="text-sm">Each</p>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div className="bg-gray-100 py-16">
        <div className="container">
          <h2 className="text-4xl font-black mb-8">⚖️ Tournament Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Group Stage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Win = 3 Points</li>
                <li>✅ Draw = 1 Point</li>
                <li>✅ Loss = 0 Points</li>
                <li>✅ Tiebreaker: Goal Difference</li>
                <li>✅ Top 2 from each group qualify</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Knockout Stage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ R16 to Finals (Single Elimination)</li>
                <li>✅ Extra Time if Draw</li>
                <li>✅ Penalties if Still Draw</li>
                <li>✅ Real FIFA/PES Rules Apply</li>
                <li>✅ Professional Gameplay Required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-football-blue text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Compete?</h2>
          <p className="text-xl mb-8">Only 32 spots available. Book your nation now before they're gone!</p>
          <Link
            href="/register"
            className="bg-football-gold text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-yellow-400 transition transform hover:scale-105 inline-block"
          >
            🎫 BOOK NOW - $150 USD
          </Link>
        </div>
      </div>
    </>
  );
}
