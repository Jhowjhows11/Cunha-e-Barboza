import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white text-xs font-semibold py-2 px-3.5 rounded-lg shadow-2xl animate-bounce">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <span>Orçamento Rápido no WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-500 hover:text-white ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_INFO.whatsappUrl('Olá! Estou no site da Cunha & Barboza e gostaria de solicitar um orçamento.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp com a Cunha & Barboza"
        className="w-14 h-14 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-600/60 hover:shadow-red-600/80 transition-all duration-300 transform hover:scale-110 border-2 border-white/20 group focus:outline-none"
      >
        <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
