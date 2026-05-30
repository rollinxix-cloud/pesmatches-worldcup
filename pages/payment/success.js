import Head from 'next/head';

export default function PaymentSuccess() {
  return (
    <>
      <Head>
        <title>Payment Successful - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-4xl font-bold mb-4 text-green-600">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your booking for PES WORLDCUP 2026 has been confirmed.
          </p>
          <div className="card bg-green-50 border-2 border-green-500 mb-8">
            <p className="text-gray-700 mb-4">
              📧 Confirmation email has been sent to your registered email address.
            </p>
            <p className="text-gray-700 mb-4">📱 You'll receive further tournament updates via email and messaging.</p>
            <p className="text-gray-700">🎮 Get ready for the ultimate eFootball experience!</p>
          </div>
          <a href="/" className="btn-primary inline-block py-3 px-8 text-lg">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
