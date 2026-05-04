import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { chatWithAssistant } from '../lib/gemini';
import { cn } from '../lib/utils';

type Message = {
  id: string;
  role: 'user' | 'model';
  content: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: '¡Hola! Soy el asistente virtual de J3 Security. ¿En qué le puedo asesorar hoy acerca de ciberseguridad o nuestros equipos?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), role: 'user', content: userMessage }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Format history for Gemini API
      const history = newMessages.slice(1, -1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }));

      const responseText = await chatWithAssistant(history, userMessage);
      
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', content: responseText || '...' }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'model', content: 'Lo siento, hubo un error de conexión.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className={cn(
          "fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] active:scale-95 transition-all border border-[#00FF9D]/30",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-8 right-8 z-50 w-[90vw] sm:w-[350px] shadow-2xl bg-[#0A1628]/95 border border-blue-500/40 rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-blue-600/20 px-4 py-3 border-b border-blue-500/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00A3FF] to-[#00FF9D] p-[1px]">
                  <div className="w-full h-full rounded-full bg-[#0A1628] flex items-center justify-center text-xs">
                    🤖
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-none">J3 Intelligence Bot</h3>
                  <p className="text-[9px] text-[#00FF9D] uppercase tracking-widest mt-1">Online | Consultor IA</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "rounded-lg px-3 py-2 text-[11px] flex-1 border",
                    msg.role === 'user' 
                      ? "bg-[#00A3FF]/20 text-slate-100 border-[#00A3FF]/30" 
                      : "bg-slate-800/60 text-slate-300 border-slate-700 prose prose-invert prose-p:leading-relaxed prose-sm max-w-none"
                  )}>
                    {msg.role === 'user' ? (
                      msg.content
                    ) : (
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="bg-slate-800/60 rounded-lg px-3 py-2 flex flex-col justify-center border border-slate-700">
                    <Loader2 className="w-4 h-4 text-[#00A3FF] animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <div className="p-3 border-t border-blue-500/20 bg-transparent">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="bg-slate-900 rounded-lg flex items-center px-3 py-2 border border-slate-700"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  className="bg-transparent text-[11px] w-full outline-none text-slate-300 placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="text-blue-500 ml-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:text-[#00FF9D]"
                >
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
