"use client";

import React, { useState } from 'react';
import { Heart, Zap, Users, Target, Rocket, Shield, Smile, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const questions = [
  { id: 1, question: "Como você lida com mudanças rápidas de prioridade?", icon: Zap, options: [
    { text: "Prefiro processos estáveis", value: 20 },
    { text: "Me adapto com tempo", value: 60 },
    { text: "Adoro o dinamismo", value: 100 }
  ]},
  { id: 2, question: "Qual sua visão sobre colaboração entre times?", icon: Users, options: [
    { text: "Foco no meu trabalho", value: 30 },
    { text: "Colaboro se solicitado", value: 70 },
    { text: "Sucesso é coletivo", value: 100 }
  ]},
  { id: 3, question: "Como você encara o erro em um projeto?", icon: Target, options: [
    { text: "Evito a todo custo", value: 20 },
    { text: "Analiso para não repetir", value: 80 },
    { text: "Oportunidade de aprendizado rápido", value: 100 }
  ]},
  { id: 4, question: "O que significa 'Cultura de Dono' para você?", icon: Shield, options: [
    { text: "Fazer apenas o que me pedem", value: 20 },
    { text: "Cuidar das minhas tarefas", value: 60 },
    { text: "Agir pensando no bem da empresa", value: 100 }
  ]},
  { id: 5, question: "Como você prefere receber feedbacks?", icon: MessageSquare, options: [
    { text: "Apenas em reuniões formais", value: 40 },
    { text: "Prefiro feedbacks positivos", value: 60 },
    { text: "Direto e constante, para evoluir", value: 100 }
  ]},
  { id: 6, question: "Qual seu nível de autonomia desejado?", icon: Rocket, options: [
    { text: "Preciso de instruções detalhadas", value: 30 },
    { text: "Gosto de guias gerais", value: 70 },
    { text: "Tomo decisões e busco resultados", value: 100 }
  ]},
  { id: 7, question: "Como você promove a diversidade no dia a dia?", icon: Heart, options: [
    { text: "Acho que é papel do RH", value: 20 },
    { text: "Respeito a todos", value: 70 },
    { text: "Busco ativamente incluir vozes diferentes", value: 100 }
  ]},
  { id: 8, question: "O que te motiva mais no trabalho?", icon: Smile, options: [
    { text: "Estabilidade financeira", value: 40 },
    { text: "Reconhecimento individual", value: 60 },
    { text: "Impacto real na vida das pessoas", value: 100 }
  ]},
];

interface CulturalFitTestProps {
  onComplete: (score: number) => void;
}

const CulturalFitTest = ({ onComplete }: CulturalFitTestProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const sum = newAnswers.reduce((a, b) => a + b, 0);
      onComplete(Math.round(sum / questions.length));
    }
  };

  const currentQuestion = questions[currentStep];
  const Icon = currentQuestion.icon;

  return (
    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-primary">
            <Heart size={20} />
          </div>
          <h3 className="text-lg font-bold">Fit Cultural iFood</h3>
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