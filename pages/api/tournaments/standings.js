import { db } from '../../../utils/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { calculateStandings } from '../../../utils/tournament-logic';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get all matches
    const matchesRef = collection(db, 'matches');
    const matchesSnap = await getDocs(matchesRef);
    const matches = matchesSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Calculate standings
    const standings = calculateStandings(matches);

    res.status(200).json({
      success: true,
      standings,
    });
  } catch (error) {
    console.error('Standings calculation error:', error);
    res.status(500).json({ error: 'Failed to calculate standings' });
  }
}
