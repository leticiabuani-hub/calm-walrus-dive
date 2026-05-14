"use client";

import React from 'react';
import Header from '@/components/Header';
import CandidateTrail from '@/components/CandidateTrail';
import SmartMatcher from '@/components/SmartMatcher';
import CulturalFitTest from '@/components/CulturalFitTest';
import WhatsAppAgent from '@/components/WhatsAppAgent';
import { Calendar, MapPin, Clock, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Candidatura Ativa
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Engenheiro de Software Sênior
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> Remoto (Brasil)</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> Aplicado há 2 dias</span>
                <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold uppercase">ID: #88291</span>
              </div>
            </div>
            <Button variant="outline" className="rounded-full border-gray-200 gap-2">
              Ver Detalhes da Vaga <ExternalLink size={14} />
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 ifood-shadow border border-gray-50">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              Sua Jornada <span className="text-primary">Foodlover</span>
            </h2>
            <CandidateTrail />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Actions */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Próximos Passos</h2>
                <span className="text-sm text-primary font-bold">2 pendências</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SmartMatcher />
                <CulturalFitTest />
              </div>
            </section>

            <section className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Agendamento Global</h3>
                    <p className="text-sm text-gray-500">Sincronizado com Greenhouse</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Nossa agenda está conectada diretamente com os gestores. Escolha o melhor horário e nós cuidamos do fuso horário automaticamente.
                  </p>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="text-center px-4 border-r border-gray-200">
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Seu Fuso</p>
                      <p className="font-bold text-gray-700">Miami (EST)</p>
                    </div>
                    <div className="text-center px-4">
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Gestor</p>
                      <p className="font-bold text-gray-700">São Paulo (BRT)</p>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto bg-gray-900 hover:bg-black text-white rounded-full px-8">
                    Abrir Calendário
                  </Button>
                </div>
                <div className="w-full md:w-64 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                  <div className="text-center p-4">
                    <Calendar size={32} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-xs text-gray-400 font-medium">Selecione uma etapa para liberar o agendamento</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="space-y-8">
            <section className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black italic mb-4">Por que o iFood?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Não somos apenas um app de delivery. Somos uma empresa de tecnologia que alimenta o futuro da América Latina.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Cultura de Dono', 'Inovação Constante', 'Impacto Real'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-bold">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <ChevronRight size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-full font-bold">
                  Conheça nossa Cultura
                </Button>
              </div>
              {/* Decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute top-10 -right-5 w-20 h-20 bg-white/5 rounded-full"></div>
            </section>

            <section className="bg-white rounded-3xl p-6 ifood-shadow border border-gray-50">
              <h3 className="font-bold mb-4">Dicas do Recrutador</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border-l-4 border-primary">
                  <p className="text-xs font-bold text-primary uppercase mb-1">Entrevista com IA</p>
                  <p className="text-sm text-gray-700">Foque em exemplos práticos de como você resolveu problemas complexos.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Case Técnico</p>
                  <p className="text-sm text-gray-700">Valorizamos código limpo e escalabilidade. Pense grande!</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <WhatsAppAgent />
      <MadeWithDyad />
    </div>
  );
};

export default Index;