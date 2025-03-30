
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen animated-bg">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
}

export default App;