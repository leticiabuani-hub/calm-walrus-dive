"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppAgent = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <div className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-2xl p-4 ifood-shadow border border-gray-100 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none">
        <p className="text-xs font-bold text-gray-900 mb-1">Dúvidas sobre o processo?</p>
        <p className="text-[10px] text-gray-500">Fale com nosso assistente virtual agora mesmo!</p>
      </div>
      <button className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
        <MessageCircle size={32} fill="currentColor" />
      </button>
    </div>
  );
};

export default WhatsAppAgent;