export default function News() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 to-orange-400 rounded-bl-full transform translate-x-1/3 -translate-y-1/4 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2f2f4f] inline-block relative pb-4 uppercase tracking-wider">
            Nos Nouveautés
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gray-300"></span>
          </h2>
        </div>
        
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {['Actualités', 'Manifestations', 'Evènements et news', 'Press'].map((cat, i) => (
            <button key={i} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#2f2f4f] text-white hover:bg-[#404060]`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-48 bg-gray-300 relative">
                <img src={`https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400&h=300&sig=${item}`} alt="News" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  ACTUALITÉ
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500 mb-2">12 Octobre 2023</div>
                <h3 className="font-bold text-[#2f2f4f] mb-2 line-clamp-2">Titre de l'actualité ou de l'événement important pour la faculté</h3>
                <p className="text-sm text-gray-600 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-transparent border-2 border-[#2f2f4f] text-[#2f2f4f] px-6 py-2 rounded-full hover:bg-[#2f2f4f] hover:text-white transition-colors font-medium">
            Toute l'actualité
          </button>
        </div>
      </div>
    </section>
  );
}
