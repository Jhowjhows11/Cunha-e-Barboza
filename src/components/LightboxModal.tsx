import React from 'react';
import { X, MessageSquare, Tag, ZoomIn } from 'lucide-react';
import { GalleryItem, COMPANY_INFO } from '../data/content';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-950 border border-blue-900/80 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-colors"
          aria-label="Fechar ampliação"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Image Display */}
        <div className="relative max-h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh]"
          />
        </div>

        {/* Footer Details */}
        <div className="p-6 sm:p-8 bg-blue-950 border-t border-blue-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-mono font-bold px-2.5 py-0.5 rounded uppercase">
                {item.categoryLabel}
              </span>
              <span className="text-slate-400 text-xs font-mono">Registro de Obra</span>
            </div>

            <h3 className="font-heading font-bold text-xl text-white">
              {item.title}
            </h3>

            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              {item.description}
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl(`Olá! Vi a foto da obra "${item.title}" no site e gostaria de um orçamento semelhante.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded shadow-lg shadow-red-600/30 transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Orçar Projeto Similar</span>
          </a>
        </div>
      </div>
    </div>
  );
};
