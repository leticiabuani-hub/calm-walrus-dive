"use client";

import React from 'react';
import { Gift, CheckCircle2, TrendingUp, Heart, Coffee, Plane, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OfferDetails = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-10 ifood-shadow border-2 border-primary/20 animate-in zoom-in-95">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200">
          <Gift size={36} />
        </div>
        <div>
          <h3 className="text-3xl font-black text-gray-900">Sua Proposta iFood</h3>
          <p className="text-gray-500">Bem-vindo ao time de Foodlovers!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
          <p className="text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">Remuneração Mensal</p>
          <p className="text-4xl font-black text-gray-900">R$ 18.500,00</p>
          <div className="flex items-center gap-2 mt-3 text-green-600 font-bold text-sm">
            <TrendingUp size={16} /> 15% acima da média de mercado
          </div>
        </div>
        <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
          <p className="text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">Stock Options</p>
          <p className="text-4xl font-black text-gray-900">1.200 <span className="text-sm font-medium text-gray-500">units</span></p>
          <p className="text-xs text-primary font-bold mt-3 uppercase tracking-widest">Vesting de 4 anos</p>
        </div>
      </div>

      {/* Market Comparison */}
      <div className="mb-10 p-8 bg-primary/5 rounded-[2rem] border border-primary/10">
        <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
          <BarChart2 size={20} className="text-primary" /> Comparativo com o Mercado
        </h4>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-gray-500">Média Mercado (Sênior)</span>
              <span className="text-gray-900">R$ 16.200</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gray-400 w-[70%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-primary">Sua Proposta iFood</span>
              <span className="text-primary">R$ 18.500</span>
            </div>
            <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 mb-10">
        <h4 className="font-bold text-gray-800 flex items-center gap-2">
          <Heart size={18} className="text-primary" /> Benefícios Flexíveis
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Coffee, text: "iFood Card (R$ 1.200)", desc: "Refeição e Alimentação" },
            { icon: Plane, text: "Auxílio Home Office", desc: "R$ 250 mensais" },
            { icon: TrendingUp, text: "Plano de Saúde Premium", desc: "Bradesco Top Nacional" },
            { icon: CheckCircle2, text: "Gympass & Zenklub", desc: "Bem-estar completo" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{item.text}</p>
                <p className="text-[10px] text-gray-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full py-8 text-lg font-bold shadow-xl shadow-red-100">
          Aceitar Proposta 🚀
        </Button>
        <Button variant="outline" className="flex-1 rounded-full py-8 border-gray-200 font-bold text-gray-600">
          Agendar Dúvida com RH
        </Button>
      </div>
    </div>
  );
};

export default OfferDetails;