import { db } from '../../../utils/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { teamId, teamName, playerName, playerPSN, email, difficulty, phone } = req.body;

    // Validate input
    if (!teamId || !playerName || !playerPSN || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create booking document
    const bookingRef = await addDoc(collection(db, 'bookings'), {
      teamId,
      teamName,
      playerName,
      playerPSN,
      email,
      phone,
      difficulty,
      status: 'pending', // pending, paid, confirmed, cancelled
      entryFee: 150,
      paymentMethod: null,
      transactionId: null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    res.status(201).json({
      success: true,
      bookingId: bookingRef.id,
      message: 'Booking created. Proceed to payment.',
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
}
