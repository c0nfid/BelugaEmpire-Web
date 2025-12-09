import { useState } from 'react';
import { crafts } from '../../data/crafts';
import { CraftRecipe } from '../../types';
import { Card } from '../ui/Card';
import { Hammer } from 'lucide-react';
import { Modal } from '../ui/Modal';

// Функция для получения URL картинки
const getItemIcon = (id: string, isBlock = false) => {
  return `https://assets.mcasset.cloud/1.20.1/assets/minecraft/textures/${isBlock ? 'block' : 'item'}/${id}.png`;
};

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
              className="cursor-pointer hover:bg-slate-800 flex flex-col items-center text-center group transition-all hover:-translate-y-1"
            >
              <div 
                 onClick={() => setSelectedCraft(craft)}
                 className="w-full h-full flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-lg mb-4 flex items-center justify-center border-2 border-slate-700 group-hover:border-beluga-accent transition-colors shadow-lg">
                   {/* В качестве превью покажем просто сундук или вопросительный знак, так как иконки результата у нас пока нет в данных. 
                       Можно добавить поле resultIconId в types.ts, но пока оставим эмодзи или заглушку  */}
                   <span className="text-3xl">📦</span>
                </div>
                <h4 className="font-bold text-white text-lg">{craft.resultName}</h4>
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
             
             {/* 3x3 Crafting Grid */}
             <div className="bg-[#c6c6c6] p-4 rounded shadow-inner border-4 border-[#555]">
               <div className="grid grid-cols-3 gap-1">
                 {selectedCraft.ingredients.map((ing, idx) => (
                   <div 
                     key={idx} 
                     className="w-12 h-12 bg-[#8b8b8b] border-2 border-r-white border-b-white border-t-[#373737] border-l-[#373737] flex items-center justify-center relative hover:bg-[#9b9b9b] transition-colors"
                     title={ing?.name}
                   >
                     {ing ? (
                       <img 
                         src={getItemIcon(ing.id, ing.isBlock)} 
                         alt={ing.name} 
                         className="w-8 h-8 object-contain pixelated"
                         style={{ imageRendering: 'pixelated' }}
                         onError={(e) => {
                           (e.target as HTMLImageElement).style.display = 'none';
                           (e.target as HTMLImageElement).parentElement!.innerText = '?';
                         }}
                       />
                     ) : (
                       <div className="w-full h-full"></div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="mt-6 p-3 bg-beluga-dark/50 rounded-lg border border-beluga-accent/20 text-sm text-slate-300 text-center max-w-xs">
               <span className="text-beluga-accent font-bold">Где найти ресурсы:</span><br/>
               {selectedCraft.sourceInfo}
             </div>
          </div>
        )}
      </Modal>
    </section>
  );
};