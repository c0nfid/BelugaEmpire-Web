import { Monitor, Smartphone } from 'lucide-react';
import { Card } from '../ui/Card';

export const HowToJoin = () => {
  return (
    <section id="join" className="py-20 bg-ocean-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-12">Как начать играть?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Java */}
          <Card className="bg-slate-800/50 backdrop-blur border-beluga-accent/30">
            <div className="flex items-center gap-4 mb-6">
              <Monitor size={40} className="text-beluga-accent" />
              <h3 className="text-2xl font-bold">Java Edition</h3>
            </div>
            <ol className="space-y-4 text-slate-300 list-decimal list-inside">
              <li>Запусти Minecraft версии <strong>1.20+</strong></li>
              <li>Перейди в «Сетевая игра» → «Добавить сервер»</li>
              <li>Введи IP: <span className="text-white font-mono bg-slate-900 px-2 py-1 rounded select-all">play.belugaempire.net</span></li>
              <li>Нажми «Готово» и заходи!</li>
            </ol>
          </Card>

          {/* Bedrock */}
          <Card className="bg-slate-800/50 backdrop-blur border-beluga-gold/30">
            <div className="flex items-center gap-4 mb-6">
              <Smartphone size={40} className="text-beluga-gold" />
              <h3 className="text-2xl font-bold">Bedrock (PE)</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li>IP: <span className="text-white font-mono bg-slate-900 px-2 py-1 rounded select-all">play.belugaempire.net</span></li>
              <li>Port: <span className="text-white font-mono bg-slate-900 px-2 py-1 rounded select-all">19132</span></li>
              <li className="text-sm mt-4 text-slate-400">Перейди во вкладку «Серверы», прокрути вниз и нажми «Добавить сервер».</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
