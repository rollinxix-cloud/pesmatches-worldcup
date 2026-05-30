import Head from 'next/head';
import { useState } from 'react';
import { TEAMS_2026 } from '../utils/teams';

export default function Register() {
  const [step, setStep] = useState(1); // 1: Select Nation, 2: Enter Details, 3: Confirm
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [formData, setFormData] = useState({
    playerName: '',
    playerPSN: '',
    email: '',
    phone: '',
    difficulty: 'Professional',
  });
  const [loading, setLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    setStep(2);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create booking
      const response = await fetch('/api/bookings/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teamId: selectedTeam.id,
          teamName: selectedTeam.name,
          ...formData,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setConfirmationMessage(`Booking ID: ${data.bookingId}`);
        setStep(3);
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Register - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-12">🎫 BOOK YOUR NATION</h1>

        {/* Step 1: Select Nation */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-8">Step 1: Select Your Nation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {TEAMS_2026.map((team) => (
                <div
                  key={team.id}
                  onClick={() => handleTeamSelect(team)}
                  className="card cursor-pointer hover:ring-4 ring-football-gold transition"
                >
                  <div className="text-6xl mb-4 text-center">{team.flag}</div>
                  <h3 className="text-xl font-bold text-center mb-2">{team.name}</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{team.region}</p>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-football-blue h-full"
                      style={{ width: `${team.rating}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 text-center">Rating: {team.rating}/100</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2: Enter Details */}
        {step === 2 && selectedTeam && (
          <>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-football-blue to-football-green text-white rounded-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-2">Selected: {selectedTeam.flag} {selectedTeam.name}</h2>
                <p className="text-lg">Entry Fee: $150 USD</p>
              </div>

              <h2 className="text-2xl font-bold mb-8">Step 2: Enter Your Details</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleInputChange}
                    className="w-full border-2 rounded-lg p-3 focus:ring-2 ring-football-blue"
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Gaming ID (PSN/Steam/Epic)</label>
                  <input
                    type="text"
                    name="playerPSN"
                    value={formData.playerPSN}
                    onChange={handleInputChange}
                    className="w-full border-2 rounded-lg p-3 focus:ring-2 ring-football-blue"
                    placeholder="Your Gaming ID"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-2 rounded-lg p-3 focus:ring-2 ring-football-blue"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-2 rounded-lg p-3 focus:ring-2 ring-football-blue"
                      placeholder="+1234567890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">Difficulty Level</label>
                  <select
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                    className="w-full border-2 rounded-lg p-3 focus:ring-2 ring-football-blue"
                  >
                    <option value="Amateur">Amateur</option>
                    <option value="Professional">Professional</option>
                    <option value="Elite">Elite</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-400 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 btn-primary font-bold py-3 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Continue to Payment →'}
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {/* Step 3: Confirmation & Payment */}
        {step === 3 && (
          <>
            <div className="max-w-2xl mx-auto">
              <div className="card bg-green-50 border-2 border-green-500 text-center mb-8">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-4">{confirmationMessage}</p>
                <p className="text-xl font-bold text-football-blue">{selectedTeam.flag} {selectedTeam.name}</p>
              </div>

              <h2 className="text-2xl font-bold mb-8">Step 3: Payment</h2>
              <p className="text-center text-gray-600 mb-8">Select your preferred payment method to complete the booking</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* eSewa Payment */}
                <button
                  onClick={() => {
                    // Implement eSewa payment
                    window.location.href = '/api/payments/esewa';
                  }}
                  className="card hover:ring-4 ring-football-gold transition cursor-pointer"
                >
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold mb-2">eSewa</h3>
                  <p className="text-gray-600 mb-4">Pay with eSewa Wallet</p>
                  <div className="btn-primary text-center">Pay $150</div>
                </button>

                {/* Khalti Payment */}
                <button
                  onClick={() => {
                    // Implement Khalti payment
                    window.location.href = '/api/payments/khalti';
                  }}
                  className="card hover:ring-4 ring-football-gold transition cursor-pointer"
                >
                  <div className="text-4xl mb-4">💳</div>
                  <h3 className="text-xl font-bold mb-2">Khalti</h3>
                  <p className="text-gray-600 mb-4">Pay with Khalti</p>
                  <div className="btn-primary text-center">Pay $150</div>
                </button>
              </div>

              {/* Contact Organizer */}
              <div className="card bg-blue-50 border-2 border-football-blue text-center">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-6">Contact the organizer via Facebook Messenger for assistance</p>
                <a
                  href={process.env.NEXT_PUBLIC_ORGANIZER_MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  💬 Message Organizer on Messenger
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
