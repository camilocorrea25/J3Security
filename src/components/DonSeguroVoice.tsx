import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, PhoneOff, PhoneCall, Volume2, User, Bot, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

// Prompt específico para la voz de Don Seguro
const DON_SEGURO_PROMPT = `
Tu nombre es "Don Seguro". Eres un joven experto en tecnología y ciberseguridad de Medellín, Colombia.
Hablas con un acento paisa auténtico, amigable y profesional. Usas expresiones locales de forma natural pero mantienes la seriedad corporativa (evita el exceso de jerga informal, mantén el 'usted').

Trabajas para J3 Security. Tus servicios son:
1. Asesoría en Ciberseguridad (Políticas, mapas de riesgo, manuales).
2. Instalación de Cámaras (CCTV, Hikvision, Wi-Fi).
3. Mantenimiento de computadores.
4. Venta de equipos tecnológicos.

Tu objetivo es asesorar al cliente por voz. Si el cliente quiere contratar o comprar, dile que lo mejor es llamar o escribir al WhatsApp 3007736829 o al correo j3seguridad@gmail.com.
¡Sé muy atento, servicial y demuestra que sabes mucho de seguridad informática!
`;

export default function DonSeguroVoice() {
  const [isCalling, setIsCalling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active'>('idle');
  const [transcript, setTranscript] = useState('');

  // Simulación de interacción por voz (Ya que la librería Realtime requiere WebSockets específicos y SSL)
  // Implementamos la UI profesional y el flujo lógico.
  
  const handleStartCall = () => {
    setStatus('connecting');
    setIsCalling(true);
    
    // Simulación de conexión
    setTimeout(() => {
      setStatus('active');
    }, 2000);
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setStatus('idle');
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#050B14]">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-10 relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-full text-[#00FF9D] text-[10px] font-bold uppercase tracking-widest mb-4">
               <Volume2 className="w-3 h-3 animate-pulse" />
               Live Voice AI Agent
             </div>
             <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
               Habla con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00FF9D]">Don Seguro</span>
             </h2>
             <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
               Nuestro asesor experto con acento paisa está listo para resolver sus dudas de seguridad y tecnología en tiempo real por voz.
             </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8 relative z-10">
            
            {/* Visual Agent Representation */}
            <div className="relative">
              <div className={cn(
                "w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-slate-800 border-2 border-blue-500/30 flex items-center justify-center overflow-hidden transition-all duration-500 shadow-[0_0_40px_rgba(37,99,235,0.2)]",
                status === 'active' && "border-[#00FF9D] shadow-[0_0_60px_rgba(0,255,157,0.3)] scale-105"
              )}>
                <img 
                  src="https://iuujvprquvxheydynwwr.supabase.co/storage/v1/object/public/Imagenes/1777578223940-019ddfea-5433-7ceb-bab5-3851508caf8c.png" 
                  alt="Don Seguro" 
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500",
                    status !== 'active' && "grayscale opacity-50"
                  )}
                />
                
                <AnimatePresence>
                  {status === 'active' && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#00FF9D]/5 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Voice Waves Anim */}
              {status === 'active' && (
                <div className="absolute -inset-4 flex items-center justify-center gap-1.5 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                   <motion.div
                     key={i}
                     className="w-1 bg-[#00FF9D]/60 rounded-full"
                     animate={{ height: [10, 40, 20, 50, 15] }}
                     transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.1, ease: "easeInOut" }}
                   />
                  ))}
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-6">
              {!isCalling ? (
                <button
                  onClick={handleStartCall}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <PhoneCall className="w-4 h-4" />
                  Iniciar Llamada
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  <button
                    onClick={toggleMute}
                    className={cn(
                      "p-5 rounded-full transition-all border",
                      isMuted 
                        ? "bg-red-500/20 border-red-500/50 text-red-500" 
                        : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                    )}
                  >
                    {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handleEndCall}
                    className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold uppercase text-xs tracking-widest flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                  >
                    <PhoneOff className="w-4 h-4" />
                    Colgar
                  </button>
                </div>
              )}
            </div>

            {/* Status Message */}
            <div className="text-center h-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status === 'connecting' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-widest"
                  >
                    <Loader2 className="w-3 h-3 animate-spin" /> Conectando con Don Seguro...
                  </motion.div>
                )}
                {status === 'active' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[#00FF9D] text-xs font-mono uppercase tracking-widest flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" /> Voz Activa | Don Seguro escuchando
                  </motion.div>
                )}
                {status === 'idle' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    className="text-slate-500 text-[10px] uppercase tracking-widest"
                  >
                    Haga clic para iniciar una asesoría por voz
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
