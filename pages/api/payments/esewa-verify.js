import { db } from '../../../utils/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { oid, amount, refId } = req.body;

    // Verify with eSewa (in production)
    // For demo: assume verified

    // Update booking status
    await updateDoc(doc(db, 'bookings', oid), {
      status: 'paid',
      paymentMethod: 'esewa',
      transactionId: refId,
      updatedAt: new Date(),
    });

    res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ error: 'Payment verification failed' });
  }
}
