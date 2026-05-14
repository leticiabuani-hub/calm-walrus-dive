"use client";

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Globe, Clock, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { showSuccess } from '@/utils/toast';

const timeSlots = [
  { brt: "09:00", est: "07:00" },
  { brt: "10:00", est: "08:00" },
  { brt: "14:00", est: "12:00" },
  { brt: "16:00", est: "14:00" },
];

const GlobalScheduler = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (selectedSlot) {
      setIsConfirmed(true);
      showSuccess("Entrevista agendada com sucesso!");
    }
  };

  if (isConfirmed) {
    return (
      <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50 text-center animate-in zoom-in-95">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
          <Check size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Tudo pronto!</h3>
        <p className="text-gray-500 text-sm mb-6">
          Enviamos o convite para seu e-mail e sincronizamos com seu calendário.
        </p>
        <div className="bg-gray-50 p-4 rounded-2xl text-left mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase">Data</span>
            <span className="text-sm font-bold">15 de Outubro, 2023</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase">Horário (Seu Fuso)</span>
            <span className="text-sm font-bold text-primary">{selectedSlot} EST</span>
          </div>
        </div>
        <Button variant="outline" className="w-full rounded-full" onClick={() => setIsConfirmed(false)}>
          Alterar Agendamento
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
            <Globe size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Agendamento Global</h3>
            <p className="text-sm text-gray-500">Sincronizado com o Gestor</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="flex-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Seu Fuso Horário</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-bold text-gray-700">Miami (EST)</span>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex-1 text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Fuso do Gestor</p>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-sm font-bold text-gray-700">São Paulo (BRT)</span>
              <span className="w-2 h-2 bg-primary rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot.est}
              onClick={() => setSelectedSlot(slot.est)}
              className={cn(
                "p-4 rounded-2xl border-2 transition-all text-left group",
                selectedSlot === slot.est 
                  ? "border-primary bg-red-50/50" 
                  : "border-gray-100 hover:border-gray-200 bg-white"
              )}
            >
              <p className={cn(
                "text-lg font-black mb-1",
                selectedSlot === slot.est ? "text-primary" : "text-gray-800"
              )}>
                {slot.est}
              </p>
              <p className="text-[10px] font-bold text-gray-400 uppercase">
                {slot.brt} BRT
              </p>
            </button>
          ))}
        </div>

        <Button 
          disabled={!selectedSlot}
          onClick={handleConfirm}
          className="w-full bg-gray-900 hover:bg-black text-white rounded-full py-6 text-lg font-bold gap-2"
        >
          Confirmar Horário <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default GlobalScheduler;