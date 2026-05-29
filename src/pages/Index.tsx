"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import CandidateTrail from '@/components/CandidateTrail';
import SmartMatcher from '@/components/SmartMatcher';
import CulturalFitTest from '@/components/CulturalFitTest';
import AIInterview from '@/components/AIInterview';
import WhatsAppAgent from '@/components/WhatsAppAgent';
import GlobalScheduler from '@/components/GlobalScheduler';
import TechnicalCase from '@/components/TechnicalCase';
import GreenhouseStatus from '@/components/GreenhouseStatus';
import OfferDetails from '@/components/OfferDetails';
import JobBoard from '@/components/JobBoard';
import { MapPin, Clock, ExternalLink, Sparkles, Info, Users, Briefcase, Settings, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [fitCompleted, setFitCompleted] = useState(false);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
    if (step !== 2) setFitCompleted(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFB]">
      <Header />
      
      <div className="bg-white border-b border-gray-100 py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Settings size={14} className="text-gray-400" />
          <span className="text-[10px] font-bold text-gray-400 uppercase mr-2">Demo Mode:</span>
          {[1, 2, 3, 4, 5, 6].map(step => (
            <button 
              key={step}
              onClick={() => handleStepChange(step)}
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
                  {currentStep === 1 ? 'Explorando Vagas' : 'Candidatura Ativa'}
                </div>
                {currentStep > 1 && <GreenhouseStatus />}
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {currentStep === 1 ? 'Encontre seu lugar no iFood' : 'Engenheiro de Software Sênior'}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> Remoto (Brasil)</span>
                {currentStep > 1 && <span className="flex items-center gap-1.5"><Clock size={16} /> Aplicado há 2 dias</span>}
                <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-black uppercase tracking-widest">ID: #88291</span>
              </div>
            </div>
            {currentStep > 1 && (
              <div className="flex gap-3">
                <Button variant="outline" className="rounded-full border-gray-200 gap-2 font-bold">
                  Ver Vaga <ExternalLink size={14} />
                </Button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 ifood-shadow border border-gray-50">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                Sua Jornada <span className="text-primary italic">Foodlover</span>
              </h2>
              <div className="hidden md:flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <Info size={14} /> Clique nas etapas para navegar
              </div>
            </div>
            <CandidateTrail currentStep={currentStep} onStepClick={handleStepChange} />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900">
                  {currentStep === 1 ? 'Vagas Abertas' : 'Ações Necessárias'}
                </h2>
                <span className="px-4 py-1.5 bg-primary/5 text-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/10">
                  {
                    currentStep === 1 ? 'Aplicação' :
                    currentStep === 2 ? 'Fit Cultural + IA' :
                    currentStep === 3 ? 'Entrevista com Recrutador' :
                    currentStep === 4 ? 'Técnica' :
                    currentStep === 5 ? 'Gestor' : 'Oferta'
                  }
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {currentStep === 1 && <JobBoard />}

                {currentStep === 2 && (
                  <div className="grid grid-cols-1 gap-6">
                    {!fitCompleted ? (
                      <CulturalFitTest onComplete={() => setFitCompleted(true)} />
                    ) : (
                      <AIInterview />
                    )}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50 animate-in fade-in slide-in-from-left-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                          <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Papo com Recrutador</h3>
                      </div>
                      <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-14 h-14 rounded-full border-2 border-white" alt="Ricardo" />
                        <div>
                          <p className="font-bold text-gray-900">Ricardo Silva</p>
                          <p className="text-xs text-gray-500 font-medium">Tech Talent Acquisition</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-8 leading-relaxed">Ricardo quer entender suas motivações, alinhar expectativas de carreira e tirar suas dúvidas sobre o iFood.</p>
                      <Button className="w-full bg-primary text-white rounded-full py-6 font-bold">Agendar Conversa</Button>
                    </div>
                    <GlobalScheduler />
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-in fade-in slide-in-from-left-4">
                      <TechnicalCase />
                    </div>
                    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50 flex flex-col justify-center items-center text-center animate-in fade-in slide-in-from-right-4">
                      <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                        <AlertCircle size={32} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Processo Flexível</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Este processo varia conforme a vaga — pode ser entrevista técnica, case ou outro formato. Fique atento ao seu e-mail!
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50 animate-in fade-in slide-in-from-left-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                          <Briefcase size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Entrevista com Gestor</h3>
                      </div>
                      <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ane" className="w-14 h-14 rounded-full border-2 border-white" alt="Gestora" />
                        <div>
                          <p className="font-bold text-gray-900">Ana Oliveira</p>
                          <p className="text-xs text-gray-500 font-medium">Engineering Manager</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-8 leading-relaxed">Foco em desafios de negócio, arquitetura e liderança técnica. É o momento de aprofundar no dia a dia do time.</p>
                      <Button className="w-full bg-primary text-white rounded-full py-6 font-bold">Escolher Horário</Button>
                    </div>
                    <GlobalScheduler />
                  </div>
                )}

                {currentStep === 6 && (
                  <div className="animate-in zoom-in-95 duration-500">
                    <OfferDetails />
                  </div>
                )}
              </div>
            </section>

            {currentStep > 1 && currentStep < 6 && (
              <section className="animate-in fade-in duration-700">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-gray-900">Logística</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentStep !== 3 && currentStep !== 5 && <GlobalScheduler />}
                  <SmartMatcher />
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            <section className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-red-100">
              <div className="relative z-10">
                <h3 className="text-3xl font-black italic mb-6">Dicas para Brilhar</h3>
                <div className="space-y-6">
                  <div className="p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                    <p className="text-[10px] font-black text-white/60 uppercase mb-2 tracking-widest">Cultura</p>
                    <p className="text-sm font-medium leading-relaxed">Estude nossos 12 princípios culturais. "Cultura de Dono" e "Foco no Cliente" são essenciais aqui.</p>
                  </div>
                  <div className="p-5 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                    <p className="text-[10px] font-black text-white/60 uppercase mb-2 tracking-widest">Técnico</p>
                    <p className="text-sm font-medium leading-relaxed">Esteja pronto para falar sobre trade-offs de arquitetura e como você resolve problemas complexos.</p>
                  </div>
                </div>
                <Button className="w-full mt-10 bg-white text-primary hover:bg-white/90 rounded-full py-7 font-black text-lg">
                  Central de Ajuda
                </Button>
              </div>
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </section>

            <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50">
              <h3 className="font-bold text-gray-900 mb-4">Próximos Passos</h3>
              <div className="space-y-4">
                {[
                  { step: 1, text: "Completar perfil", done: true },
                  { step: 2, text: "Teste de Fit Cultural", done: currentStep > 2 },
                  { step: 3, text: "Entrevista IA", done: currentStep > 2 && fitCompleted },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.done ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {item.done ? <CheckCircle2 size={12} /> : <span className="text-[10px] font-bold">{item.step}</span>}
                    </div>
                    <span className={`text-sm font-medium ${item.done ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppAgent />
      <MadeWithDyad />
    </div>
  );
};

export default Index;