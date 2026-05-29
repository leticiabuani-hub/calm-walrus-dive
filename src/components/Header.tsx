"use client";

import React from 'react';
import { Bell, User, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary w-10 h-10 rounded-xl flex items-center justify-center text-white font-black italic text-2xl">
              i
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary">food</span>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2 pt-1">Carreiras</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
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
          <button className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-50 transition-colors">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
              <User size={18} />
            </div>
            <span className="text-sm font-bold text-gray-700 hidden sm:inline">Minha Conta</span>
          </button>
          <button className="md:hidden p-2 text-gray-400">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;