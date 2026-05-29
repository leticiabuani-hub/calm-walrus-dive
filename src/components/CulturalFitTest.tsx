"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Sparkles, BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const questions = [
  { q: "Você prefere tomar decisões baseadas em dados ou em intuição?", options: ["Dados sempre", "Equilíbrio", "Intuição e experiência"] },
  { q: "Como você lida com mudanças rápidas de prioridade?", options: ["Me adapto rápido", "Preciso de tempo", "Prefiro estabilidade"] },
  { q: "Em um projeto, o que é mais importante para você?", options: ["Resultado final", "Qualidade técnica", "Colaboração do time"] },
  { q: "Você se considera uma pessoa que 'age como dono'?", options: ["Totalmente", "Em partes", "Prefiro seguir ordens"] },
  { q: "Como você reage a feedbacks construtivos?", options: ["Agradeço e aplico", "Analiso com calma", "Fico na defensiva"] },
  { q: "Você prefere trabalhar em problemas complexos sozinho ou em par?", options: ["Em par/time", "Sozinho", "Depende do dia"] },
  { q: "Qual sua relação com o erro?", options: ["Oportunidade de aprendizado", "Algo a ser evitado", "Frustração"] },
  { q: "O que te motiva mais no trabalho?", options: ["Impacto no cliente", "Salário e benefícios", "Reconhecimento"] },
];

interface CulturalFitTestProps {
  onComplete: () => void;
}

const CulturalFitTest = ({ onComplete }: CulturalFitTestProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const data = [
    { name: 'Alinhamento', value: 85 },
    { name: 'Diferença', value: 15 },
  ];
  const COLORS = ['#EA1D2C', '#F3F4F6'];

  if (showResult) {
    return (
      <div className="bg-white rounded-[2.5rem] p-10 ifood-shadow border border-gray-50 text-center animate-in zoom-in-95">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">Teste Concluído!</h3>
        <p className="text-gray-500 mb-8">Seu perfil tem um alto alinhamento com nossos valores.</p>
        
        <div className="h-64 w-full mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-3xl font-black text-gray-900">85%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-2xl">
            <p className="text-[10px] font-black text-gray-400 uppercase">Foco no Cliente</p>
            <p className="font-bold text-primary">Excelente</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl">
            <p className="text-[10px] font-black text-gray-400 uppercase">Atitude de Dono</p>
            <p className="font-bold text-primary">Muito Alta</p>
          </div>
        </div>

        <Button 
          onClick={onComplete}
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold gap-2"
        >
          Ir para Entrevista com IA <Sparkles size={20} />
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-10 ifood-shadow border border-gray-50 animate-in fade-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <BarChart3 size={20} />
          </div>
          <h3 className="text-xl font-bold">Fit Cultural</h3>
        </div>
        <span className="text-xs font-bold text-gray-400 uppercase">Questão {step + 1} de {questions.length}</span>
      </div>

      <Progress value={((step + 1) / questions.length) * 100} className="h-2 mb-10" />

      <div className="space-y-8">
        <h4 className="text-2xl font-black text-gray-900 leading-tight">{questions[step].q}</h4>
        <div className="space-y-3">
          {questions[step].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full p-5 text-left rounded-2xl border-2 border-gray-100 hover:border-primary hover:bg-primary/5 transition-all font-bold text-gray-700"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalFitTest;