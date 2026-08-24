import React from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { ServiceItem, COMPANY_INFO } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-blue-950 border border-blue-900/80 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors border border-white/10"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-red-600 text-white text-xs font-mono font-bold px-3 py-1 rounded uppercase tracking-wider">
              {service.category}
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mt-2">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-bold font-heading">
              Descrição Técnica do Serviço
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-bold font-heading">
              Diferenciais de Execução:
            </h4>
            <div className="space-y-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended for */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-300 font-bold font-heading">
              Recomendado Principalmente Para:
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.recommendedFor.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-slate-950 border border-blue-900/80 text-slate-300 text-xs px-3 py-1.5 rounded-md font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA footer in modal */}
          <div className="pt-4 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Precisa de visita técnica para este serviço?
            </span>

            <a
              href={COMPANY_INFO.whatsappUrl(`Olá! Gostaria de uma proposta detalhada para o serviço: ${service.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded shadow-lg shadow-red-600/30 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Orçamento no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
