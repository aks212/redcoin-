import { useState, useEffect } from 'react';

interface HeaderProps {
  userId: string;
}

export function Header({ userId }: HeaderProps) {
  const [countdown, setCountdown] = useState(30 * 24 * 60 * 60); // 30 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatCountdown = () => {
    const days = Math.floor(countdown / (24 * 60 * 60));
    const hours = Math.floor((countdown % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((countdown % (60 * 60)) / 60);
    const seconds = countdown % 60;

    return `${days}d : ${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
  };

  return (
    <header className="sticky top-0 z-10 bg-[#1E2A38]/80 backdrop-blur-md text-white p-3 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <span>{userId}</span>
      </div>
      <button className="bg-gradient-to-r from-[#E67E22] to-[#D35400] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
        🕒 Ends in {formatCountdown()}
      </button>
    </header>
  );
}