"use client";

import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

const GlobalScheduler = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-white rounded-[2.5rem] p-8 ifood-shadow border border-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
          <CalendarIcon size={24} />
        </div>
        <h3 className="text-xl font-bold">Agendar Etapa</h3>
      </div>

      <div className="flex flex-col gap-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-2xl border border-gray-100 p-4"
        />
        
        <div className="space-y-3">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Horários Disponíveis</p>
          <div className="grid grid-cols-2 gap-2">
            {['09:00', '11:30', '14:00', '16:30'].map(time => (
              <button key={time} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-100 hover:border-primary hover:text-primary font-bold text-sm transition-all">
                <Clock size={14} /> {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalScheduler;