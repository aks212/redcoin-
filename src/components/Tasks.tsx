import { useState } from 'react';
import { Twitter, MessageCircle, Play, Gamepad2, Snowflake, Zap, Coins } from 'lucide-react';
import type { Task } from '../types';

interface TasksProps {
  setPoints: (points: number) => void;
}

export function Tasks({ setPoints }: TasksProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      icon: <Twitter className="w-6 h-6" />,
      title: 'Follow us on Twitter',
      reward: 5000,
      url: 'https://websim.io/tasks/twitter-follow',
      state: 'start'
    },
    {
      id: '2',
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Join our Telegram group',
      reward: 5000,
      url: 'https://websim.io/tasks/telegram-join',
      state: 'start'
    },
    {
      id: '3',
      icon: <Play className="w-6 h-6" />,
      title: 'Watch video and earn',
      reward: 10000,
      url: 'https://websim.io/tasks/watch-video',
      state: 'start'
    },
    {
      id: '4',
      icon: <Gamepad2 className="w-6 h-6" />,
      title: 'Play CEX.IO Power Tap',
      reward: 100000,
      url: 'https://websim.io/tasks/cexio-power-tap',
      state: 'start'
    },
    {
      id: '5',
      icon: <Snowflake className="w-6 h-6" />,
      title: 'Play IceFarm',
      reward: 100000,
      url: 'https://websim.io/tasks/ice-farm',
      state: 'start'
    },
    {
      id: '6',
      icon: <Zap className="w-6 h-6" />,
      title: 'Play BOOMS',
      reward: 100000,
      url: 'https://websim.io/tasks/booms',
      state: 'start'
    },
    {
      id: '7',
      icon: <Coins className="w-6 h-6" />,
      title: 'Play 1win token',
      reward: 100000,
      url: 'https://websim.io/tasks/1win-token',
      state: 'start'
    }
  ]);

  const handleTaskClick = async (taskId: string) => {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1 || tasks[taskIndex].state !== 'start') return;

    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = { ...tasks[taskIndex], state: 'verifying' };
    setTasks(updatedTasks);

    window.open(tasks[taskIndex].url, '_blank');

    // Simulate verification
    setTimeout(() => {
      setTasks(prev => {
        const newTasks = [...prev];
        newTasks[taskIndex] = { ...prev[taskIndex], state: 'completed' };
        return newTasks;
      });
      setPoints(prev => prev + tasks[taskIndex].reward);
    }, 5000);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Available Tasks</h2>
      <p className="text-gray-600 mb-6">Complete any task and receive instant rewards!</p>
      
      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map(task => (
          <div
            key={task.id}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-gray-100 rounded-full">
                {task.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{task.title}</h3>
                <p className="text-[#E67E22] font-medium">+ 🪙 {task.reward.toLocaleString()}</p>
              </div>
            </div>
            <button
              onClick={() => handleTaskClick(task.id)}
              disabled={task.state === 'completed'}
              className={`
                w-full py-2 px-4 rounded-full font-medium transition-all
                ${task.state === 'completed'
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : task.state === 'verifying'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-[#E67E22] text-white hover:bg-[#D35400]'}
              `}
            >
              {task.state === 'completed' ? 'Completed' : task.state === 'verifying' ? 'Verifying...' : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}