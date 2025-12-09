import { useState } from 'react';
import { privileges, currencyPackages } from '../../data/donate';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Check } from 'lucide-react';

export const Donate = () => {
  const [activeTab, setActiveTab] = useState<'privileges' | 'currency'>('privileges');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment for:', selectedItem);
    alert('Переход к оплате (заглушка)...');
    setSelectedItem(null);
  };

  return (
    <section id="donate" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Магазин <span className="text-beluga-gold">Beluga</span></h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('privileges')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'privileges' ? 'bg-beluga-accent text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            Привилегии
          </button>
          <button 
            onClick={() => setActiveTab('currency')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'currency' ? 'bg-beluga-accent text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            Фиш-баксы
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'privileges' ? (
            privileges.map((priv) => (
              <Card key={priv.id} className="flex flex-col border-t-4 border-t-beluga-accent">
                <h3 className="text-2xl font-bold text-white mb-2">{priv.name}</h3>
                <div className="text-3xl font-black text-beluga-gold mb-6">{priv.price} ₽</div>
                <ul className="flex-1 space-y-3 mb-6 text-slate-300 text-sm">
                  {priv.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-green-400 mt-1 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setSelectedItem(priv)}>Купить</Button>
              </Card>
            ))
          ) : (
            currencyPackages.map((pack) => (
              <Card key={pack.id} className="flex flex-col items-center text-center">
                <div className="text-beluga-accent font-bold text-xl mb-2">{pack.amount} Фиш-баксов</div>
                <p className="text-slate-400 text-sm mb-4">{pack.description}</p>
                <div className="text-2xl font-black text-white mb-6">{pack.price} ₽</div>
                <Button variant="outline" className="w-full" onClick={() => setSelectedItem(pack)}>Купить</Button>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={!!selectedItem} 
        onClose={() => setSelectedItem(null)} 
        title={`Покупка: ${selectedItem?.name || selectedItem?.amount + ' Баксов'}`}
      >
        <form onSubmit={handleBuy} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">Никнейм</label>
            <input type="text" required className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:border-beluga-accent outline-none" placeholder="Steve" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">Промокод</label>
            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white outline-none" placeholder="Если есть" />
          </div>
          <div className="text-sm text-slate-500">Сервер: <span className="text-beluga-accent">Выживание</span></div>
          <Button type="submit" className="w-full mt-4">Перейти к оплате</Button>
        </form>
      </Modal>
    </section>
  );
};
