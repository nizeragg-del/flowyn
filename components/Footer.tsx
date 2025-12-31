import React, { useState } from 'react';
import { Instagram, MessageCircle, X, Sparkles } from 'lucide-react';
import { Music2 } from 'lucide-react'; // For TikTok icon if Lucide has it, or use custom icon below
import { analyzeProjectRequest } from '../services/geminiService';
import { images } from '../config/images';

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConsultant = async () => {
    if (!message.trim()) return;
    setIsLoading(true);
    setAiResponse('');
    const response = await analyzeProjectRequest(message);
    setAiResponse(response);
    setIsLoading(false);
  };

  return (
    <footer className="bg-[#0B0F19] pt-24 pb-12 text-white relative border-t border-gray-800" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
          Seu site precisa vender. <br />
          <span className="text-cyan-400 italic">A Flowyn faz isso acontecer.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Não deixe mais dinheiro na mesa com um site amador. Agende uma consultoria
          gratuita e descubra o potencial da sua marca.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5515997056218?text=Olá!%20Quero%20falar%20com%20um%20especialista%20da%20Flowyn%20e%20entender%20como%20vocês%20podem%20me%20ajudar."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 text-center"
          >
            Falar com um especialista
          </a>
          <a
            href="https://wa.me/5515997056218?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20meu%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto border border-gray-700 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:border-white transition-colors text-center"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center">
          <img
            src={images.logo}
            alt="Flowyn Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="text-gray-500 text-xs">
          © 2023 Flowyn Digital. Todos os direitos reservados.
        </div>

        <div className="flex gap-4">
          <a href="https://www.instagram.com/flowyn_agencia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="https://www.tiktok.com/@flowyn.agencia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tiktok"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>
      </div>

      {/* AI Consultant Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#161c2e] p-8 rounded-2xl w-full max-w-lg border border-gray-700 shadow-2xl relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-cyan-400" size={24} />
              <h3 className="text-xl font-bold text-white">Consultor IA Flowyn</h3>
            </div>

            <p className="text-gray-400 mb-6 text-sm">
              Descreva brevemente o seu negócio e o que você precisa. Nossa IA irá sugerir a melhor solução para você iniciar.
            </p>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ex: Tenho uma clínica odontológica e quero mais agendamentos..."
              className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-cyan-500 mb-4 h-32 resize-none"
            />

            {aiResponse && (
              <div className="bg-cyan-900/20 border border-cyan-500/30 p-4 rounded-lg mb-4">
                <p className="text-cyan-100 text-sm leading-relaxed">{aiResponse}</p>
              </div>
            )}

            <button
              onClick={handleConsultant}
              disabled={isLoading || !message}
              className={`w-full py-3 rounded-full font-bold text-sm tracking-wide transition-all ${isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-cyan-500 hover:bg-cyan-400 text-white'}`}
            >
              {isLoading ? 'Analisando...' : 'Receber Análise Gratuita'}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};