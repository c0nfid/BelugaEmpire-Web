import { useState } from 'react';
import { items } from '../../data/items';
import { Card } from '../ui/Card';

export const CustomItems = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);
  
  const rarityColors = {
    common: 'text-slate-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-gold drop-shadow-md text-yellow-500'
  };

  return (
    <section id="items" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Кастомные предметы</h2>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {['all', 'weapon', 'armor', 'tool', 'artifact'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 rounded text-sm capitalize border ${filter === type ? 'bg-beluga-accent border-beluga-accent text-white' : 'border-slate-700 text-slate-400'}`}
            >
              {type === 'all' ? 'Все' : type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map(item => (
            <Card key={item.id} className="hover:bg-slate-800">
              <div className="mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider border border-current px-2 py-0.5 rounded ${rarityColors[item.rarity]}`}>
                  {item.rarity}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
