import { Users, BookOpen, Trophy, Handshake } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">FSG EN QUELQUES CHIFFRES</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="flex justify-center mb-4 text-yellow-500">
              <Users size={48} />
            </div>
            <div className="text-4xl font-bold mb-2">2100</div>
            <div className="text-sm uppercase tracking-wider text-gray-300">étudiants</div>
          </div>
          <div>
            <div className="flex justify-center mb-4 text-yellow-500">
              <BookOpen size={48} />
            </div>
            <div className="text-4xl font-bold mb-2">181</div>
            <div className="text-sm uppercase tracking-wider text-gray-300">enseignants</div>
          </div>
          <div>
            <div className="flex justify-center mb-4 text-yellow-500">
              <Trophy size={48} />
            </div>
            <div className="text-4xl font-bold mb-2">5</div>
            <div className="text-sm uppercase tracking-wider text-gray-300">Clubs</div>
          </div>
          <div>
            <div className="flex justify-center mb-4 text-yellow-500">
              <Handshake size={48} />
            </div>
            <div className="text-4xl font-bold mb-2">+ 20</div>
            <div className="text-sm uppercase tracking-wider text-gray-300">partenaires</div>
          </div>
        </div>
      </div>
    </section>
  );
}
