import React, { useState } from 'react';
import { ArrowRight, Layers, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { SERVICES_DATA, ServiceItem, COMPANY_INFO } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section 
      id="servicos"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-heading font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Escopo Técnico de Serviços</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          </div>

          <h2 
            id="services-heading"
            className="font-heading font-black text-3xl sm:text-5xl text-[#080E21] tracking-tight"
          >
            Soluções Completas Para Cada Etapa da Sua Obra
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Da terraplanagem à pavimentação, oferecemos serviços com qualidade, segurança, maquinário próprio e padrão rodoviário.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white border border-slate-200/90 hover:border-red-600/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Service Image with Category Overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="bg-[#080E21]/90 backdrop-blur text-white border border-blue-900 text-[11px] font-mono font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {service.category}
                  </span>
                  {idx % 2 === 0 && (
                    <span className="bg-amber-400 text-[#080E21] font-mono font-bold text-[10px] px-2 py-0.5 rounded uppercase shadow">
                      CBUQ
                    </span>
                  )}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-heading font-bold text-xl text-[#080E21] group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="pt-2 space-y-2">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${fIdx === 1 ? 'text-amber-500' : 'text-red-600'} shrink-0`} />
                      <span className="truncate font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700 hover:text-red-600 flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Saiba mais</span>
                    <ChevronRight className="w-4 h-4 text-red-600 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={COMPANY_INFO.whatsappUrl(`Olá! Gostaria de um orçamento para ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded border border-red-600/30 transition-all text-xs font-semibold"
                    title={`Solicitar orçamento para ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Engineering Solution Banner */}
        <div className="mt-16 bg-[#080E21] border border-blue-900 p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
              Precisa de uma análise técnica no local da sua obra?
            </h4>
            <p className="text-slate-300 text-sm max-w-xl">
              Nossa equipe avalia as condições do subleito, escoamento de água e espessura ideal do CBUQ para sua necessidade.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl('Olá! Gostaria de agendar uma avaliação técnica na minha obra.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-sm uppercase tracking-wider rounded shadow-lg shadow-red-600/30 transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Engenheiro</span>
          </a>
        </div>
      </div>
    </section>
  );
};
