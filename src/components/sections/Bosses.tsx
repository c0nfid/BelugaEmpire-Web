import { bosses } from '../../data/bosses';
import { Card } from '../ui/Card';
import { Skull } from 'lucide-react';

export const Bosses = () => {
  return (
    <section id="bosses" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
           <Skull className="text-red-500" /> Боссы
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bosses.map(boss => (
             <Card key={boss.id} className="relative overflow-hidden group">
               <div className="absolute top-0 right-0 bg-red-900/80 text-white text-xs px-2 py-1 rounded-bl">
                 {boss.killsCount} убийств
               </div>
               <h3 className="text-2xl font-black text-white mb-1">{boss.name}</h3>
               <div className="text-sm text-beluga-accent mb-4 uppercase tracking-wider font-bold">{boss.type}</div>
               
               <div className="space-y-2 text-sm text-slate-300">
                 <p><span className="text-slate-500">HP:</span> <span className="text-red-400 font-bold">❤ {boss.hp}</span></p>
                 <p><span className="text-slate-500">Механика:</span> {boss.mechanics}</p>
                 <p><span className="text-slate-500">Награда:</span> {boss.rewards}</p>
               </div>
               
               <div className="mt-4 flex flex-wrap gap-2">
                 {boss.tags.map((tag, i) => (
                   <span key={i} className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700 text-slate-400">{tag}</span>
                 ))}
               </div>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
