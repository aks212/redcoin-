import { Home, ClipboardList, Users, Activity, Wallet } from 'lucide-react';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: 'home' | 'tasks' | 'friends' | 'activity' | 'wallet') => void;
}

export function Navigation({ activePage, setActivePage }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'tasks', icon: ClipboardList, label: 'Tasks' },
    { id: 'friends', icon: Users, label: 'Frens' },
    { id: 'activity', icon: Activity, label: 'Activity' },
    { id: 'wallet', icon: Wallet, label: 'Wallet' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1E2A38]/80 backdrop-blur-md text-white py-3 px-4">
      <div className="max-w-2xl mx-auto flex justify-around items-center">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActivePage(id as any)}
            className={`flex flex-col items-center space-y-1 transition-colors ${
              activePage === id ? 'text-[#E67E22]' : 'text-white/70 hover:text-white'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}