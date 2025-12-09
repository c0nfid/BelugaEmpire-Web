export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10 mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Beluga<span className="text-beluga-accent">Empire</span></h2>
        <p className="text-slate-400 mb-6 italic">«Море безграничных возможностей»</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-slate-300 hover:text-[#5865F2] transition-colors">Discord</a>
          <a href="#" className="text-slate-300 hover:text-[#0077FF] transition-colors">VK</a>
        </div>

        <div className="text-sm text-slate-600">
          <p>© {new Date().getFullYear()} BelugaEmpire. All rights reserved.</p>
          <p className="mt-2">Not affiliated with Mojang AB.</p>
        </div>
      </div>
    </footer>
  );
};
