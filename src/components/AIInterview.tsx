"use client";

import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Play, Square, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIInterview = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const questions = [
    "Olá! Sou a IA do iFood. Para começar, conte-me sobre um desafio técnico complexo que você resolveu recentemente.",
    "Legal! E como você garante a qualidade e escalabilidade do código que produz?",
    "Excelente. Por fim, por que você quer ser um Foodlover e como você se vê impactando nosso ecossistema?"
  ];

  useEffect(() => {
    setIsSpeaking(true);
    const timer = setTimeout(() => setIsSpeaking(false), 4000);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setIsRecording(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-3xl p-8 text-white ifood-shadow relative overflow-hidden animate-in fade-in zoom-in-95">
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar Animado */}
        <div className="relative mb-8">
          <div className={`w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/20 transition-all duration-500 ${isSpeaking ? 'scale-110' : 'scale-100'}`}>
            <span className="text-white font-black text-6xl italic">i</span>
            {isSpeaking && (
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping"></div>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-gray-900"></div>
        </div>

        <div className="max-w-md mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} className="text-primary" /> IA iFood em tempo real
          </div>
          <h3 className="text-xl font-bold leading-relaxed min-h-[80px]">
            {questions[currentQuestion]}
          </h3>
        </div>

        <div className="w-full max-w-xs space-y-4">
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setIsRecording(!isRecording)}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-white/10 hover:bg-white/20'}`}
            >
              {isRecording ? <Square size={24} fill="currentColor" /> : <Mic size={24} />}
            </button>
          </div>
          
          <p className="text-xs text-gray-400 font-medium">
            {isRecording ? "Gravando sua resposta..." : "Clique no microfone para responder"}
          </p>

          {isRecording && (
            <Button 
              onClick={handleNext}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 font-bold"
            >
              {currentQuestion === questions.length - 1 ? "Finalizar Entrevista" : "Próxima Pergunta"}
            </Button>
          )}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default AIInterview;