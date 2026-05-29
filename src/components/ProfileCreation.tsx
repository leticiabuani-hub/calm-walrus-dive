"use client";

import React, { useState } from 'react';
import { Upload, FileText, Sparkles, CheckCircle2, User, Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { showSuccess } from '@/utils/toast';

interface ProfileCreationProps {
  onComplete: () => void;
}

const ProfileCreation = ({ onComplete }: ProfileCreationProps) => {
  const [step, setStep] = useState<'upload' | 'form'>('upload');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    greenhouse: false
  });

  const handleUpload = () => {
    setIsAnalyzing(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setIsAnalyzing(false);
        setFormData({
          name: 'Alex Silva',
          email: 'alex.silva@email.com',
          phone: '(11) 98888-7777',
          linkedin: 'linkedin.com/in/alexsilva',
          greenhouse: false
        });
        setStep('form');
        showSuccess("Currículo lido com sucesso!");
      }
    }, 100);
  };

  if (step === 'upload') {
    return (
      <div className="bg-white rounded-[2.5rem] p-10 ifood-shadow border border-gray-50 text-center animate-in fade-in">
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
          <Upload size={32} />
        </div>
        <h3 className="text-2xl font-black text-gray-900 mb-2">Crie seu Perfil iFood</h3>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          Envie seu currículo e nossa IA preencherá seus dados automaticamente. Você só revisa o que faltar!
        </p>

        {isAnalyzing ? (
          <div className="space-y-6 max-w-sm mx-auto py-10">
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center text-primary">
                <Sparkles size={28} />
              </div>
            </div>
            <p className="text-sm font-bold text-gray-900">IA lendo seu currículo...</p>
            <Progress value={progress} className="h-2" />
          </div>
        ) : (
          <div 
            onClick={handleUpload}
            className="border-2 border-dashed border-gray-200 rounded-[2rem] p-16 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group mb-8"
          >
            <FileText className="mx-auto text-gray-300 group-hover:text-primary transition-colors mb-4" size={48} />
            <p className="text-lg font-bold text-gray-400 group-hover:text-primary">Clique para enviar seu currículo (PDF)</p>
            <p className="text-xs text-gray-400 mt-2">Formatos aceitos: PDF, DOCX até 10MB</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] p-10 ifood-shadow border border-gray-50 animate-in slide-in-from-bottom-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold">Dados Extraídos</h3>
          <p className="text-xs text-gray-400 font-medium">Revise e complete as informações abaixo</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <Label className="text-xs font-black text-gray-400 uppercase tracking-widest">Nome Completo</Label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-12 py-6 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-black text-gray-400 uppercase tracking-widest">E-mail</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-12 py-6 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-black text-gray-400 uppercase tracking-widest">Telefone</Label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              value={formData.phone} 
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="pl-12 py-6 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-black text-gray-400 uppercase tracking-widest">LinkedIn</Label>
          <div className="relative">
            <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              value={formData.linkedin} 
              onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
              className="pl-12 py-6 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 mb-10">
        <Checkbox 
          id="greenhouse" 
          checked={formData.greenhouse}
          onCheckedChange={(checked) => setFormData({...formData, greenhouse: !!checked})}
          className="mt-1 border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="greenhouse"
            className="text-sm font-bold text-gray-700 cursor-pointer"
          >
            Conectar ao Greenhouse
          </label>
          <p className="text-xs text-gray-500 leading-relaxed">
            Estou ciente que meu perfil será conectado ao sistema Greenhouse para gestão das minhas candidaturas no iFood.
          </p>
        </div>
      </div>

      <Button 
        onClick={onComplete}
        disabled={!formData.greenhouse}
        className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-8 text-lg font-bold ifood-button-shadow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Salvar Perfil e Ver Vagas 🚀
      </Button>
    </div>
  );
};

export default ProfileCreation;