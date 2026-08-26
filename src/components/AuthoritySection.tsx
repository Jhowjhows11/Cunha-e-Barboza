import React from 'react';
import { Layers, CheckCircle2, ShieldCheck, Activity, Star } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AuthoritySection: React.FC = () => {
  return (
    <section 
      id="autoridade"
      className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-heading font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Compromisso Técnico</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          </div>

          <h2 
            id="authority-heading"
            className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-[#080E21] tracking-tight"
          >
            <span className="text-red-600 relative">
              Engenharia
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-red-600 rounded-full"></span>
            </span>{' '}
            de Pavimentação
          </h2>

          <div className="flex items-center gap-1.5 pt-1 text-amber-500">
            <Star className="w-4 h-4 fill-amber-500" />
            <Star className="w-4 h-4 fill-amber-500" />
            <Star className="w-4 h-4 fill-amber-500" />
            <Star className="w-4 h-4 fill-amber-500" />
            <Star className="w-4 h-4 fill-amber-500" />
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest ml-1">
              Rigor &amp; Padrão ABNT
            </span>
          </div>
        </div>

        {/* Featured Authority Statement Box */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-slate-50 border-2 border-red-600/30 rounded-xl p-8 sm:p-12 shadow-lg text-center">
            {/* Corner Industrial Marks */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500"></div>

            <p className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-[#080E21] leading-snug sm:leading-relaxed">
              &ldquo;A durabilidade de uma via não se resume à aplicação da massa. Nosso método garante <span className="text-red-600 underline decoration-red-600/40">aderência estrutural</span> e <span className="text-[#080E21]">resistência a cargas pesadas</span> através de preparação técnica rigorosa.&rdquo;
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs uppercase tracking-widest text-slate-700 font-semibold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                Sem atalhos operacionais
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Camadas tecnicamente dosadas
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                Compactação de alta densidade
              </span>
            </div>
          </div>
        </div>

        {/* Visual Engineering Grid: 3 Pillars of Superior Road Pavement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 border border-slate-200 hover:border-red-600/40 p-6 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#080E21]">
              Dimensionamento de Base
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Não aplicamos massa sobre terreno instável. O solo é nivelado, drenado e compactado para suportar o peso real dos veículos sem ceder.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 hover:border-red-600/40 p-6 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-600">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#080E21]">
              Controle Térmico & CBUQ
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              O asfalto a quente é lançado em temperatura exata para garantir homogeneidade química, viscosidade ideal do ligante e vedação de microvazios.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 hover:border-amber-500/40 p-6 rounded-xl space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#080E21] flex items-center justify-between">
              <span>Maquinário Linha Amarela</span>
              <span className="text-[10px] text-amber-700 font-mono bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/40 font-bold uppercase">PRO</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fresadoras, vibroacabadoras e rolos compactadores tandem pesados garantem a rugosidade, planicidade e acabamento rodoviário contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
