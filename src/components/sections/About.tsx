import { Sword, Anchor, Zap, Users } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
  { icon: <Zap className="text-yellow-400" />, title: 'Кастомные ивенты', desc: 'Уникальные события каждый день с редким лутом.' },
  { icon: <Sword className="text-red-400" />, title: 'Новые зачарования', desc: 'Более 50 новых чар для PvP и PvE сражений.' },
  { icon: <Users className="text-blue-400" />, title: 'Кланы', desc: 'Развитая система кланов, войны и общий рейтинг.' },
  { icon: <Anchor className="text-beluga-accent" />, title: 'Уникальные Боссы', desc: 'Эпические сражения с монстрами глубин.' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Особенности сервера</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Мы создали сервер, где важен каждый игрок. От сложной экономики до эпических битв — здесь ты найдешь свой путь.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Card key={i} className="text-center hover:-translate-y-2 transition-transform">
              <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
