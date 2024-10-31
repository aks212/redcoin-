import { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';

interface HomeProps {
  points: number;
  setPoints: (points: number) => void;
  setShowWelcome: (show: boolean) => void;
}

export function Home({ points, setPoints, setShowWelcome }: HomeProps) {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });

      setPoints(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, setPoints]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      setShowWelcome(true);
      setTimeout(() => {
        window.location.href = 'https://websim.io/start';
      }, 2000);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="bg-gradient-to-r from-[#1E2A38] to-[#34495E] text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg my-5">
        🪙 {points.toLocaleString()}
      </div>

      <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-xl flex items-center justify-center my-10">
        <Coins className={`w-20 h-20 md:w-24 md:h-24 text-[#E67E22] ${isActive ? 'animate-spin' : ''}`} />
      </div>

      <button
        onClick={handleStart}
        disabled={isActive}
        className={`
          w-4/5 max-w-sm bg-gradient-to-r from-[#E67E22] to-[#D35400]
          text-white py-4 px-8 rounded-full text-lg font-bold
          transform transition-all duration-200
          ${isActive ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1 hover:shadow-lg'}
        `}
      >
        {isActive ? `Started ${formatTime(timeLeft)}` : 'Start 02:00:00'}
      </button>
    </div>
  );
}