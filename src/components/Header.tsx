"use client";

import React from 'react';
import { Bell, User, Search, Menu, Settings, FileText, Calendar, Briefcase, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/ifood-logo.png" 
              alt="iFood Logo" 
              className="h-8 w-auto object-contain"
            />
            <div className="h-6 w-[1px] bg-gray-200 mx-1 hidden sm:block"></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pt-1 hidden sm:block">Carreiras</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            {['Vagas', 'Nossa Cultura', 'Benefícios', 'Sobre Nós'].map((item) => (
              <a key={item} href="#" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-primary transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </button>
          <div className="h-8 w-[1px] bg-gray-100 mx-2"></div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-50 transition-colors outline-none">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <User size={18} />
                </div>
                <span className="text-sm font-bold text-gray-700 hidden sm:inline">Minha Conta</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 rounded-2xl p-2 mt-2 border-gray-100 shadow-xl" align="end">
              <DropdownMenuLabel className="text-xs font-black text-gray-400 uppercase tracking-widest px-3 py-2">Meu Perfil</DropdownMenuLabel>
              <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 font-bold text-gray-700 focus:bg-primary/5 focus:text-primary">
                <User size={18} /> Meus Dados
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 font-bold text-gray-700 focus:bg-primary/5 focus:text-primary">
                <FileText size={18} /> Atualizar Currículo
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-50" />
              <DropdownMenuLabel className="text-xs font-black text-gray-400 uppercase tracking-widest px-3 py-2">Candidaturas</DropdownMenuLabel>
              <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 font-bold text-gray-700 focus:bg-primary/5 focus:text-primary">
                <Briefcase size={18} /> Minhas Aplicações
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 font-bold text-gray-700 focus:bg-primary/5 focus:text-primary">
                <Calendar size={18} /> Meus Agendamentos
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-50" />
              <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 font-bold text-gray-700 focus:bg-primary/5 focus:text-primary">
                <Settings size={18} /> Configurações
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl py-3 cursor-pointer gap-3 font-bold text-red-500 focus:bg-red-50 focus:text-red-600">
                <LogOut size={18} /> Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="md:hidden p-2 text-gray-400">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;