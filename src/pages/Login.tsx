import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

// Компонент виджета Телеграм
const TelegramLoginWidget = ({ onAuth }: { onAuth: (user: any) => void }) => {
  useEffect(() => {
    // @ts-ignore
    window.onTelegramAuth = (user) => {
      onAuth(user);
    };

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', 'YOUR_BOT_NAME'); // <-- ВСТАВЬ ИМЯ БОТА (без @)
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    
    document.getElementById('telegram-login-container')?.appendChild(script);
  }, []);

  return <div id="telegram-login-container" className="flex justify-center mt-4" />;
};

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_URL = 'http://192.168.0.43:8000'; // Адрес бэкенда

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { username, password });
      localStorage.setItem('token', res.data.access_token);
      navigate('/dashboard');
    } catch (err) {
      setError('Неверный логин или пароль');
    }
  };

  const handleTelegramAuth = async (user: any) => {
    try {
      const res = await axios.post(`${API_URL}/auth/telegram`, user);
      localStorage.setItem('token', res.data.access_token);
      navigate('/dashboard');
    } catch (err) {
      setError('Этот Telegram не привязан ни к одному аккаунту');
    }
  };

  return (
    <div className="min-h-screen bg-beluga-dark flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Вход в империю</h2>
        
        {error && <div className="bg-red-500/20 text-red-400 p-2 rounded mb-4 text-center text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-slate-400 text-sm">Игровой ник</label>
            <input 
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="text-slate-400 text-sm">Пароль (с сервера)</label>
            <input 
              type="password"
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full" type="submit">Войти</Button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-slate-700"></div>
          <span className="mx-4 text-slate-500 text-sm">или</span>
          <div className="flex-grow border-t border-slate-700"></div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 text-sm mb-2">Войти через Telegram</p>
          <TelegramLoginWidget onAuth={handleTelegramAuth} />
        </div>
      </Card>
    </div>
  );
};
