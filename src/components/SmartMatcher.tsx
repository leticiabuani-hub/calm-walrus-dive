"use client";

import React from 'react';
import { Target, Zap, Brain } from 'lucide-react';

const SmartMatcher = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
          <Brain size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">Smart Match</h3>
          <p className="text-xs text-gray-400 font-medium">Análise de IA do seu perfil</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
              <Target size={16} />
            </div>
            <span className="text-sm font-bold text-gray-700">Match Técnico</span>
          </div>
          <span className="text-lg font-black text-green-600">94%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
              <Zap size={16} />
            </div>
            <span className="text-sm font-bold text-gray-700">Match Cultural</span>
          </div>
          <span className="text-lg font-black text-orange-600">88%</span>
        </div>

        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="font-bold text-primary">Dica da IA:</span> Seu histórico com sistemas distribuídos é um diferencial forte para esta vaga de Backend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartMatcher;