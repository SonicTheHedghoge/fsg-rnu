export default function Navbar() {
  const navItems = [
    { title: "NOTRE Faculté", subtitle: "A Propos, Stat", color: "bg-[#00bcd4]" },
    { title: "NOTRE Formation", subtitle: "Licences Et Mastères", color: "bg-[#ff9800]" },
    { title: "NOS Départements", subtitle: "6 Départements", color: "bg-[#ff5722]" },
    { title: "NOS Coopération", subtitle: "Projets", color: "bg-[#e91e63]" },
    { title: "VIE Estudiantine", subtitle: "Clubs", color: "bg-[#4caf50]" },
    { title: "Incubateur", subtitle: "", color: "" },
    { title: "ECOLE Doctorale", subtitle: "Sci. Exac & Nat...", color: "bg-[#ffc107]" },
    { title: "NOS Nouveautés", subtitle: "Archives, Manifestations", color: "bg-[#9c27b0]" },
    { title: "CERTIFICATION Qualité", subtitle: "ISO 21001 / 9001", color: "bg-[#00bcd4]" },
    { title: "LABORATOIRES Recherche", subtitle: "Communs, Étudiants", color: "bg-[#009688]" },
  ];

  return (
    <nav className="bg-[#2f2f4f] text-white hidden md:block border-t border-gray-600 shadow-md relative z-20">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap text-xs font-medium justify-center">
          {navItems.map((item, idx) => {
            const [prefix, ...rest] = item.title.split(' ');
            const mainTitle = rest.join(' ');
            
            return (
              <li key={idx} className="text-center hover:bg-white/10 cursor-pointer transition-colors px-2 py-3 flex flex-col items-center justify-between min-w-[100px]">
                <div className="flex flex-col items-center">
                  <div className="text-gray-300 text-[10px] uppercase tracking-wider mb-0.5">{prefix}</div>
                  <div className="font-bold text-sm mb-1">{mainTitle}</div>
                </div>
                {item.subtitle ? (
                  <div className={`${item.color} text-white text-[9px] px-1.5 py-0.5 rounded-sm whitespace-nowrap`}>
                    {item.subtitle}
                  </div>
                ) : (
                  <div className="h-[18px]"></div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
