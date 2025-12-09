import { useState } from 'react';
import { crafts } from '../../data/crafts';
import { CraftRecipe } from '../../types';
import { Card } from '../ui/Card';
import { Hammer } from 'lucide-react';
import { Modal } from '../ui/Modal';

export const Crafts = () => {
  const [selectedCraft, setSelectedCraft] = useState<CraftRecipe | null>(null);

  return (
    <section id="crafts" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <Hammer className="text-beluga-accent" /> Уникальные Крафты
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {crafts.map(craft => (
            <Card 
              key={craft.id} 
              className="cursor-pointer hover:bg-slate-800 flex flex-col items-center text-center group"
            >
              <div 
                 onClick={() => setSelectedCraft(craft)}
                 className="w-full h-full flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-lg mb-4 flex items-center justify-center border border-slate-700 group-hover:border-beluga-accent transition-colors">
                   <span className="text-2xl">📦</span>
                </div>
                <h4 className="font-bold text-white">{craft.resultName}</h4>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedCraft}
        onClose={() => setSelectedCraft(null)}
        title={selectedCraft?.resultName || ''}
      >
        {selectedCraft && (
          <div className="flex flex-col items-center">
             <p className="text-slate-300 mb-6 text-center">{selectedCraft.resultDescription}</p>
             
             {/* 3x3 Grid */}
             <div className="bg-slate-700 p-2 rounded">
               <div className="grid grid-cols-3 gap-1">
                 {selectedCraft.ingredients.map((ing, idx) => (
                   <div key={idx} className="w-12 h-12 bg-slate-800 border border-slate-600 flex items-center justify-center text-xs text-center p-1 text-slate-300" title={ing || ''}>
                     {ing ? ing : ''}
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="mt-4 text-xs text-slate-500 text-center">
               Подсказка: {selectedCraft.sourceInfo}
             </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
