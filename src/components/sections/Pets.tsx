import { pets } from '../../data/pets';
import { Card } from '../ui/Card';

export const Pets = () => {
  return (
    <section id="pets" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Верные Питомцы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map(pet => (
            <Card key={pet.id} className="border-l-4 border-l-beluga-success">
              <div className="flex justify-between items-start mb-2">
                 <h4 className="text-xl font-bold text-white">{pet.name}</h4>
                 <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">{pet.type}</span>
              </div>
              <p className="text-sm text-green-400 mb-2">Buff: {pet.buffs}</p>
              <div className="text-xs text-slate-500">Где найти: {pet.howToGet}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
