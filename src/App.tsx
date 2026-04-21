import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Exterior from './components/Exterior';
import Interior from './components/Interior';
import Location from './components/Location';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Exterior />
      <Interior />
      <Location />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
