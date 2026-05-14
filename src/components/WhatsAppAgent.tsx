"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, CheckCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {showNotification && !isOpen && (
        <div className="bg-white p-4 rounded-2xl ifood-shadow border border-gray-100 max-w-[280px] animate-in slide-in-from-right-4 fade-in">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
              <MessageCircle size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Agente iFood</p>
              <p className="text-sm font-medium text-gray-700">
                Olá! Seu currículo está em análise. Tempo médio: <span className="text-primary font-bold">5 dias</span>.
              </p>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-gray-300 hover:text-gray-500">
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-3xl ifood-shadow border border-gray-100 flex flex-col overflow-hidden animate-in zoom-in-95 fade-in">
          <div className="bg-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Suporte ao Candidato</h4>
                <p className="text-[10px] opacity-80">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 bg-[#E5DDD5] p-4 overflow-y-auto space-y-4">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
              <p className="text-sm text-gray-800">
                Oi, Foodlover! 👋 Sou seu assistente virtual. Vou te avisar por aqui sempre que sua candidatura avançar no Greenhouse.
              </p>
              <p className="text-[10px] text-gray-400 text-right mt-1">14:20</p>
            </div>

            <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto shadow-sm">
              <p className="text-sm text-gray-800">
                Obrigado! Qual o próximo passo?
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[10px] text-gray-400">14:21</p>
                <CheckCheck size={12} className="text-blue-500" />
              </div>
            </div>

            <div className="bg-white p-3 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm">
              <p className="text-sm text-gray-800">
                Agora estamos analisando seu currículo. Você receberá um convite para a entrevista com IA em breve! 🚀
              </p>
              <p className="text-[10px] text-gray-400 text-right mt-1">14:22</p>
            </div>
          </div>

          <div className="p-3 bg-gray-50 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Digite sua dúvida..." 
              className="flex-1 bg-white border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
            />
            <button className="w-10 h-10 bg-[#075E54] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 hover:scale-110",
          isOpen ? "bg-gray-800 rotate-90" : "bg-[#25D366]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default WhatsAppAgent;