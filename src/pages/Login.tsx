"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LogIn, ShieldCheck } from 'lucide-react';
import { showSuccess } from '@/utils/toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Autenticado via Greenhouse!");
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] p-4">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] ifood-shadow p-10 border border-gray-50">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
            <span className="text-white font-black text-3xl italic">i</span>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2 italic">ifood Careers</h1>
          <p className="text-gray-500 text-sm">Acesse sua jornada de candidato</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">E-mail do Greenhouse</label>
            <Input 
              type="email" 
              placeholder="seu@email.com" 
              className="py-6 rounded-2xl border-gray-200 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Senha</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              className="py-6 rounded-2xl border-gray-200 focus:ring-primary"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-7 text-lg font-bold gap-2">
            Entrar <LogIn size={20} />
          </Button>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400">
          <ShieldCheck size={16} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Secure Greenhouse Auth</span>
        </div>
      </div>
    </div>
  );
};

export default Login;