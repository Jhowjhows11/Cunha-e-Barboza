import React from 'react';
import { Compass, Truck, Layers, CheckCircle2, Shield, Wrench, Flame, Check } from 'lucide-react';
import { DIFFERENTIALS_DATA, COMPANY_INFO } from '../data/content';

export const DifferentialsSection: React.FC = () => {
  const getDifferentialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-7 h-7 text-red-500" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-red-500" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-red-500" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-red-500" />;
      default:
        return <Shield className="w-7 h-7 text-red-500" />;
    }
  };

  return (
    <section 
      id="diferenciais"
      className="py-20 lg:py-28 bg-[#080E21] relative overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-blue-950 border border-blue-900/80 text-slate-300 text-xs font-heading font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Pilares de Confiança</span>
          </div>

          <h2 
            id="differentials-heading"
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight"
          >
            Por que escolher a Cunha & Barboza?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Qualidade técnica comprovada em cada metro quadrado executado, assegurando durabilidade contra peso, calor e umidade.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS_DATA.map((diff, index) => (
            <div
              key={diff.id}
              id={`differential-card-${diff.id}`}
              className="bg-blue-950/80 border border-blue-900/60 hover:border-red-600/50 p-6 sm:p-8 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Icon and Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-lg bg-slate-950 border border-blue-900/80 group-hover:border-red-600/40 group-hover:bg-red-950/20 transition-all">
                    {getDifferentialIcon(diff.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                    {diff.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-red-400 transition-colors">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {diff.desc}
                </p>
              </div>

              {/* Technical highlight indicator */}
              <div className="pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                  <span>Padrão Cunha & Barboza</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Garantia Técnica"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Value Proposition Strip */}
        <div className="mt-12 bg-blue-950/50 border border-blue-900/60 rounded-lg p-6 flex flex-wrap items-center justify-around gap-6 text-center">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Massa Asfáltica</span>
            <p className="font-heading font-bold text-white text-base">CBUQ Usinado a Quente</p>
          </div>
          <div className="h-8 w-px bg-blue-900/60 hidden sm:block" />
          
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Nivelamento</span>
            <p className="font-heading font-bold text-white text-base">Fresagem a Frio sem Degraus</p>
          </div>
          <div className="h-8 w-px bg-blue-900/60 hidden sm:block" />

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Selagem de Vazios
            </span>
            <p className="font-heading font-bold text-white text-base">
              Compactação com <span className="text-amber-400">Linha Amarela</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
