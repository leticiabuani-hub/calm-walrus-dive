"use client";

import React, { useState } from 'react';
import { Code, Github, Link as LinkIcon, FileUp, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { showSuccess } from '@/utils/toast';

const TechnicalCase = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (repoUrl) {
      setIsSubmitted(true);
      showSuccess("Case técnico enviado com sucesso!");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
          <Code size={20} />
        </div>
        <div>
          <h3 className="text-lg font-bold">Case Técnico</h3>
          <p className="text-sm text-gray-500">Mostre seu talento na prática</p>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="space-y-6">
          <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
            <h4 className="text-sm font-bold text-purple-800 mb-2 flex items-center gap-2">
              <Github size={16} /> Instruções do Desafio
            </h4>
            <p className="text-xs text-purple-700 leading-relaxed">
              Desenvolva uma API escalável para processamento de pedidos em tempo real. Valorizamos Clean Code e testes unitários.
            </p>
            <Button variant="link" className="text-purple-800 p-0 h-auto text-xs font-bold mt-2 gap-1">
              Baixar PDF do Case <ExternalLink size={12} />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Link do Repositório (GitHub/GitLab)</label>
              <div className="relative">
                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="https://github.com/seu-usuario/projeto" 
                  className="pl-12 py-6 rounded-2xl border-gray-200 focus:ring-primary"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 font-bold">
              Enviar Solução
            </Button>
          </form>
        </div>
      ) : (
        <div className="py-6 text-center animate-in fade-in">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h4 className="font-bold text-gray-800">Solução Recebida!</h4>
          <p className="text-sm text-gray-500 mt-2">
            Nossos engenheiros irão revisar seu código. Você será notificado pelo WhatsApp em até 3 dias úteis.
          </p>
          <div className="mt-6 p-3 bg-gray-50 rounded-xl inline-flex items-center gap-2 text-xs font-medium text-gray-600">
            <LinkIcon size={14} /> {repoUrl}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalCase;