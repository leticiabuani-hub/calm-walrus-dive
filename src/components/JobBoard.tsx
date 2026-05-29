"use client";

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { showSuccess } from '@/utils/toast';

const jobs = [
  { id: 1, title: "Engenheiro de Software Sênior (Backend)", area: "Logística", location: "Remoto", type: "Full-time", salary: "R$ 16k - 22k" },
  { id: 2, title: "Product Manager GTM", area: "Growth", location: "São Paulo, SP", type: "Híbrido", salary: "R$ 14k - 19k" },
  { id: 3, title: "Designer de Produto (UX/UI)", area: "Fintech", location: "Remoto", type: "Full-time", salary: "R$ 10k - 15k" },
  { id: 4, title: "Analista de Dados Pleno", area: "Inteligência", location: "Campinas, SP", type: "Híbrido", salary: "R$ 8k - 12k" },
  { id: 5, title: "Desenvolvedor Mobile (React Native)", area: "Consumer", location: "Remoto", type: "Full-time", salary: "R$ 12k - 18k" },
  { id: 6, title: "Gerente de Operações", area: "Expansão", location: "Rio de Janeiro, RJ", type: "Presencial", salary: "R$ 15k - 20k" },
  { id: 7, title: "Especialista em Segurança", area: "Cybersecurity", location: "Remoto", type: "Full-time", salary: "R$ 18k - 25k" },
  { id: 8, title: "Coordenador de Marketing", area: "Brand", location: "São Paulo, SP", type: "Híbrido", salary: "R$ 11k - 16k" },
];

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const handleApply = () => {
    showSuccess(`Candidatura enviada para ${selectedJob.title}!`);
    setSelectedJob(null);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div 
            key={job.id} 
            onClick={() => setSelectedJob(job)}
            className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-red-50 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Briefcase size={18} />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.area}</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{job.title}</h4>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary to-red-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Users size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Banco de Talentos</h3>
            <p className="text-white/80 text-sm">Não encontrou a vaga ideal? Deixe seu currículo conosco!</p>
          </div>
        </div>
        <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 font-bold">
          Cadastrar Currículo
        </Button>
      </div>

      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="sm:max-w-[500px] rounded-3xl">
          {selectedJob && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-primary font-bold text-xs mb-2">
                  <Star size={14} fill="currentColor" /> Vaga em Destaque
                </div>
                <DialogTitle className="text-2xl font-black">{selectedJob.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {selectedJob.location}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {selectedJob.area}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <h5 className="font-bold text-sm">Sobre a vaga</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Buscamos uma pessoa apaixonada por desafios para atuar no time de {selectedJob.area}. 
                    Você será responsável por escalar nossas soluções e garantir a melhor experiência para milhões de Foodlovers.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Faixa Salarial Estimada</p>
                  <p className="text-lg font-bold text-gray-800">{selectedJob.salary}</p>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleApply} className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 font-bold text-lg">
                  Candidatar-se Agora
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobBoard;