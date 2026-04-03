import { FileText, Building2, GraduationCap, Download, BookOpen, Users } from 'lucide-react';

export default function Espaces({ onOpenExtranet }: { onOpenExtranet: () => void }) {
  const espaces = [
    { title: "Marchés publics", icon: FileText, color: "bg-blue-800" },
    { title: "Départements", icon: Building2, color: "bg-teal-700" },
    { title: "Formation", icon: GraduationCap, color: "bg-orange-600" },
    { title: "Téléchargement", icon: Download, color: "bg-purple-700" },
    { title: "Bibliothèque en ligne", icon: BookOpen, color: "bg-green-700" },
    { title: "Espace extranet", icon: Users, color: "bg-red-700", onClick: onOpenExtranet },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Nos Espaces</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos espaces offrent des informations et des services en lignes particuliers aux utilisateurs fsg par profil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {espaces.map((espace, idx) => {
            const Icon = espace.icon;
            return (
              <div 
                key={idx} 
                onClick={espace.onClick}
                className={`relative h-48 rounded-xl overflow-hidden cursor-pointer group shadow-lg ${espace.color}`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white p-6 text-center transform group-hover:scale-105 transition-transform duration-300">
                  <Icon size={48} className="mb-4 opacity-80" />
                  <h3 className="text-xl font-bold">{espace.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
