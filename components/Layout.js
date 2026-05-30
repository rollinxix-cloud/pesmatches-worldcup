import Navigation from './Navigation';
import Footer from './Footer';
import MessengerButton from './MessengerButton';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <MessengerButton />
      <Footer />
    </div>
  );
}
