import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Flame, Gauge, Wrench } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/content';

export const ExecutionProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Gauge className="w-5 h-5 text-red-500" />;
      case 1:
        return <Layers className="w-5 h-5 text-red-500" />;
      case 2:
        return <Flame className="w-5 h-5 text-red-500" />;
      case 3:
        return <Wrench className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section 
      id="processo"
      className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-heading font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Rigor Operacional em 4 Etapas</span>
          </div>

          <h2 
            id="process-heading"
            className="font-heading font-black text-3xl sm:text-5xl text-[#080E21] tracking-tight"
          >
            Nosso Método de Execução
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Cada etapa é executada com maquinário específico e controle rigoroso para assegurar a aderência estrutural e a máxima vida útil da sua via.
          </p>
        </div>

        {/* Timeline on Desktop (Connected by Red Line) & Cards */}
        <div className="relative mb-16">
          {/* Connecting Red Guide Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-slate-300 -z-0">
            <div 
              className="h-full bg-red-600 transition-all duration-500" 
              style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          {/* 4 Steps Grid / Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <div
                  key={step.number}
                  id={`process-step-${step.number}`}
                  onClick={() => setActiveStepIndex(index)}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-red-600 shadow-xl shadow-red-600/10 -translate-y-1'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Header with Large Number and Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span 
                          className={`font-heading font-black text-3xl sm:text-4xl transition-colors ${
                            isActive ? 'text-red-600' : 'text-slate-400'
                          }`}
                        >
                          {step.number}
                        </span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/40">
                          {step.tag}
                        </span>
                      </div>

                      <div className={`p-2.5 rounded-lg border transition-all ${
                        isActive 
                          ? 'bg-red-600/10 border-red-600/30 text-red-600' 
                          : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}>
                        {getStepIcon(index)}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-heading font-bold text-lg text-[#080E21] mb-2.5 flex items-center gap-2">
                      <span>{step.title}</span>
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Indicator to inspect details */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className={isActive ? 'text-red-600' : 'text-slate-500'}>
                      {isActive ? 'Etapa selecionada' : 'Clique para inspecionar'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-red-600' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Technical Showcase Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Image */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-slate-200 group">
              <img
                src={PROCESS_STEPS[activeStepIndex].image}
                alt={PROCESS_STEPS[activeStepIndex].title}
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="text-xs font-mono uppercase bg-red-600 text-white font-bold px-2.5 py-1 rounded">
                    Etapa {PROCESS_STEPS[activeStepIndex].number} em Execução
                  </span>
                  <p className="text-white font-heading font-bold text-lg mt-2">
                    {PROCESS_STEPS[activeStepIndex].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Step Technical Specifications */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#080E21] text-white font-mono font-bold text-sm rounded">
                  ETAPA {PROCESS_STEPS[activeStepIndex].number}
                </span>
                <h4 className="font-heading font-bold text-2xl text-[#080E21]">
                  {PROCESS_STEPS[activeStepIndex].title}
                </h4>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].fullDesc}
              </p>

              {/* Technical Specifications Checklist */}
              <div className="space-y-2.5 pt-2">
                <h5 className="text-xs uppercase tracking-wider text-slate-700 font-heading font-bold flex items-center gap-2">
                  <span>Parâmetros e Normas Técnicas:</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                </h5>
                {PROCESS_STEPS[activeStepIndex].specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className={`w-5 h-5 rounded ${idx % 2 === 1 ? 'bg-amber-500/10 text-amber-600' : 'bg-red-600/10 text-red-600'} flex items-center justify-center shrink-0`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.whatsappUrl(`Olá! Gostaria de tirar dúvidas sobre o método de ${PROCESS_STEPS[activeStepIndex].title} para minha obra.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded shadow transition-colors"
                >
                  <span>Solicitar Proposta para esta Etapa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {activeStepIndex < PROCESS_STEPS.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex(prev => prev + 1)}
                    className="text-xs font-semibold text-slate-600 hover:text-red-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Próxima etapa: {PROCESS_STEPS[activeStepIndex + 1].title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
