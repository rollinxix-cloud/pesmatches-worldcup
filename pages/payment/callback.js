import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function PaymentCallback() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    // Handle eSewa payment callback
    const handleEsewaCallback = async () => {
      const { oid, amount, refId } = router.query;

      if (oid && refId) {
        try {
          const response = await fetch('/api/payments/esewa-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ oid, amount, refId }),
          });

          if (response.ok) {
            setStatus('success');
            setTimeout(() => router.push('/payment/success'), 2000);
          } else {
            setStatus('failed');
            setTimeout(() => router.push('/payment/failure'), 2000);
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          setStatus('failed');
          setTimeout(() => router.push('/payment/failure'), 2000);
        }
      }
      setLoading(false);
    };

    if (router.isReady) {
      handleEsewaCallback();
    }
  }, [router.isReady, router.query, router]);

  return (
    <>
      <Head>
        <title>Processing Payment - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6 animate-spin">⏳</div>
          <h1 className="text-3xl font-bold mb-4">Processing Payment...</h1>
          <p className="text-lg text-gray-600">Please wait while we verify your payment.</p>
          <p className="text-sm text-gray-500 mt-4">Do not close this page.</p>
        </div>
      </div>
    </>
  );
}
