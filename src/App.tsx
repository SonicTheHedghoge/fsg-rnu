import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Espaces from './components/Espaces';
import Stats from './components/Stats';
import Footer from './components/Footer';
import ExtranetModal from './components/ExtranetModal';

export default function App() {
  const [isExtranetOpen, setIsExtranetOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 print:bg-white">
      <div className="print:hidden">
        <Header onOpenExtranet={() => setIsExtranetOpen(true)} />
        <Navbar />
        <Hero />
        <News />
        <Espaces onOpenExtranet={() => setIsExtranetOpen(true)} />
        <Stats />
        <Footer />
      </div>
      <ExtranetModal isOpen={isExtranetOpen} onClose={() => setIsExtranetOpen(false)} />
    </div>
  );
}
