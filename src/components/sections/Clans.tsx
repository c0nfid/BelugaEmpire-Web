import { clans } from '../../data/clans';

export const Clans = () => {
  const sortedClans = [...clans].sort((a, b) => b.rating - a.rating);

  return (
    <section id="clans" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Кланы и Рейтинг</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Создавай клан, строй базу и сражайся за первенство. Лучшие кланы получают уникальные киты и доступ к закрытым данжам.
          </p>
        </div>

        <div className="overflow-x-auto bg-beluga-light rounded-xl border border-slate-800 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-slate-400 text-sm uppercase tracking-wider">
                <th className="p-4 border-b border-slate-800 text-center">#</th>
                <th className="p-4 border-b border-slate-800">Название</th>
                <th className="p-4 border-b border-slate-800">Рейтинг</th>
                <th className="p-4 border-b border-slate-800">Участники</th>
                <th className="p-4 border-b border-slate-800 hidden md:table-cell">PvP Убийства</th>
                <th className="p-4 border-b border-slate-800 hidden md:table-cell">Боссы</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {sortedClans.map((clan, idx) => (
                <tr key={clan.id} className="hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 last:border-0">
                  <td className="p-4 text-center font-bold text-beluga-accent">{idx + 1}</td>
                  <td className="p-4 font-bold text-white">{clan.name}</td>
                  <td className="p-4 text-beluga-gold font-mono">{clan.rating}</td>
                  <td className="p-4">{clan.members}</td>
                  <td className="p-4 hidden md:table-cell">{clan.pvpKills}</td>
                  <td className="p-4 hidden md:table-cell">{clan.bossKills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
