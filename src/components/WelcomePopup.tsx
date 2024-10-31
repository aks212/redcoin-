interface WelcomePopupProps {
  onClose: () => void;
}

export function WelcomePopup({ onClose }: WelcomePopupProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-gradient-to-br from-[#1E2A38] to-[#34495E] p-6 rounded-2xl max-w-sm mx-4 text-white text-center transform transition-all">
        <h2 className="text-2xl font-bold mb-4">Welcome to Our App!</h2>
        <p className="mb-6 text-gray-200">
          Discover a world of exciting tasks, connect with friends, and earn rewards. 
          Complete challenges, climb the leaderboard, and grow your crypto wallet!
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-[#E67E22] to-[#D35400] px-6 py-3 rounded-full font-semibold
            transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}