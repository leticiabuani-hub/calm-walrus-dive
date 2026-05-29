"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Send, User, Bot } from 'lucide-react';

const questions = [
  "Olá! Sou a IA do iFood. Para começar, conte-me sobre um desafio técnico complexo que você resolveu recentemente.",
  "Interessante! E como você lidou com os trade-offs de arquitetura nessa solução?",
  "Excelente. No iFood valorizamos muito a 'Atitude de Dono'. Pode me dar um exemplo de quando você agiu assim?",
  "Obrigado por compartilhar! Analisamos suas respostas e seu perfil. Em breve o recrutador entrará em contato."
];

const AIInterview = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([]);
  const [inputValue, setInputValue] = useState("");

  const startInterview = () => {
    setStarted(true);
    setMessages([{ role: 'ai', text: questions[0] }]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [...messages, { role: 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue("");

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: questions[currentQuestion + 1] }]);
        setCurrentQuestion(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50 overflow-hidden">
      {!started ? (
        <div className="text-center py-10">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center text-white shadow-xl shadow-red-100">
              <span className="text-5xl font-black italic">i</span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2">Entrevista com IA</h3>
          <p className="text-gray-500 mb-8 max-w-xs mx-auto">Uma conversa rápida para conhecermos melhor sua trajetória e fit com nossa cultura.</p>
          <Button 
            onClick={startInterview}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-7 text-lg font-bold ifood-button-shadow gap-2"
          >
            Iniciar Entrevista <Sparkles size={20} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col h-[500px]">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black italic">i</div>
            <div>
              <p className="text-sm font-black text-gray-900">IA iFood</p>
              <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online agora</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-medium ${
                  msg.role === 'ai' 
                    ? 'bg-gray-100 text-gray-800 rounded-tl-none' 
                    : 'bg-primary text-white rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua resposta..."
              className="flex-1 bg-gray-50 border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIInterview;