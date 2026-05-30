import Head from 'next/head';

export default function PaymentFailure() {
  return (
    <>
      <Head>
        <title>Payment Failed - PES WORLDCUP 2026</title>
      </Head>

      <div className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-4xl font-bold mb-4 text-red-600">Payment Failed</h1>
          <p className="text-xl text-gray-600 mb-8">
            Unfortunately, your payment could not be processed.
          </p>
          <div className="card bg-red-50 border-2 border-red-500 mb-8">
            <p className="text-gray-700 mb-4">Please check the following:</p>
            <ul className="text-left space-y-2 mb-4">
              <li>✓ Ensure sufficient balance in your eSewa/Khalti account</li>
              <li>✓ Check your internet connection</li>
              <li>✓ Verify your payment details are correct</li>
            </ul>
            <p className="text-gray-700">
              If the problem persists, contact the organizer for assistance.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="/register" className="btn-primary inline-block py-3 px-8 text-lg">
              ← Try Again
            </a>
            <a
              href={process.env.NEXT_PUBLIC_ORGANIZER_MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-football-blue text-football-blue py-3 px-8 rounded-lg font-bold hover:bg-blue-50 transition"
            >
              💬 Contact Organizer
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
