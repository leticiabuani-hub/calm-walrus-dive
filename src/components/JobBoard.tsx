"use client";

import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, ChevronRight, Search, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { showSuccess } from '@/utils/toast';

const jobs = [
  { id: 1, title: "Engenheiro de Software Sênior (Backend)", area: "Logística", location: "Remoto", type: "Full-time", salary: "R$ 15k - 22k" },
  { id: 2, title: "Product Manager Specialist", area: "Fintech", location: "Híbrido (SP)", type: "Full-time", salary: "R$ 18k - 25k" },
  { id: 3, title: "Designer de Produto (UX/UI)", area: "Consumer", location: "Remoto", type: "Full-time", salary: "R$ 10k - 16k" },
  { id: 4, title: "Analista de Dados Pleno", area: "Marketing", location: "Remoto", type: "Full-time", salary: "R$ 8k - 12k" },
  { id: 5, title: "Desenvolvedor Mobile (React Native)", area: "Grocery", location: "Remoto", type: "Full-time", salary: "R$ 14k - 20k" },
  { id: 6, title: "Gerente de Operações", area: "Expansão", location: "Híbrido (SP)", type: "Full-time", salary: "R$ 20k - 30k" },
  { id: 7, title: "Engenheiro de QA Automation", area: "Plataforma", location: "Remoto", type: "Full-time", salary: "R$ 11k - 17k" },
  { id: 8, title: "Especialista em Segurança (AppSec)", area: "Segurança", location: "Remoto", type: "Full-time", salary: "R$ 16k - 24k" },
];

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl ifood-shadow border border-gray-50">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar vaga ou área..." 
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20 outline-none text-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['Todos', 'Engenharia', 'Produto', 'Dados', 'Design'].map(cat => (
            <button key={cat} className="px-4 py-2 rounded-full bg-gray-100 text-xs font-bold text-gray-500 hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <Dialog key={job.id}>
            <DialogTrigger asChild>
              <div 
                onClick={() => setSelectedJob(job)}
                className="group bg-white p-6 rounded-[2rem] ifood-shadow border border-gray-50 hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-black text-gray-500 uppercase tracking-wider">
                    {job.area}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="text-primary" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-[2.5rem] p-8">
              <DialogHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  <Star size={32} fill="currentColor" />
                </div>
                <DialogTitle className="text-2xl font-black text-gray-900">{job.title}</DialogTitle>
                <p className="text-primary font-bold">{job.area} • {job.location}</p>
              </DialogHeader>
              <div className="py-6 space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>No iFood, buscamos pessoas que queiram revolucionar o mercado de alimentação. Nesta vaga, você será responsável por escalar sistemas que processam milhões de pedidos diariamente.</p>
                <div className="space-y-2">
                  <p className="font-bold text-gray-900">O que esperamos:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Experiência sólida em ambientes de alta escala</li>
                    <li>Foco em qualidade e cultura de testes</li>
                    <li>Mentalidade de dono e foco no cliente</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Faixa Salarial Estimada</p>
                  <p className="text-lg font-black text-gray-900">{job.salary}</p>
                </div>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold"
                onClick={() => showSuccess("Candidatura enviada com sucesso!")}
              >
                Candidatar-se Agora 🚀
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              <Users size={12} /> Banco de Talentos
            </div>
            <h3 className="text-3xl font-black mb-2">Não encontrou sua vaga ideal?</h3>
            <p className="text-gray-400 max-w-md">Deixe seu currículo em nosso banco de talentos e entraremos em contato assim que surgir uma oportunidade com seu perfil.</p>
          </div>
          <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-10 py-7 font-bold text-lg whitespace-nowrap">
            Cadastrar Currículo
          </Button>
        </div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default JobBoard;