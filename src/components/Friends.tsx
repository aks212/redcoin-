import { Share, MessageCircle, Link } from 'lucide-react';

export function Friends() {
  const handleShare = (platform: 'telegram' | 'whatsapp' | 'link') => {
    const taskLink = `https://websim.io/tasks/${platform}-share`;
    const shareText = `Check out this awesome app and complete tasks: ${taskLink}`;

    switch (platform) {
      case 'telegram':
        window.location.href = `tg://msg?text=${encodeURIComponent(shareText)}`;
        break;
      case 'whatsapp':
        window.location.href = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
        break;
      case 'link':
        navigator.clipboard.writeText(shareText)
          .then(() => alert('Referral link copied to clipboard!'));
        break;
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Invite Frens</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Earn 20% for your direct referrals, 10% for their referrals, then 5%, 2.5%, and 1.25% 
          for your fifth-level referrals. Plus earn 15,000 SECOND for each invite, while your 
          friend receives 30,000!
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleShare('telegram')}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#E67E22] to-[#D35400] 
              text-white py-3 px-6 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Telegram
          </button>

          <button
            onClick={() => handleShare('whatsapp')}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#E67E22] to-[#D35400]
              text-white py-3 px-6 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Share className="w-5 h-5" />
            WhatsApp
          </button>

          <button
            onClick={() => handleShare('link')}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#E67E22] to-[#D35400]
              text-white py-3 px-6 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <Link className="w-5 h-5" />
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
}