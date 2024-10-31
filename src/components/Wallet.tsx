import { Wallet as WalletIcon } from 'lucide-react';

export function Wallet() {
  const handleConnect = () => {
    window.location.href = 'https://ton.org/wallets';
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl p-6 shadow-md text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
          <WalletIcon className="w-8 h-8 text-[#E67E22]" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Wallet</h2>
        <p className="text-gray-600 mb-8">
          Connect your TON wallet for future rewards
        </p>

        <button
          onClick={handleConnect}
          className="w-full bg-gradient-to-r from-[#E67E22] to-[#D35400] text-white py-4 px-6 
            rounded-full font-semibold flex items-center justify-between
            transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span>Connect your TON wallet</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}