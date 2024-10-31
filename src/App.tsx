import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Tasks } from './components/Tasks';
import { Friends } from './components/Friends';
import { Activity } from './components/Activity';
import { Wallet } from './components/Wallet';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { WelcomePopup } from './components/WelcomePopup';

type Page = 'home' | 'tasks' | 'friends' | 'activity' | 'wallet';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [points, setPoints] = useState(34400);
  const [showWelcome, setShowWelcome] = useState(false);
  const [userId, setUserId] = useState('Loading...');

  useEffect(() => {
    // Simulate user ID loading
    setTimeout(() => {
      setUserId('USER' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'));
    }, 1000);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home points={points} setPoints={setPoints} setShowWelcome={setShowWelcome} />;
      case 'tasks':
        return <Tasks setPoints={setPoints} />;
      case 'friends':
        return <Friends />;
      case 'activity':
        return <Activity />;
      case 'wallet':
        return <Wallet />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-2xl mx-auto relative min-h-screen">
        <Header userId={userId} />
        
        <main className="pb-20">
          {renderPage()}
        </main>

        <Navigation activePage={activePage} setActivePage={setActivePage} />
        
        {showWelcome && (
          <WelcomePopup onClose={() => setShowWelcome(false)} />
        )}
      </div>
    </div>
  );
}