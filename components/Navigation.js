import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-football-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-3xl font-black py-4 hover:text-football-gold transition">
          ⚽ PES WORLDCUP
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-football-gold transition font-bold">
            Home
          </Link>
          <Link href="/tournament" className="hover:text-football-gold transition font-bold">
            Tournament
          </Link>
          <Link href="/register" className="hover:text-football-gold transition font-bold">
            Register
          </Link>
          <Link href="/admin/dashboard" className="hover:text-football-gold transition font-bold">
            Admin
          </Link>
          <a
            href={process.env.NEXT_PUBLIC_ORGANIZER_MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-football-gold text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            💬 Contact Organizer
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  );
}
