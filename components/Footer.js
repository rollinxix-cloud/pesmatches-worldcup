import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">⚽ PES WORLDCUP 2026</h3>
            <p className="text-gray-400">
              The ultimate professional eFootball tournament. 32 teams. Real FIFA rules. $4,800 prize pool.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tournament" className="text-gray-400 hover:text-white transition">
                  Tournament
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white transition">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Tournament Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Tournament</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📅 Starts: June 15, 2026</li>
              <li>🏆 32 Nations</li>
              <li>💰 Entry: $150 USD</li>
              <li>💵 Prize Pool: $4,800</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Support</h4>
            <p className="text-gray-400 mb-4">Need help? Contact the organizer:</p>
            <a
              href={process.env.NEXT_PUBLIC_ORGANIZER_MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition inline-block"
            >
              💬 Messenger
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 PES WORLDCUP. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed with ❤️ for the eFootball Community
          </p>
        </div>
      </div>
    </footer>
  );
}
