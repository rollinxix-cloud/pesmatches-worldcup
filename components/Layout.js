import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-football-blue text-white shadow-lg">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold py-4">
            ⚽ PES Matches
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-football-gold transition">
              Home
            </Link>
            <Link href="/admin" className="hover:text-football-gold transition">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-800 text-white text-center py-8 mt-16">
        <p>&copy; 2024 PES Matches World Cup. All rights reserved.</p>
      </footer>
    </div>
  );
}
