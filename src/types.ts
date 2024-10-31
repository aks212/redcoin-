export interface Task {
  id: string;
  icon: JSX.Element;
  title: string;
  reward: number;
  url: string;
  state: 'start' | 'verifying' | 'completed';
}

export interface LeaderboardEntry {
  position: number;
  name: string;
  frens: number;
}