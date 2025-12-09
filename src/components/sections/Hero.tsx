import { Copy } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  const copyIP = () => {
    navigator.clipboard.writeText('play.belugaempire.net');
    alert('IP скопирован!');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-beluga-accent/10 border border-beluga-accent/30 text-beluga-accent font-medium animate-pulse">
          Новый сезон: Глубины океана!
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Beluga<span className="text-transparent bg-clip-text bg-gradient-to-r from-beluga-accent to-emerald-400">Empire</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Море безграничных возможностей. Уникальные боссы, клановые войны и магия в каждом блоке.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={() => document.getElementById('join')?.scrollIntoView()}>
            Начать играть
          </Button>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById('donate')?.scrollIntoView()}>
            Магазин
          </Button>
        </div>

        <div className="inline-flex flex-col md:flex-row items-center bg-slate-800/80 p-4 rounded-xl border border-slate-700 backdrop-blur gap-6">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-slate-300 font-mono text-lg">play.belugaempire.net</span>
             <button onClick={copyIP} className="p-2 hover:bg-white/10 rounded transition">
               <Copy size={18} className="text-slate-400" />
             </button>
          </div>
          <div className="hidden md:block w-px h-8 bg-slate-600"></div>
          <div className="text-slate-400 text-sm">
            Java: 1.20 - 1.21.x <br /> Bedrock: Supported
          </div>
        </div>
      </div>
    </section>
  );
};
