import { Trophy } from 'lucide-react';
import type { LeaderboardEntry } from '../types';

export function Activity() {
  const leaderboard: LeaderboardEntry[] = [
    { position: 1, name: 'TonBox', frens: 61029 },
    { position: 2, name: 'Dan', frens: 25060 },
    { position: 3, name: 'OrangeLemon', frens: 22662 },
    { position: 4, name: 'Ivan', frens: 22074 },
    { position: 5, name: 'Edan 0x', frens: 8354 },
    { position: 6, name: 'Chien', frens: 7929 },
    { position: 7, name: '超南✨', frens: 5533 }
  ];

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-[#E67E22]" />
            <h2 className="text-2xl font-bold">Leaderboard</h2>
          </div>

          <div className="bg-gradient-to-r from-[#1E2A38] to-[#34495E] text-white rounded-xl p-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Get crypto</h3>
            <p className="text-xl font-bold mb-2">+1K USDT +50M 🪙</p>
            <a href="#" className="text-[#E67E22] hover:text-[#D35400] transition-colors">
              More details →
            </a>
          </div>

          <div className="space-y-4">
            {leaderboard.map(entry => (
              <div
                key={entry.position}
                className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`
                    font-bold ${entry.position <= 3 ? 'text-[#E67E22]' : 'text-gray-600'}
                  `}>
                    {entry.position}.
                  </span>
                  <span className="font-medium">{entry.name}</span>
                </div>
                <span className="text-gray-600">{entry.frens.toLocaleString()} frens</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}