import { MapPin, Phone, Printer, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-6">FS GABÈS</div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Cité Erriadh, Zrig 6072 Gabès Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>75 392 080 / 75 392 600</span>
              </li>
              <li className="flex items-center gap-3">
                <Printer size={18} className="text-blue-500 shrink-0" />
                <span>75 392 421</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a href="mailto:mail@fsg.rnu.tn" className="hover:text-white transition-colors">mail@fsg.rnu.tn</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Faculté</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">A propos de la FSG</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Statistiques</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conseil scientifique</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services administratifs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Observatoire</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Suivez-nous</h3>
            <p className="text-sm mb-4">LA VIE ÉTUDIANTE CONTINUE SUR LES RÉSEAUX SOCIAUX !</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Faculté des Sciences de Gabès. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Accès informations</a>
            <a href="#" className="hover:text-white transition-colors">Plan de site</a>
            <a href="#" className="hover:text-white transition-colors">Liens utiles</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
