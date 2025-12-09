import { ServerProvider } from './context/ServerContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Donate } from './components/sections/Donate';
import { CustomItems } from './components/sections/CustomItems';
import { Crafts } from './components/sections/Crafts';
import { Bosses } from './components/sections/Bosses';
import { Clans } from './components/sections/Clans';
import { Pets } from './components/sections/Pets';
import { HowToJoin } from './components/sections/HowToJoin';

function App() {
  return (
    <ServerProvider>
      <div className="min-h-screen bg-beluga-dark text-slate-100 font-sans selection:bg-beluga-accent selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Donate />
          <CustomItems />
          <Crafts />
          <Bosses />
          <Clans />
          <Pets />
          <HowToJoin />
        </main>
        <Footer />
      </div>
    </ServerProvider>
  );
}

export default App;
