"use client";

import React from 'react';
import { Bell, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 ifood-shadow">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-black text-xl italic">i</span>
            </div>
            <span className="text-primary font-black text-2xl tracking-tighter italic">ifood</span>
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-widest">Careers</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="text-primary border-b-2 border-primary pb-5 mt-5">Minhas Vagas</a>
            <a href="#" className="hover:text-primary transition-colors">Explorar</a>
            <a href="#" className="hover:text-primary transition-colors">Cultura</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-gray-100">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <User size={18} className="text-gray-500" />
            </div>
            <span className="hidden sm:inline text-sm font-semibold">Olá, Foodlover!</span>
          </div>
          <button className="md:hidden p-2 text-gray-500">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;