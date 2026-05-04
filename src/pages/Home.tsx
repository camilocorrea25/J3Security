import { ArrowRight, ShieldAlert, Video, Wrench, Package, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section (Immersive Design) */}
      <section className="relative w-full min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-12 border-b border-blue-500/20 z-10">
        {/* Left Pane: Primary Service (Cybersecurity) */}
        <div className="col-span-1 lg:col-span-7 p-8 lg:p-12 xl:p-16 flex flex-col justify-center bg-transparent relative">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm -z-10 bg-gradient-to-r from-[#050B14] to-transparent"></div>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-[#00A3FF] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Prioridad Estratégica
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.9] mb-6 text-white tracking-tight">
            Asesoría Integral en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00FF9D]">Ciberseguridad</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Protegemos el ADN digital de su empresa en el Valle de Aburrá con estándares internacionales de defensa cibernética y soluciones tecnológicas integrales.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="flex items-start gap-3 p-4 bg-slate-800/40 border-l-2 border-blue-500 rounded-r-lg hover:bg-slate-800/60 transition-colors">
              <div className="text-[#00FF9D] mt-1">●</div>
              <div>
                <h3 className="font-bold text-white text-sm">Políticas & Manuales</h3>
                <p className="text-xs text-slate-500 mt-1">Gobierno de TI y cumplimiento normativo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-800/40 border-l-2 border-[#00FF9D] rounded-r-lg hover:bg-slate-800/60 transition-colors">
              <div className="text-blue-400 mt-1">●</div>
              <div>
                <h3 className="font-bold text-white text-sm">Mapa de Riesgos</h3>
                <p className="text-xs text-slate-500 mt-1">Detección proactiva de vulnerabilidades.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-800/40 border-l-2 border-blue-500 rounded-r-lg hover:bg-slate-800/60 transition-colors">
              <div className="text-[#00FF9D] mt-1">●</div>
              <div>
                <h3 className="font-bold text-white text-sm">Plan de Continuidad</h3>
                <p className="text-xs text-slate-500 mt-1">Recuperación ante desastres (BCP/DRP).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-800/40 border-l-2 border-[#00FF9D] rounded-r-lg hover:bg-slate-800/60 transition-colors">
              <div className="text-blue-400 mt-1">●</div>
              <div>
                <h3 className="font-bold text-white text-sm">Gestión de Riesgo</h3>
                <p className="text-xs text-slate-500 mt-1">Respuestas y mitigación de amenazas.</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 flex-col sm:flex-row w-full sm:w-auto">
            <a 
              href="#services"
              className="w-full sm:w-auto px-6 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-tighter shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2"
            >
              Explorar Soluciones
            </a>
            <Link 
              to="/catalogo"
              className="w-full sm:w-auto px-6 py-3 rounded bg-slate-800/80 border border-slate-700 hover:border-[#00FF9D] text-white font-bold text-sm uppercase tracking-tighter transition-all flex items-center justify-center gap-2 group"
            >
              Ver Catálogo Tech <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-[#00FF9D] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Right Pane: Tech Aesthetic */}
        <div className="col-span-1 lg:col-span-5 relative p-8 lg:p-12 min-h-[400px] lg:min-h-full flex items-center justify-center overflow-hidden bg-slate-900/20 backdrop-blur-sm">
          <div className="absolute inset-4 sm:inset-10 border border-blue-500/20 rounded-2xl flex items-center justify-center overflow-hidden bg-slate-900/50 shadow-2xl">
            {/* Carbon fiber pattern fallback using radial gradient if image fails, but using the provided url as requested in design */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            {/* Futuristic Visualization Overlay */}
            <div className="relative flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-8">
                <div className="w-56 sm:w-72 h-56 sm:h-72 rounded-full border-4 border-dashed border-blue-500/40 animate-[spin_20s_linear_infinite] absolute"></div>
                <div className="w-52 sm:w-64 h-52 sm:h-64 rounded-full border border-[#00FF9D]/30 animate-[spin_15s_linear_infinite_reverse] absolute"></div>
                <div className="z-10 bg-[#050B14]/60 backdrop-blur-md rounded-full w-48 sm:w-56 h-48 sm:h-56 relative border border-blue-500/30 overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.2)]">
                   <img src="https://iuujvprquvxheydynwwr.supabase.co/storage/v1/object/public/Imagenes/1777578223940-019ddfea-5433-7ceb-bab5-3851508caf8c.png" alt="J3 Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="z-10 bg-[#050B14]/80 px-6 py-2 rounded-full border border-blue-500/30 backdrop-blur-md flex flex-col items-center shadow-lg relative">
                <div className="text-[10px] uppercase tracking-widest font-bold opacity-90 text-slate-100">Medellín City</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#00FF9D] mt-0.5">Secured</div>
              </div>
            </div>
            
            {/* Contact pill */}
            <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 px-4 sm:px-8 flex justify-between items-center text-[10px] font-mono text-blue-400/60 uppercase">
               <span>@j3security</span>
               <span className="hidden sm:inline">j3seguridad@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Servicios Estratégicos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Cybersecurity (Priority) */}
            <div className="group relative bg-slate-900 border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all shadow-xl overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <ShieldAlert className="w-32 h-32 text-blue-500" />
               </div>
               <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30 overflow-hidden relative">
                 <div className="absolute inset-0 bg-blue-400/20 blur-xl" />
                 <ShieldAlert className="w-7 h-7 text-blue-400 relative z-10" />
               </div>
               <h3 className="text-2xl font-semibold text-white mb-4">Asesoría en Riesgo y Ciberseguridad</h3>
               <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                 Protegemos su infraestructura de ataques y brechas de información mediante la estructuración de la seguridad corporativa.
               </p>
               <ul className="space-y-3">
                 {[
                   'Creación de políticas de seguridad I.T.',
                   'Elaboración de manuales de usuario',
                   'Diseño de mapas de riesgos cibernéticos',
                   'Planes de Continuidad de Negocio (BCP)'
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                     <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Service 2: Cameras */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-900/50 transition-all">
               <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-blue-900/50">
                 <Video className="w-7 h-7 text-slate-300 group-hover:text-blue-400 transition-colors" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-4">Montaje de Cámaras de Seguridad</h3>
               <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                 Implementación de circuitos cerrados de televisión (CCTV) con tecnología de punta para la vigilancia local y remota (Hikvision, Wi-Fi).
               </p>
            </div>

            {/* Service 3: Maintenance */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-900/50 transition-all">
               <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-blue-900/50">
                 <Wrench className="w-7 h-7 text-slate-300 group-hover:text-blue-400 transition-colors" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-4">Mantenimiento de Equipos</h3>
               <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                 Soporte técnico estructurado y mantenimiento preventivo/correctivo para prolongar la vida útil de los equipos de cómputo en su empresa.
               </p>
            </div>

            {/* Service 4: Sales */}
            <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-900/50 transition-all flex flex-col">
               <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-blue-900/50">
                 <Package className="w-7 h-7 text-slate-300 group-hover:text-blue-400 transition-colors" />
               </div>
               <h3 className="text-xl font-semibold text-white mb-4">Venta de Tecnología y Seguridad</h3>
               <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-1">
                 Suministro de equipos de alta gama, componentes y repuestos a medida para actualizar el entorno operativo de su equipo de trabajo.
               </p>
               <Link 
                 to="/catalogo"
                 className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors text-sm"
               >
                 Ver Catálogo de Dispositivos <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Promise Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Confianza y Respuesta Inmediata</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Entendemos que el tiempo inactivo y las fallas de seguridad son críticos. Nuestra misión en <span className="font-semibold text-blue-400">J3 Security</span> es garantizar que sus sistemas y su información estén operativos, monitoreados y protegidos 24/7.
          </p>
          <a
            href="mailto:j3seguridad@gmail.com"
            className="inline-flex px-6 py-3 rounded-md bg-transparent border border-blue-500 hover:bg-blue-900/30 text-blue-400 font-medium transition-colors"
          >
            Solicitar una Asesoría
          </a>
        </div>
      </section>
    </div>
  );
}
