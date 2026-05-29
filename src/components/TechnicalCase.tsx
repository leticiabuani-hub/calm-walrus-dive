"use client";

import React from 'react';
import { Code2, Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TechnicalCase = () => {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
          <Code2 size={24} />
        </div>
        <h3 className="text-xl font-bold">Desafio Técnico</h3>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-2">Sistema de Roteirização</h4>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            Desenvolva uma API que otimize a entrega de pedidos considerando tempo de preparo e distância dos entregadores.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-gray-400 border border-gray-100">Node.js/Go</span>
            <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-gray-400 border border-gray-100">Redis</span>
            <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-gray-400 border border-gray-100">Docker</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <Button variant="outline" className="w-full rounded-xl py-6 border-gray-200 gap-2 font-bold text-gray-600">
            <Download size={18} /> Baixar PDF do Case
          </Button>
          <Button className="w-full bg-primary text-white rounded-xl py-6 font-bold gap-2">
            <ExternalLink size={18} /> Enviar Solução (GitHub)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalCase;