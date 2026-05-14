"use client";

import React, { useState } from 'react';
import { Upload, Sparkles, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { showSuccess } from '@/utils/toast';

const SmartMatcher = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<'match' | 'mismatch' | null>(null);

  const handleUpload = () => {
    setIsAnalyzing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setResult(Math.random() > 0.5 ? 'match' : 'mismatch');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-primary">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="text-lg font-bold">Smart Matcher IA</h3>
          <p className="text-sm text-gray-500">Analisamos seu perfil em tempo real</p>
        </div>
      </div>

      {!isAnalyzing && !result && (
        <div 
          className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-red-50/30 transition-all cursor-pointer group"
          onClick={handleUpload}
        >
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-white transition-colors">
            <Upload size={28} />
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-700">Arraste seu currículo aqui</p>
            <p className="text-sm text-gray-400">PDF, DOCX até 10MB</p>
          </div>
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
            Selecionar Arquivo
          </Button>
        </div>
      )}

      {isAnalyzing && (
        <div className="py-10 flex flex-col items-center gap-6">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-primary font-bold">
              {progress}%
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold text-gray-800 animate-pulse">Nossa IA está lendo seu currículo...</p>
            <p className="text-sm text-gray-500">Cruzando dados com os requisitos da vaga</p>
          </div>
          <Progress value={progress} className="w-full max-w-xs h-2" />
        </div>
      )}

      {result === 'match' && (
        <div className="bg-green-50 border border-green-100 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-green-800">Match Perfeito!</h4>
              <p className="text-sm text-green-700 mb-4">Seu perfil tem 92% de aderência com esta vaga de Engenharia de Software.</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full gap-2">
                Continuar Candidatura <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {result === 'mismatch' && (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white shrink-0">
              <AlertCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-amber-800">Perfil Diferente</h4>
              <p className="text-sm text-amber-700 mb-4">Vimos que seu perfil é diferente dos requisitos técnicos. Deseja prosseguir ou ver estas vagas que combinam mais com você?</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="border-amber-200 text-amber-800 hover:bg-amber-100 rounded-full">
                  Prosseguir mesmo assim
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
                  Ver Vagas Recomendadas
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartMatcher;