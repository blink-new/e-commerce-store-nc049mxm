
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreateJourney } from './pages/CreateJourney';
import { ExplorePage } from './pages/ExplorePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen animated-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="pt-16">
              <Hero />
            </main>
          } />
          <Route path="/create" element={<CreateJourney />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;