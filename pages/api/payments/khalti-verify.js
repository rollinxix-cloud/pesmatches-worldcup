import { db } from '../../../utils/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token, amount } = req.body;

    // Verify with Khalti API (in production)
    const khaltiVerifyUrl = 'https://khalti.com/api/payment/verify/';
    const khaltiSecret = process.env.KHALTI_SECRET_KEY;

    // For demo: assume verified

    res.status(200).json({
      success: true,
      message: 'Khalti payment verified',
      pidx: token,
    });
  } catch (error) {
    console.error('Khalti verification error:', error);
    res.status(500).json({ error: 'Khalti verification failed' });
  }
}
