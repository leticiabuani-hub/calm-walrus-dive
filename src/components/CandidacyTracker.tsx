"use client";

import React, { useState } from 'react';
import { Bell, Clock, CheckCircle2, ArrowRight, Calendar, Info } from 'lucide-react';

const CandidacyTracker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const updates = [
    { id: 1, title: "Currículo em análise", date: "28/05", status: "done", desc: "Seu perfil está sendo avaliado pelo time de recrutamento." },
    { id: 2, title: "Fit Cultural", date: "Hoje", status: "current", desc: "Próxima etapa: Teste de valores e entrevista com IA." },
    { id: 3, title: "Entrevista Técnica", date: "Pendente", status: "upcoming", desc: "Aguardando conclusão das etapas anteriores." },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-[2rem] ifood-shadow border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4">
          <div className="bg-primary p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black text-lg">Minha Jornada</h3>
              <Bell size={20} />
            </div>
            <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm border border-white/10">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Etapa Atual</p>
              <p className="text-sm font-bold">Fit Cultural + IA</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <Clock size={16} className="text-primary" />
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase">Tempo médio nesta fase</p>
                <p className="text-xs font-bold text-gray-900">5 dias úteis</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Últimas Atualizações</p>
              {updates.map((update) => (
                <div key={update.id} className="flex gap-3 relative">
                  <div className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
                      update.status === 'done' ? 'bg-green-500 border-green-100 text-white' :
                      update.status === 'current' ? 'bg-primary border-red-100 text-white' :
                      'bg-white border-gray-100 text-gray-300'
                    }`}>
                      {update.status === 'done' ? <CheckCircle2 size={12} /> : <span className="text-[8px] font-black">{update.id}</span>}
                    </div>
                    {update.id !== updates.length && <div className="w-0.5 h-full bg-gray-100 my-1"></div>}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`text-xs font-black ${update.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{update.title}</p>
                      <span className="text-[10px] font-bold text-gray-400">{update.date}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{update.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-xs font-bold text-gray-600 flex items-center justify-center gap-2 transition-colors">
              Ver detalhes completos <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 ${
          isOpen ? 'bg-gray-900 text-white' : 'bg-primary text-white ifood-button-shadow'
        }`}
      >
        {isOpen ? (
          <span className="text-2xl font-black">×</span>
        ) : (
          <div className="relative">
            <Bell size={28} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-primary flex items-center justify-center text-[8px] font-black">1</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default CandidacyTracker;