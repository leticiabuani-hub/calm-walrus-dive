"use client";

import React from 'react';
import { Check, Circle } from 'lucide-react';

interface Step {
  id: number;
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface CandidateTrailProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const CandidateTrail = ({ currentStep, onStepClick }: CandidateTrailProps) => {
  const steps: Step[] = [
    { id: 1, label: 'Aplicação', status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'current' : 'upcoming' },
    { id: 2, label: 'Fit Cultural', status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'current' : 'upcoming' },
    { id: 3, label: 'Recrutador', status: currentStep > 3 ? 'completed' : currentStep === 3 ? 'current' : 'upcoming' },
    { id: 4, label: 'Técnica', status: currentStep > 4 ? 'completed' : currentStep === 4 ? 'current' : 'upcoming' },
    { id: 5, label: 'Gestor', status: currentStep > 5 ? 'completed' : currentStep === 5 ? 'current' : 'upcoming' },
    { id: 6, label: 'Oferta', status: currentStep === 6 ? 'current' : 'upcoming' },
  ];

  return (
    <div className="relative flex items-center justify-between w-full overflow-x-auto pb-4 md:pb-0">
      {/* Line Background */}
      <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
      
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group"
          onClick={() => onStepClick(step.id)}
        >
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-4
            ${step.status === 'completed' ? 'bg-green-500 border-green-100 text-white' : 
              step.status === 'current' ? 'bg-primary border-red-100 text-white scale-110 shadow-lg shadow-red-100' : 
              'bg-white border-gray-100 text-gray-300 group-hover:border-gray-200'}
          `}>
            {step.status === 'completed' ? <Check size={18} strokeWidth={3} /> : <span className="text-xs font-black">{step.id}</span>}
          </div>
          <span className={`
            text-[10px] font-black uppercase tracking-widest whitespace-nowrap
            ${step.status === 'current' ? 'text-primary' : 'text-gray-400'}
          `}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CandidateTrail;