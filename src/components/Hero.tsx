import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://i.ibb.co/60kpYJtF/h3-Zergc-Yc-Tztjk-C9z-Rhi6-E3-SE4-Uv-VOl-Uvnx9m-MIZ.jpg",
  "https://i.ibb.co/rRsLz9k7/h-KE7-Jnw-M4-H42-DUy-G8-G0961tcy-Ea-OK0jj-Ls-OHAzl-Q.jpg",
  "https://i.ibb.co/7N8tKqxW/XU6-Kl-JZ8-Y2-CWrh-HA7-RCK3-Jy-Kya-Ck-QLb-KCv-PTn-Noi.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-[400px] md:h-[600px] bg-gray-900 flex items-center justify-center overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          alt="Campus"
        />
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 text-center text-white p-4 drop-shadow-lg">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-xl">FS GABES</h2>
        <h3 className="text-2xl md:text-4xl font-light tracking-widest uppercase drop-shadow-xl">ENJOY THE ADVENTURE</h3>
      </div>

      {/* Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#2f2f4f] w-4' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
}
