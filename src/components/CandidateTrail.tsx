"use client";

import React from 'react';
import { Check, Lock, Play, FileText, Users, Code, Briefcase, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Aplicação', icon: FileText, status: 'completed', description: 'Check-in feito!' },
  { id: 2, title: 'Entrevista IA', icon: Play, status: 'current', description: 'Dicas para brilhar' },
  { id: 3, title: 'Recrutador', icon: Users, status: 'upcoming', description: 'Conheça o time' },
  { id: 4, title: 'Case Técnico', icon: Code, status: 'upcoming', description: 'Mostre seu talento' },
  { id: 5, title: 'Gestor', icon: Briefcase, status: 'upcoming', description: 'Foco em negócio' },
  { id: 6, title: 'Oferta', icon: Gift, status: 'upcoming', description: 'Proposta de valor' },
];

const CandidateTrail = () => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 relative">
        {/* Progress Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
          <div className="h-full bg-primary transition-all duration-500" style={{ width: '25%' }}></div>
        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';
          
          return (
            <div key={step.id} className="flex flex-row md:flex-col items-center gap-4 md:gap-3 z-10 w-full md:w-auto">
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300",
                isCompleted ? "bg-green-500 border-green-100 text-white" : 
                isCurrent ? "bg-primary border-red-100 text-white scale-110 shadow-lg shadow-red-200" : 
                "bg-white border-gray-100 text-gray-400"
              )}>
                {isCompleted ? <Check size={20} strokeWidth={3} /> : <Icon size={20} />}
              </div>
              
              <div className="flex flex-col md:items-center">
                <span className={cn(
                  "text-sm font-bold",
                  isCurrent ? "text-primary" : isCompleted ? "text-green-600" : "text-gray-500"
                )}>
                  {step.title}
                </span>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                  {step.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CandidateTrail;