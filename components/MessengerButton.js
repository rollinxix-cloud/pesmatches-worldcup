import { useState } from 'react';

export default function MessengerButton() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 z-40"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hover Tooltip */}
      {isHovering && (
        <div className="absolute bottom-20 right-0 bg-gray-800 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-bold mb-2">
          💬 Need Help? Click Here!
        </div>
      )}

      {/* Messenger Button */}
      <a
        href={process.env.NEXT_PUBLIC_ORGANIZER_MESSENGER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition transform hover:scale-110 flex items-center justify-center text-3xl"
      >
        💬
      </a>
    </div>
  );
}
