import { CATALOG_ITEMS } from '../data/catalog';
import { Search } from 'lucide-react';

export default function Catalog() {
  return (
    <div className="bg-transparent pt-10 pb-24 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Container */}
      <div className="mb-12">
        <div className="bg-slate-900/60 backdrop-blur-md border border-blue-500/20 rounded-lg p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Search className="w-32 h-32 text-blue-500" />
          </div>
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-[#00A3FF] text-[10px] font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Suministros Corporativos & Seguridad Electrónica
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Catálogo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00FF9D]">Top 20</span>
            </h1>
            <p className="text-slate-400 leading-relaxed sm:text-lg">
              Explore los dispositivos más solicitados y vendidos. Trabajamos con referencias corporativas y modelos genéricos de alta calidad para cubrir cualquier requerimiento de licenciamiento y hardware.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto relative z-10">
            <a
              href="https://wa.me/573007736829?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20algunos%20dispositivos%20del%20cat%C3%A1logo."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-tighter rounded-md transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Cotizar Referencias
            </a>
          </div>
        </div>
      </div>

      {/* Grid Container */}
      <div>
        <div className="flex justify-between items-center mb-6 border-b border-blue-500/30 pb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 flex items-center gap-2">
            <span className="w-1 h-1 bg-blue-400 rounded-full"></span> 20 Dispositivos Más Vendidos
          </h2>
          <span className="text-[10px] text-slate-500 italic uppercase hidden sm:block">Tech & Cyber Intelligence</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATALOG_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-[#00FF9D]/50 rounded-lg overflow-hidden transition-all group flex flex-col grayscale hover:grayscale-0"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#050B14]">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col border-t border-slate-800">
                <h3 className="text-white font-bold tracking-tight mb-2 text-sm uppercase">{item.name}</h3>
                <p className="text-slate-400 text-[11px] leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-6">
                  <a
                    href={`https://wa.me/573007736829?text=Hola,%20me%20interesa%20saber%20el%20precio%20de:%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full py-2 text-center text-[10px] font-bold uppercase tracking-widest text-[#00A3FF] bg-slate-800/80 border border-blue-500/30 rounded hover:bg-blue-600 hover:text-white hover:border-transparent transition-all"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
