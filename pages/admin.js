import Head from 'next/head';
import { useState } from 'react';

export default function Admin() {
  const [tournaments, setTournaments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTournament = {
      ...formData,
      id: Date.now(),
      matches: [],
    };
    setTournaments([...tournaments, newTournament]);
    setFormData({ name: '', date: '', description: '' });
    alert('Tournament added! (Note: This is a demo - data resets on refresh)');
  };

  return (
    <>
      <Head>
        <title>Admin Panel - PES Matches World Cup</title>
      </Head>

      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Create Tournament</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Tournament Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  rows="4"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Create Tournament
              </button>
            </form>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Tournaments Created</h2>
            {tournaments.length === 0 ? (
              <p className="text-gray-500">No tournaments created yet.</p>
            ) : (
              <ul className="space-y-2">
                {tournaments.map((t) => (
                  <li key={t.id} className="border-l-4 border-football-blue pl-4 py-2">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.date}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
