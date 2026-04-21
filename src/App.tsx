import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Exterior from './components/Exterior';
import Interior from './components/Interior';
import Menu from './components/Menu';
import FoodGallery from './components/FoodGallery';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Exterior />
      <Interior />
      <Menu />
      <FoodGallery />
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
