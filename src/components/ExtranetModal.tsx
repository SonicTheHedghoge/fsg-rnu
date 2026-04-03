import React, { useState } from 'react';
import { X, User, Lock, LogIn, Cloud, Printer } from 'lucide-react';

interface ExtranetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExtranetModal({ isOpen, onClose }: ExtranetModalProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (username === 'daghari adem' && password === 'Jesuis123') {
      setIsLoggedIn(true);
    } else {
      setError('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setError('');
    setIsLoggedIn(false);
    onClose();
  };

  const rawGradesData = [
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'LOGIQUE FORMELLE', c8: 'LGLSI A TD1 TP1', grade: '3.0', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'LOGIQUE FORMELLE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'LOGIQUE FORMELLE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'LOGIQUE FORMELLE', c8: 'LGLSI A TD1 TP1', grade: '3.00', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F8A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'SYSTEME D’EXPLOITATION 1', c8: 'LGLSI A TD1 TP1', grade: '2.5', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F8A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'SYSTEME D’EXPLOITATION 1', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F8A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'SYSTEME D’EXPLOITATION 1', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F8A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'SYSTEME D’EXPLOITATION 1', c8: 'LGLSI A TD1 TP1', grade: '2.50', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F9A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'SYSTEMES LOGIQUES ET ARCHITECTURE DES ORDINATEURS', c8: 'LGLSI A TD1 TP1', grade: '3.5', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F9A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'SYSTEMES LOGIQUES ET ARCHITECTURE DES ORDINATEURS', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F9A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'SYSTEMES LOGIQUES ET ARCHITECTURE DES ORDINATEURS', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F9A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'SYSTEMES LOGIQUES ET ARCHITECTURE DES ORDINATEURS', c8: 'LGLSI A TD1 TP1', grade: '3.50', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'ANALYSE', c8: 'LGLSI A TD1 TP1', grade: '16.0', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'ANALYSE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'ANALYSE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F1A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'ANALYSE', c8: 'LGLSI A TD1 TP1', grade: '16.00', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F2A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'ALGEBRE', c8: 'LGLSI A TD1 TP1', grade: '17.5', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F2A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'ALGEBRE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F2A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'ALGEBRE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F2A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'ALGEBRE', c8: 'LGLSI A TD1 TP1', grade: '17.50', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F3A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'PROGRAMMATION', c8: 'LGLSI A TD1 TP1', grade: '17.0', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F3A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'PROGRAMMATION', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F3A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'PROGRAMMATION', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F3A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'PROGRAMMATION', c8: 'LGLSI A TD1 TP1', grade: '17.00', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F4A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'ANGLAIS', c8: 'LGLSI A TD1 TP1', grade: '17.0', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F4A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'ANGLAIS', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F4A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'ANGLAIS', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F4A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'ANGLAIS', c8: 'LGLSI A TD1 TP1', grade: '17.00', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F5A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'TECHNIQUES DE COMMUNICATION', c8: 'LGLSI A TD1 TP1', grade: '14.5', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F5A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'TECHNIQUES DE COMMUNICATION', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F5A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'TECHNIQUES DE COMMUNICATION', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F5A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'TECHNIQUES DE COMMUNICATION', c8: 'LGLSI A TD1 TP1', grade: '14.50', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F6A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'MULTIMEDIA', c8: 'LGLSI A TD1 TP1', grade: '10.25', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F6A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'MULTIMEDIA', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F6A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'MULTIMEDIA', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F6A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'MULTIMEDIA', c8: 'LGLSI A TD1 TP1', grade: '10.25', c10: 'DAGAHRI ADEM', c11: '13521112' },

    { c1: 'e1', c2: 'F7A', c3: '6001464', c4: '60014640', c5: '1', type: 'Examen', subject: 'ARCHITECTURE', c8: 'LGLSI A TD1 TP1', grade: '3.0', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F7A', c3: '6001464', c4: '60014640', c5: '1', type: 'DS', subject: 'ARCHITECTURE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F7A', c3: '6001464', c4: '60014640', c5: '1', type: 'TP', subject: 'ARCHITECTURE', c8: 'LGLSI A TD1 TP1', grade: 'N/A', c10: 'DAGAHRI ADEM', c11: '13521112' },
    { c1: 'e1', c2: 'F7A', c3: '6001464', c4: '60014640', c5: '1', type: 'Moyenne', subject: 'ARCHITECTURE', c8: 'LGLSI A TD1 TP1', grade: '3.00', c10: 'DAGAHRI ADEM', c11: '13521112' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:static print:block print:p-0">
      {/* Full screen background for the modal */}
      <div className="absolute inset-0 bg-gray-100 print:hidden">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
          alt="Network Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      {!isLoggedIn ? (
        <div className="bg-white shadow-2xl w-full max-w-4xl h-[500px] flex relative z-10 overflow-hidden print:hidden">
          <button onClick={handleClose} className="absolute top-4 right-4 z-20 text-white hover:text-gray-200 bg-black/20 rounded-full p-1">
            <X size={24} />
          </button>
          
          {/* Left side - Login Form */}
          <div 
            className="w-[60%] p-12 flex flex-col justify-center relative z-10 bg-white" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Se connecter</h2>
            <p className="text-xs text-[#2b5c8f] mb-8 pr-12">Étudiant / Ancien Étudiant / Enseignant / Administration / Entreprise</p>

            <form onSubmit={handleLogin} className="space-y-4 w-[85%]">
              {error && (
                <div className="text-red-600 text-sm mb-2">
                  {error}
                </div>
              )}

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Nom d'utilisateur"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Mot de passe"
                  required
                />
              </div>

              {/* Fake Cloudflare CAPTCHA */}
              <div className="border border-gray-300 rounded p-4 flex items-center justify-between bg-[#f9f9f9]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm text-gray-800">Vérification...</span>
                </div>
                <div className="text-[9px] text-gray-500 text-right flex flex-col items-end">
                  <div className="flex items-center gap-1 mb-0.5">
                    <Cloud size={14} className="text-orange-500 fill-orange-500" />
                    <span className="font-bold text-gray-800 tracking-wider">CLOUDFLARE</span>
                  </div>
                  <div className="flex gap-1">
                    <a href="#" className="hover:underline">Confidentialité</a>
                    <span>•</span>
                    <a href="#" className="hover:underline">Aide</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <a href="#" className="text-sm text-[#2b5c8f] hover:underline">Mot de passe oublié?</a>
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 py-2 px-5 border border-transparent rounded text-sm font-bold text-white bg-[#10b981] hover:bg-[#059669] focus:outline-none transition-colors"
                >
                  <LogIn size={16} />
                  Se connecter
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Image */}
          <div className="absolute right-0 top-0 w-[55%] h-full">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
              alt="Typing on laptop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
            
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pl-12">
              <div className="flex flex-col items-center text-[#1e3a8a]">
                {/* Top lines */}
                <div className="flex flex-col items-center gap-1 mb-2 w-full">
                  <div className="h-[2px] bg-[#1e3a8a] w-12"></div>
                  <div className="h-[2px] bg-[#1e3a8a] w-20"></div>
                  <div className="h-[2px] bg-[#1e3a8a] w-28"></div>
                  <div className="h-[2px] bg-[#1e3a8a] w-36"></div>
                </div>
                
                <div className="text-7xl font-serif tracking-widest my-2" style={{ transform: 'scaleY(1.2)' }}>
                  FSG
                </div>
                
                {/* Bottom lines */}
                <div className="flex flex-col items-center gap-1 mt-2 w-full">
                  <div className="h-[2px] bg-[#1e3a8a] w-36"></div>
                  <div className="h-[2px] bg-[#1e3a8a] w-28"></div>
                  <div className="h-[2px] bg-[#1e3a8a] w-20"></div>
                  <div className="h-[2px] bg-[#1e3a8a] w-12"></div>
                </div>

                <div className="text-center mt-4">
                  <div className="text-2xl font-bold" dir="rtl">كلية العلوم بقابس</div>
                  <div className="text-sm font-medium tracking-wide">Faculté des Sciences de Gabès</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative z-10 border-2 border-black shadow-2xl print:border-0 print:shadow-none print:max-h-none print:overflow-visible print:p-0">
          <div className="absolute top-4 right-4 flex items-center gap-4 print:hidden">
            <button 
              onClick={() => window.print()} 
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              <Printer size={16} />
              Imprimer (PDF)
            </button>
            <button onClick={handleClose} className="text-black hover:text-gray-600 p-1">
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-6 print:mt-0 mt-12">
            <h2 className="text-xl font-bold uppercase text-black">CD-NETU SPECIALITE L EN SCIENCES INFORMATIQUES</h2>
            <div className="flex justify-between items-end mt-4 border-b-2 border-black pb-2">
              <div className="text-sm text-black font-medium">
                Étudiant: DAGAHRI ADEM | Matricule: 13521112
              </div>
              <div className="text-lg font-bold text-black">
                Moyenne Générale: 11.51
              </div>
            </div>
          </div>

          <table className="w-full text-left border-collapse border border-black text-[10px] text-black">
            <thead>
              <tr className="bg-gray-100 print:bg-transparent">
                <th className="border border-black py-1 px-2 font-bold">Session</th>
                <th className="border border-black py-1 px-2 font-bold">Code</th>
                <th className="border border-black py-1 px-2 font-bold">Matière ID</th>
                <th className="border border-black py-1 px-2 font-bold">Epreuve ID</th>
                <th className="border border-black py-1 px-2 font-bold">Coef</th>
                <th className="border border-black py-1 px-2 font-bold">Type</th>
                <th className="border border-black py-1 px-2 font-bold">Matière</th>
                <th className="border border-black py-1 px-2 font-bold">Groupe</th>
                <th className="border border-black py-1 px-2 font-bold text-right">Note</th>
                <th className="border border-black py-1 px-2 font-bold">Nom</th>
                <th className="border border-black py-1 px-2 font-bold">Matricule</th>
              </tr>
            </thead>
            <tbody>
              {rawGradesData.map((grade, idx) => (
                <tr key={idx} className={`hover:bg-gray-50 print:hover:bg-transparent ${grade.type === 'Moyenne' ? 'bg-gray-200 font-bold print:bg-gray-200' : ''}`}>
                  <td className="border border-black py-1 px-2">{grade.c1}</td>
                  <td className="border border-black py-1 px-2">{grade.c2}</td>
                  <td className="border border-black py-1 px-2">{grade.c3}</td>
                  <td className="border border-black py-1 px-2">{grade.c4}</td>
                  <td className="border border-black py-1 px-2">{grade.c5}</td>
                  <td className="border border-black py-1 px-2">{grade.type}</td>
                  <td className="border border-black py-1 px-2">{grade.subject}</td>
                  <td className="border border-black py-1 px-2">{grade.c8}</td>
                  <td className="border border-black py-1 px-2 text-right">{grade.grade}</td>
                  <td className="border border-black py-1 px-2">{grade.c10}</td>
                  <td className="border border-black py-1 px-2">{grade.c11}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
