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
  const [activeSemester, setActiveSemester] = useState<'S1' | 'S2'>('S2');

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

  const s1Data = [
    { code: 'F1A', matId: '6013241', subject: 'ANALYSE', grade: '15.0' },
    { code: 'F2A', matId: '6014522', subject: 'ALGEBRE', grade: '14.5' },
    { code: 'F3A', matId: '6011983', subject: 'PROGRAMMATION', grade: '15.0' },
    { code: 'F4A', matId: '6018744', subject: 'ANGLAIS', grade: '14.0' },
    { code: 'F5A', matId: '6010095', subject: 'TECHNIQUES DE COMMUNICATION', grade: '12.0' },
    { code: 'F6A', matId: '6015566', subject: 'MULTIMEDIA', grade: '10.25' },
    { code: 'F7A', matId: '6013217', subject: 'ARCHITECTURE', grade: '8.5' },
    { code: 'F8A', matId: '6014428', subject: 'LOGIQUE FORMELLE', grade: '9.0' },
    { code: 'F9A', matId: '6019919', subject: 'SYSTEME D’EXPLOITATION 1', grade: '8.0' },
    { code: 'F10A', matId: '6017720', subject: 'SYSTEMES LOGIQUES ET ARCHITECTURE DES ORDINATEURS', grade: '8.85' },
  ];

  const s2Data = [
    { code: 'F1B', matId: '6024151', subject: 'ANALYSE', grade: '16.0' },
    { code: 'F2B', matId: '6027842', subject: 'ALGEBRE', grade: '15.5' },
    { code: 'F3B', matId: '6021193', subject: 'PROGRAMMATION PYTHON', grade: '17.5' },
    { code: 'F4B', matId: '6029984', subject: 'PROGRAMMATION C', grade: '10.5' },
    { code: 'F5B', matId: '6023345', subject: 'ALGORITHMIQUE, STRUCTURE DE DONNEES ET COMPLEXITE 2', grade: '9.5' },
    { code: 'F6B', matId: '6028816', subject: 'FONDEMENTS DES BASES DE DONNEES', grade: '8.5' },
    { code: 'F7B', matId: '6022277', subject: 'ATELIER DE PROGRAMMATION 2 ET SYSTEME', grade: '8.5' },
    { code: 'F8B', matId: '6025538', subject: 'SYSTEME D\'EXPLOITATION 2', grade: '6.4' },
    { code: 'F9B', matId: '6026619', subject: 'FRANCAIS', grade: '0.0 (Abs)' },
    { code: 'F10B', matId: '6027720', subject: 'ANGLAIS', grade: '0.0 (Abs)' },
    { code: 'F11B', matId: '6029931', subject: 'CERTIFICATION C2I', grade: '0.0 (Abs)' },
  ];

  const generateRows = (data: typeof s1Data) => {
    const rows: any[] = [];
    data.forEach(d => {
      // Create a deterministic but different epreuve ID
      const fakeEpreuveId = (Number(d.matId) * 3 + 12345).toString();
      
      rows.push({
        c1: 'e1', c2: d.code, c3: d.matId, c4: fakeEpreuveId, c5: '1',
        type: 'Examen', subject: d.subject, c8: 'LGLSI B TD2 TP2',
        grade: d.grade, c10: 'DAGAHRI ADEM', c11: '13521112'
      });
      rows.push({
        c1: 'e1', c2: d.code, c3: d.matId, c4: fakeEpreuveId, c5: '1',
        type: 'Moyenne', subject: d.subject, c8: 'LGLSI B TD2 TP2',
        grade: d.grade === '0.0 (Abs)' ? '0.00' : Number(d.grade).toFixed(2),
        c10: 'DAGAHRI ADEM', c11: '13521112'
      });
    });
    return rows;
  };

  const activeGradesData = generateRows(activeSemester === 'S1' ? s1Data : s2Data);

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
            <button onClick={handleClose} className="text-black hover:text-gray-600 p-1">
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-6 flex gap-4 print:hidden">
            <button 
              onClick={() => setActiveSemester('S1')}
              className={`px-4 py-2 text-sm font-bold border-2 border-black transition-colors ${activeSemester === 'S1' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              Semestre 1
            </button>
            <button 
              onClick={() => setActiveSemester('S2')}
              className={`px-4 py-2 text-sm font-bold border-2 border-black transition-colors ${activeSemester === 'S2' ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              Semestre 2
            </button>
            <button 
              onClick={() => window.print()} 
              className="ml-auto flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              <Printer size={16} />
              Imprimer {activeSemester} (PDF)
            </button>
          </div>
          
          <div className="mb-6 print:mt-0">
            {/* Official Logo */}
            <div className="flex justify-center mb-6">
              <img src="https://i.imgur.com/zoCEhek.jpeg" alt="Logo FSG" className="h-28 object-contain grayscale" />
            </div>

            <h2 className="text-xl font-bold uppercase text-black text-center mb-4">
              Relevé de notes - {activeSemester === 'S1' ? 'Semestre 1' : 'Semestre 2'}<br/>
              <span className="text-lg">CD-NETU SPECIALITE L EN SCIENCES INFORMATIQUES</span>
            </h2>
            
            <div className="flex flex-col mt-4 border-b-2 border-black pb-4">
              <div className="text-sm text-black font-medium mb-3">
                Étudiant: DAGAHRI ADEM | Matricule: 13521112 | Régime: Dérogataire (Candidat Libre)
              </div>
              <div className="bg-gray-100 p-3 border border-black text-sm">
                {activeSemester === 'S1' ? (
                  <div className="font-bold">Moyenne S1: 11.51</div>
                ) : (
                  <div className="grid grid-cols-4 gap-4">
                    <div><span className="font-bold">Moyenne S1:</span> 11.51</div>
                    <div><span className="font-bold">Moyenne S2:</span> 8.40</div>
                    <div><span className="font-bold">Moyenne Annuelle:</span> 9.95</div>
                    <div><span className="font-bold">Résultat:</span> <span className="text-red-700 font-bold">Refusé</span></div>
                  </div>
                )}
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
              {activeGradesData.map((grade, idx) => (
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
