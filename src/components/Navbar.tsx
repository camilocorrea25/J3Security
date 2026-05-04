import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo Top 20', path: '/catalogo' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full h-16 border-b border-blue-500/20 bg-slate-900/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,163,255,0.4)] bg-[#0A1628]/80 p-1 border border-blue-500/30">
              <img src="https://iuujvprquvxheydynwwr.supabase.co/storage/v1/object/public/Imagenes/1777578223940-019ddfea-5433-7ceb-bab5-3851508caf8c.png" alt="J3 Security Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight text-white leading-none">J3 SEGURIDAD</span>
              <span className="text-[10px] text-blue-400 font-mono tracking-widest uppercase">Tech & Cyber Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "transition-colors",
                    isActive 
                      ? "text-[#00FF9D] border-b-2 border-[#00FF9D] pb-1" 
                      : "text-slate-200 hover:text-blue-400"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="flex items-center gap-4 ml-4">
              <div className="text-right hidden xl:block leading-tight">
                <p className="text-[10px] text-slate-400 opacity-80 uppercase">Medellín, Colombia</p>
                <p className="text-xs font-mono text-slate-200">+57 300 773 6829</p>
              </div>
              <a 
                href="https://wa.me/573007736829" 
                target="_blank" 
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded font-bold text-xs uppercase tracking-tighter shadow-lg shadow-blue-900/20 text-white transition-colors"
                style={{ letterSpacing: "-0.05em" }}
              >
                Contactar Asesor
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-blue-400 bg-slate-900 p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-blue-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path 
                    ? "bg-blue-900/50 text-blue-400" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-blue-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/573007736829"
              target="_blank"
              rel="noreferrer"
              className="block mt-4 px-3 py-2 rounded-md text-base font-medium bg-blue-800 text-white text-center"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
