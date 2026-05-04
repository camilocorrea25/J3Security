import { Phone, Mail, MapPin, Instagram, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050B14]/80 backdrop-blur-md border-t border-blue-500/30 text-slate-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white mb-2">
              <div className="w-8 h-8 rounded shrink-0 overflow-hidden shadow-[0_0_10px_rgba(0,163,255,0.4)] bg-[#0A1628]/80 p-0.5 border border-blue-500/30">
                <img src="https://iuujvprquvxheydynwwr.supabase.co/storage/v1/object/public/Imagenes/1777578223940-019ddfea-5433-7ceb-bab5-3851508caf8c.png" alt="J3 Security Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">J3 SEGURIDAD</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Brindamos soluciones y tranquilidad corporativa a través de estrategias de ciberseguridad, circuitos de CCTV y soporte tecnológico especializado en el Valle de Aburrá.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#00FF9D] font-bold tracking-widest uppercase text-[10px]">Contacto Directo</h4>
            <ul className="space-y-3 text-xs font-mono">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00A3FF]" />
                <a href="https://wa.me/573007736829" className="hover:text-white transition-colors">
                  +57 300 773 6829
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00A3FF]" />
                <a href="mailto:j3seguridad@gmail.com" className="hover:text-white transition-colors">
                  j3seguridad@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#00A3FF]" />
                <span>Medellín, Colombia</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[#00FF9D] font-bold tracking-widest uppercase text-[10px]">Asistencia</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="w-4 h-4 bg-slate-800 rounded flex items-center justify-center border border-slate-700">
                  <Instagram className="w-3 h-3 text-[#00A3FF]" />
                </div>
                <span className="text-slate-300">@j3security</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-500/20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-60">
          <p>© {new Date().getFullYear()} J3 Security. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0 text-[#00A3FF]">Tech & Cyber Intelligence</p>
        </div>
      </div>
    </footer>
  );
}
