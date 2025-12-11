import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const API_URL = import.meta.env.VITE_API_URL;
interface UserData {
  playername: string;
  uuid: string;
  activeTG: boolean;
  tg_username?: string;
  admin: boolean;
}

export const Dashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setUser(res.data))
    .catch(() => {
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [navigate]);

  if (!user) return <div className="text-white text-center mt-20">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-beluga-dark p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Личный кабинет</h1>
          <Button variant="secondary" onClick={() => {
            localStorage.removeItem('token');
            navigate('/');
          }}>Выйти</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-xl font-bold text-beluga-accent mb-4">Профиль</h2>
            <div className="space-y-2 text-slate-300">
              <p>Никнейм: <span className="text-white font-bold">{user.playername}</span></p>
              <p>UUID: <span className="font-mono text-xs">{user.uuid}</span></p>
              <p>Статус: {user.admin ? <span className="text-red-400 font-bold">Администратор</span> : 'Игрок'}</p>
            </div>
          </Card>

          <Card>
             <h2 className="text-xl font-bold text-beluga-accent mb-4">Безопасность</h2>
             <div className="flex items-center gap-2 mb-4">
                <span>Привязка Telegram:</span>
                {user.activeTG ? (
                  <span className="text-green-400 font-bold flex items-center gap-1">
                    ✓ Активно ({user.tg_username ? `@${user.tg_username}` : 'Привязан'})
                  </span>
                ) : (
                  <span className="text-red-400 font-bold">✕ Не привязано</span>
                )}
             </div>
             {!user.activeTG && (
               <div className="text-sm text-slate-400 bg-slate-800 p-3 rounded">
                 Зайдите на сервер и напишите <code>/2fa add</code> для привязки.
               </div>
             )}
          </Card>
        </div>
      </div>
    </div>
  );
};
