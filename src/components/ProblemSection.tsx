import React from 'react';
import { AlertTriangle, ShieldAlert, TrendingDown, ArrowUpRight } from 'lucide-react';
import { PROBLEMS_DATA, COMPANY_INFO } from '../data/content';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="problemas"
      className="pt-3 lg:pt-8 pb-10 lg:pb-28 bg-white border-y border-slate-200 relative overflow-hidden text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 
            id="problem-heading"
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          >
            Seu asfalto está degradado?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Remendos provisórios e tapas-buracos superficiais não corrigem a base estrutural e geram custos contínuos sem solução definitiva.
          </p>
        </div>

        {/* 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Local Video (Asphato.mp4) maintaining exact dimensions and positioning */}
          <div className="lg:col-span-6 relative z-0">
            <div className="relative overflow-hidden w-[110%] lg:w-[154%] aspect-video bg-transparent pointer-events-none select-none translate-x-[1%] lg:-translate-x-[20%] -translate-y-[10%] rounded-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              >
                <source src="/videos/Asphato.mp4" type="video/mp4" />
              </video>
              {/* Invisible Overlay Shield */}
              <div className="absolute inset-0 bg-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Right Column: 3 Core Problems Highlight */}
          <div className="lg:col-span-6 space-y-4 relative z-10">
            <div className="space-y-3">
              {PROBLEMS_DATA.map((problem) => (
                <div
                  key={problem.id}
                  id={`problem-card-${problem.id}`}
                  className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-red-300 p-3.5 sm:p-4 rounded-xl transition-all duration-200 group relative"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-200 shrink-0">
                      {getIcon(problem.icon)}
                    </div>
                    
                    <div className="space-y-0.5 flex-1">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-red-600 transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {problem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transition to Solution Box */}
            <div className="bg-slate-900 text-white border border-slate-800 p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-heading font-bold text-base sm:text-lg">
                  A solução definitiva: Engenharia de Pavimentação
                </p>
                <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                  Método com fresagem, correção da base e CBUQ rodoviário compactado.
                </p>
              </div>

              <a
                href={COMPANY_INFO.whatsappUrl('Olá! Preciso de um diagnóstico e orçamento para recuperar nosso asfalto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg shrink-0 transition-all hover:scale-[1.02]"
              >
                <span>Solicitar Avaliação</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

