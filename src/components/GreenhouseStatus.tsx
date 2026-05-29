"use client";

import React from 'react';

const GreenhouseStatus = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
      <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Sincronizado com Greenhouse</span>
    </div>
  );
};

export default GreenhouseStatus;