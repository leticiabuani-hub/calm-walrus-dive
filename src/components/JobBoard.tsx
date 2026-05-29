"use client";

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Search, CheckCircle2, AlertCircle, ArrowRight, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from '@/components/ui/progress';
import { showSuccess } from '@/utils/toast';

const jobs = [
  { id: 1, title: "Engenheiro de Software Sênior (Backend)", area: "Logística", location: "Remoto", type: "Full-time", match: 94 },
  { id: 2, title: "Product Manager Specialist", area: "Fintech", location: "Híbrido (SP)", type: "Full-time", match: 82 },
  { id: 3, title: "Designer de Produto (UX/UI)", area: "Consumer", location: "Remoto", type: "Full-time", match: 65 },
  { id: 4, title: "Analista de Dados Pleno", area: "Marketing", location: "Remoto", type: "Full-time", match: 88 },
];

const JobBoard = () => {
  const [step, setStep] = useState<'details' | 'analyzing' | 'result'>('details');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const startApplication = (job: any) => {
    setSelectedJob(job);
    setStep('analyzing');
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setAnalysisProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setStep('result');
      }
    }, 150);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl ifood-shadow border border-gray-100">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar vaga ou área..." 
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none text-sm font-medium"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
          {['Todos', 'Engenharia', 'Produto', 'Dados'].map(cat => (
            <button key={cat} className="px-4 py-2 rounded-full bg-gray-100 text-xs font-bold text-gray-500 hover:bg-primary hover:text-white transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <Dialog key={job.id} onOpenChange={(open) => !open && setStep('details')}>
            <DialogTrigger asChild>
              <div className="group bg-white p-6 rounded-3xl ifood-shadow border border-gray-50 hover:border-primary/30 transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-wider">
                    {job.area}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-bold">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[500px] rounded-[2rem] p-0 overflow-hidden border-none">
              {step === 'details' && (
                <div className="p-8">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-black text-gray-900">{job.title}</DialogTitle>
                    <p className="text-primary font-bold">{job.area} • {job.location}</p>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-gray-600 mb-8">
                    <p>Venha fazer parte do time que alimenta o Brasil! Buscamos pessoas apaixonadas por tecnologia e inovação.</p>
                    <div className="bg-gray-50 p-4 rounded-2xl">
                      <p className="font-bold text-gray-900 mb-2">Requisitos:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Experiência com sistemas de alta escala</li>
                        <li>Conhecimento em arquitetura de microsserviços</li>
                        <li>Foco em qualidade e testes</li>
                      </ul>
                    </div>
                  </div>
                  <Button onClick={() => startApplication(job)} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold ifood-button-shadow">
                    Candidatar-se Agora 🚀
                  </Button>
                </div>
              )}

              {step === 'analyzing' && (
                <div className="p-12 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-primary">
                      <Sparkles size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-2">Analisando Match...</h3>
                  <p className="text-sm text-gray-500 mb-6">Usando seu currículo cadastrado para verificar a compatibilidade com a vaga.</p>
                  <Progress value={analysisProgress} className="h-2" />
                </div>
              )}

              {step === 'result' && (
                <div className="p-8 text-center">
                  {job.match >= 80 ? (
                    <>
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-black mb-2">Uau! Temos um Match!</h3>
                      <p className="text-sm text-gray-500 mb-6">Seu perfil tem <span className="text-green-600 font-black">{job.match}% de compatibilidade</span> com esta vaga.</p>
                      <div className="bg-green-50 p-4 rounded-2xl mb-8 text-left">
                        <p className="text-xs font-bold text-green-700 mb-1">Destaque da IA:</p>
                        <p className="text-xs text-green-600">Sua experiência com Node.js e AWS é exatamente o que o time de Logística precisa agora.</p>
                      </div>
                      <Button onClick={() => showSuccess("Candidatura confirmada!")} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold">Confirmar Candidatura</Button>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-6">
                        <AlertCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-black mb-2">Perfil Diferente</h3>
                      <p className="text-sm text-gray-500 mb-6">Vimos que seu perfil é um pouco diferente dos requisitos desta vaga (<span className="text-orange-600 font-black">{job.match}% match</span>).</p>
                      <div className="space-y-3 mb-8">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Vagas que combinam mais com você:</p>
                        {jobs.filter(j => j.id !== job.id).slice(0, 2).map(j => (
                          <div key={j.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-primary/30 cursor-pointer transition-all">
                            <div className="text-left">
                              <p className="text-xs font-bold text-gray-900">{j.title}</p>
                              <p className="text-[10px] text-primary font-bold">{j.match}% Match</p>
                            </div>
                            <ArrowRight size={14} className="text-gray-300" />
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button variant="outline" className="rounded-full py-6 font-bold border-gray-200">Ver Outras Vagas</Button>
                        <Button variant="ghost" className="text-gray-400 text-xs font-bold">Desejo prosseguir mesmo assim</Button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Talent Pool Section */}
      <div className="bg-primary rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden mt-12">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md text-center md:text-left">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-black mb-4">Não encontrou a vaga ideal?</h3>
            <p className="text-white/80 font-medium leading-relaxed">
              Entre para o nosso Banco de Talentos! Nós analisamos seu perfil e te avisamos assim que surgir uma oportunidade que seja a sua cara.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Button 
              onClick={() => showSuccess("Inscrito no Banco de Talentos!")}
              className="w-full md:w-auto bg-white text-primary hover:bg-white/90 rounded-full px-10 py-8 text-xl font-black shadow-xl"
            >
              Cadastrar Currículo 🚀
            </Button>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default JobBoard;