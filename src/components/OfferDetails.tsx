"use client";

import React from 'react';
import { Gift, CheckCircle2, TrendingUp, Heart, Coffee, Plane, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfferDetails = () => {
  return (
    <div className="bg-white rounded-3xl p-8 ifood-shadow border-2 border-primary/20 animate-in zoom-in-95">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200">
          <Gift size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900">Sua Proposta iFood</h3>
          <p className="text-gray-500">Bem-vindo ao time de Foodlovers!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase mb-2">Remuneração Mensal</p>
          <p className="text-3xl font-black text-gray-900">R$ 18.500,00</p>
          <p className="text-xs text-green-600 font-bold mt-1">+ Bônus Anual (PLR)</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase mb-2">Stock Options</p>
          <p className="text-3xl font-black text-gray-900">1.200 <span className="text-sm font-medium text-gray-500">units</span></p>
          <p className="text-xs text-primary font-bold mt-1">Vesting de 4 anos</p>
        </div>
      </div>

      {/* Comparação de Mercado */}
      <div className="mb-8 p-6 bg-blue-50 rounded-3xl border border-blue-100">
        <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-4">
          <BarChart3 size={18} /> Comparação com o Mercado
        </h4>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-blue-700">Sua Proposta iFood</span>
              <span className="text-blue-900">Top 5%</span>
            </div>
            <div className="h-3 bg-blue-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-[95%] rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold mb-1">
              <span className="text-gray-500">Média do Mercado (Sênior)</span>
              <span className="text-gray-700">R$ 14.200</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gray-400 w-[70%] rounded-full"></div>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-blue-600 font-medium mt-4 italic">
          *Dados baseados em pesquisas salariais recentes para o setor de tecnologia no Brasil.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <h4 className="font-bold text-gray-800 flex items-center gap-2">
          <Heart size={18} className="text-primary" /> Benefícios Flexíveis
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Coffee, text: "iFood Card (R$ 1.200)" },
            { icon: Plane, text: "Auxílio Home Office" },
            { icon: TrendingUp, text: "Plano de Saúde Premium" },
            { icon: CheckCircle2, text: "Gympass & Zenklub" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-2xl">
              <item.icon size={16} className="text-gray-400" />
              <span className="text-xs font-bold text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold">
          Aceitar Proposta 🚀
        </Button>
        <Button variant="outline" className="w-full rounded-full py-7 border-gray-200">
          Agendar Dúvida com RH
        </Button>
      </div>
    </div>
  );
};

export default OfferDetails;