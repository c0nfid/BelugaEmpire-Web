import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useServer } from '../../context/ServerContext';

const navLinks = [
  { name: 'О сервере', href: '#about' },
  { name: 'Донат', href: '#donate' },
  { name: 'Предметы', href: '#items' },
  { name: 'Крафты', href: '#crafts' },
  { name: 'Боссы', href: '#bosses' },
  { name: 'Кланы', href: '#clans' },
  { name: 'Как зайти', href: '#join' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentServer } = useServer(); // В будущем можно менять через сеттер

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-beluga-dark/90 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black text-white tracking-wider">
          Beluga<span className="text-beluga-accent">Empire</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-beluga-accent text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Server Switcher Stub */}
        <div className="hidden md:flex items-center bg-slate-800 rounded-lg p-1 text-xs font-bold">
          <div className={`px-3 py-1 rounded cursor-pointer transition-all ${currentServer === 'survival' ? 'bg-beluga-accent text-white' : 'text-slate-500'}`}>
            Выживание
          </div>
          <div className="px-3 py-1 text-slate-500 cursor-not-allowed" title="Скоро открытие">
            Анархия
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-beluga-dark border-t border-slate-800">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-slate-700 pt-4 flex gap-4">
               <span className="text-beluga-accent font-bold">Выживание</span>
               <span className="text-slate-600">Анархия (Скоро)</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
