"use client";

import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const GreenhouseStatus = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true);
      setTimeout(() => {
        setIsSyncing(false);
        setLastSync(new Date());
      }, 2000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full">
      <div className="relative">
        <RefreshCw 
          size={14} 
          className={cn("text-green-600", isSyncing && "animate-spin")} 
        />
        {!isSyncing && (
          <CheckCircle2 
            size={8} 
            className="absolute -top-1 -right-1 text-green-600 bg-white rounded-full" 
          />
        )}
      </div>
      <span className="text-[10px] font-bold text-green-700 uppercase tracking-tight">
        {isSyncing ? "Sincronizando Greenhouse..." : `Sincronizado: ${lastSync.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
      </span>
    </div>
  );
};

export default GreenhouseStatus;