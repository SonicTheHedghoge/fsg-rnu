import { Globe, Search, Users, ChevronDown } from 'lucide-react';

export default function Header({ onOpenExtranet }: { onOpenExtranet: () => void }) {
  return (
    <header className="bg-[#2f2f4f] text-white">
      {/* Ministry Bloc */}
      <div className="bg-[#22223b] text-gray-300 text-xs py-1 px-4 hidden lg:block border-b border-gray-700">
        <div className="container mx-auto flex items-center gap-2">
          <span className="text-lg">🇹🇳</span>
          <div className="flex flex-col">
            <a href="#" className="hover:underline">Ministère de l’Enseignement Supérieur et de la Recherche Scientifique</a>
            <a href="#" className="hover:underline font-bold">Université de Gabes</a>
          </div>
        </div>
      </div>

      {/* Top Header */}
      <div className="container mx-auto flex justify-between items-stretch h-20">
        <div className="flex items-center px-4">
          <div className="flex items-center gap-4">
            {/* Logo placeholder */}
            <div className="flex flex-col">
              <div className="text-2xl font-bold tracking-widest flex items-center gap-2">
                <span className="text-4xl font-light">FSG</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold text-right" dir="rtl">كلية العلوم بقابس</span>
                  <span className="text-sm font-light">Faculté des Sciences de Gabès</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center gap-4 px-4">
            <div className="flex items-center gap-1 cursor-pointer text-sm hover:text-gray-300">
              <Globe size={16} />
              <span>Français</span>
              <ChevronDown size={14} />
            </div>
            
            <button className="hover:text-gray-300">
              <Search size={20} />
            </button>
          </div>
          
          <button 
            onClick={onOpenExtranet}
            className="flex items-center gap-2 bg-[#f92b60] text-white px-6 h-full hover:bg-pink-600 transition-colors text-sm font-medium"
          >
            <Users size={16} />
            Espace Extranet
          </button>
        </div>
      </div>
    </header>
  );
}
