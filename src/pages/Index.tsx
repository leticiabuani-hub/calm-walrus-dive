"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import CandidateTrail from '@/components/CandidateTrail';
import SmartMatcher from '@/components/SmartMatcher';
import CulturalFitTest from '@/components/CulturalFitTest';
import WhatsAppAgent from '@/components/WhatsAppAgent';
import GlobalScheduler from '@/components/GlobalScheduler';
import TechnicalCase from '@/components/TechnicalCase';
import GreenhouseStatus from '@/components/GreenhouseStatus';
import OfferDetails from '@/components/OfferDetails';
import { MapPin, Clock, ExternalLink, ChevronRight, Sparkles, Info, Users, Briefcase, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Demo Step Switcher */}
      <div className="bg-white border-b border-gray-100 py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Settings size={14} className="text-gray-400" />
          <span className="text-[10px] font-bold text-gray-400 uppercase mr-2">Demo Mode:</span>
          {[1, 2, 3, 4, 5, 6].map(step => (
            <button 
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${currentStep === step ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
            >
              {step}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Candidatura Ativa
                </div>
                <GreenhouseStatus />
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
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-full border-gray-200 gap-2">
                Ver Vaga <ExternalLink size={14} />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                Falar com Recrutador
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 ifood-shadow border border-gray-50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                Sua Jornada <span className="text-primary">Foodlover</span>
              </h2>
              <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 uppercase">
                <Info size={14} /> Clique nas etapas para ver detalhes
              </div>
            </div>
            <CandidateTrail />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Ações Necessárias</h2>
                <span className="px-3 py-1 bg-red-100 text-primary text-xs font-black rounded-full">
                  ETAPA {currentStep}: {
                    currentStep === 1 ? 'APLICAÇÃO' :
                    currentStep === 2 ? 'ENTREVISTA IA' :
                    currentStep === 3 ? 'RECRUTADOR' :
                    currentStep === 4 ? 'CASE TÉCNICO' :
                    currentStep === 5 ? 'GESTOR' : 'OFERTA'
                  }
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentStep === 1 && (
                  <div className="md:col-span-2 bg-white rounded-3xl p-10 text-center border border-gray-100">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                      <Info size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Aplicação Recebida!</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Seu currículo já está com nosso time. Enquanto isso, que tal completar seu perfil de Fit Cultural?
                    </p>
                  </div>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white ifood-shadow relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                          <Sparkles className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Entrevista com IA</h3>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                          Nossa IA quer te conhecer melhor. É um papo rápido de 15 min sobre suas experiências técnicas.
                        </p>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 font-bold text-lg">
                          Iniciar Entrevista Agora
                        </Button>
                      </div>
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>
                    <CulturalFitTest />
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                          <Users size={20} />
                        </div>
                        <h3 className="text-lg font-bold">Papo com Recrutador</h3>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-12 h-12 rounded-full" alt="Ricardo" />
                        <div>
                          <p className="font-bold text-sm">Ricardo Silva</p>
                          <p className="text-xs text-gray-500">Tech Talent Acquisition</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-6">Ricardo quer entender suas motivações e alinhar expectativas de carreira.</p>
                      <Button className="w-full bg-primary text-white rounded-full">Agendar Conversa</Button>
                    </div>
                    <GlobalScheduler />
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <TechnicalCase />
                    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50 flex flex-col justify-center items-center text-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
                        <Clock size={32} />
                      </div>
                      <h3 className="font-bold text-gray-400">Aguardando Revisão</h3>
                      <p className="text-xs text-gray-400 mt-2">O agendamento com o gestor será liberado após a aprovação do case.</p>
                    </div>
                  </>
                )}

                {currentStep === 5 && (
                  <>
                    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600">
                          <Briefcase size={20} />
                        </div>
                        <h3 className="text-lg font-bold">Entrevista com Gestor</h3>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ane" className="w-12 h-12 rounded-full" alt="Gestora" />
                        <div>
                          <p className="font-bold text-sm">Ana Oliveira</p>
                          <p className="text-xs text-gray-500">Engineering Manager</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-6">Foco em desafios de negócio, arquitetura e liderança técnica.</p>
                      <Button className="w-full bg-primary text-white rounded-full">Escolher Horário</Button>
                    </div>
                    <GlobalScheduler />
                  </>
                )}

                {currentStep === 6 && (
                  <div className="md:col-span-2">
                    <OfferDetails />
                  </div>
                )}
              </div>
            </section>

            {currentStep < 6 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Agendamento & Logística</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentStep !== 3 && currentStep !== 5 && <GlobalScheduler />}
                  <SmartMatcher />
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            <section className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black italic mb-4">Dicas para Brilhar</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-xs font-bold text-white/60 uppercase mb-1">Cultura</p>
                    <p className="text-sm font-medium">Estude nossos 12 princípios culturais. "Cultura de Dono" é essencial aqui.</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <p className="text-xs font-bold text-white/60 uppercase mb-1">Técnico</p>
                    <p className="text-sm font-medium">Esteja pronto para falar sobre trade-offs de arquitetura e escalabilidade.</p>
                  </div>
                </div>
                <Button className="w-full mt-8 bg-white text-primary hover:bg-white/90 rounded-full font-bold">
                  Central de Ajuda
                </Button>
              </div>
            </section>

            <section className="bg-white rounded-3xl p-6 ifood-shadow border border-gray-50">
              <h3 className="font-bold mb-4">Seu Recrutador</h3>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Recrutador" />
                </div>
                <div>
                  <p className="font-bold text-sm">Ricardo Silva</p>
                  <p className="text-xs text-gray-500">Tech Talent Acquisition</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                "Ricardo está acompanhando sua jornada. Qualquer dúvida sobre o processo, pode chamar no chat!"
              </p>
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