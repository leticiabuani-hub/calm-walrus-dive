"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, Video, Sparkles, MessageSquare } from 'lucide-react';

const AIInterview = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpeaking(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white ifood-shadow relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className={`w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 transition-all duration-500 ${isSpeaking ? 'scale-110' : 'scale-100'}`}>
            <span className="text-white font-black text-6xl italic">i</span>
          </div>
          {isSpeaking && (
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-ping"></div>
          )}
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900"></div>
        </div>

        <div className="space-y-2 mb-10">
          <h3 className="text-2xl font-black flex items-center justify-center gap-2">
            Olá! Eu sou a IA do iFood <Sparkles className="text-primary" size={24} />
          </h3>
          <p className="text-gray-400 max-w-xs mx-auto">Estou pronta para te conhecer melhor. Podemos começar?</p>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold gap-3">
            <Mic size={20} /> Iniciar por Áudio
          </Button>
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full py-7 text-lg font-bold gap-3">
            <MessageSquare size={20} /> Iniciar por Chat
          </Button>
        </div>

        <div className="mt-10 flex items-center gap-6 text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Mic Pronto</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Câmera OK</span>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default AIInterview;