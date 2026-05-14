"use client";

import React, { useState } from 'react';
import { Heart, Star, Zap, Target, Users, ArrowRight, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    id: 1,
    question: "Como você lida com mudanças rápidas de prioridade?",
    options: [
      { text: "Prefiro processos estáveis e previsíveis", value: 20 },
      { text: "Me adapto bem, mas preciso de tempo", value: 60 },
      { text: "Adoro o dinamismo e me sinto motivado", value: 100 }
    ],
    icon: Zap
  },
  {
    id: 2,
    question: "Qual sua visão sobre colaboração entre times?",
    options: [
      { text: "Foco no meu trabalho individual primeiro", value: 30 },
      { text: "Colaboro quando solicitado", value: 70 },
      { text: "Acredito que o sucesso é sempre coletivo", value: 100 }
    ],
    icon: Users
  }
];

const CulturalFitTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    const sum = answers.reduce((a, b) => a + b, 0);
    return Math.round(sum / questions.length);
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50 text-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
          <Heart size={40} fill="currentColor" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Seu DNA Foodlover</h3>
        <p className="text-gray-500 mb-8">Analisamos suas respostas com base nos nossos valores.</p>
        
        <div className="relative w-48 h-48 mx-auto mb-8">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle className="text-gray-100 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
            <circle 
              className="text-primary stroke-current transition-all duration-1000 ease-out" 
              strokeWidth="8" 
              strokeDasharray={`${score * 2.51}, 251.2`}
              strokeLinecap="round" 
              fill="transparent" 
              r="40" cx="50" cy="50" 
              transform="rotate(-90 50 50)"
            />
            <text x="50" y="55" textAnchor="middle" className="text-3xl font-black fill-primary">{score}%</text>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
          <div className="p-4 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-sm flex items-center gap-2 mb-1">
              <Zap size={14} className="text-amber-500" /> Agilidade
            </h4>
            <p className="text-xs text-gray-500">Você demonstra alta capacidade de adaptação ao nosso ritmo.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-sm flex items-center gap-2 mb-1">
              <Users size={14} className="text-blue-500" /> Colaboração
            </h4>
            <p className="text-xs text-gray-500">Seu perfil está muito alinhado com nossa cultura de time.</p>
          </div>
        </div>

        <p className="text-sm text-gray-400 italic mb-6">
          *Este teste é informativo e ajuda você e o gestor a entenderem melhor a sinergia.
        </p>
        
        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg font-bold">
          Ver Detalhes da Cultura iFood
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const Icon = currentQuestion.icon;

  return (
    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-primary">
            <Target size={20} />
          </div>
          <h3 className="text-lg font-bold">Fit Cultural</h3>
        </div>
        <span className="text-sm font-bold text-gray-400">
          {currentStep + 1} / {questions.length}
        </span>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400">
            <Icon size={24} />
          </div>
          <h4 className="text-xl font-bold text-gray-800 leading-tight">
            {currentQuestion.question}
          </h4>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.value)}
              className="w-full p-5 text-left rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-red-50/30 transition-all group flex items-center justify-between"
            >
              <span className="font-semibold text-gray-700 group-hover:text-primary">{option.text}</span>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>
      </div>

      <Progress value={((currentStep + 1) / questions.length) * 100} className="h-1.5" />
    </div>
  );
};

export default CulturalFitTest;