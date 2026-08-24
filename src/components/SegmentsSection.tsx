import React from 'react';
import { Factory, Home, Car, Truck, MapPin, HardHat, ArrowRight } from 'lucide-react';
import { SEGMENTS_DATA, COMPANY_INFO } from '../data/content';

export const SegmentsSection: React.FC = () => {
  const getSegmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory':
        return <Factory className="w-5 h-5 text-red-500" />;
      case 'Home':
        return <Home className="w-5 h-5 text-red-500" />;
      case 'Car':
        return <Car className="w-5 h-5 text-red-500" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-red-500" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-red-500" />;
      case 'HardHat':
        return <HardHat className="w-5 h-5 text-red-500" />;
      default:
        return <HardHat className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section 
      id="segmentos"
      className="py-20 lg:py-28 bg-[#080E21] relative overflow-hidden border-t border-blue-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-blue-950 border border-blue-900/80 text-slate-300 text-xs font-heading font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Versatilidade e Atuação</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </div>

          <h2 
            id="segments-heading"
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight"
          >
            Pavimentação para diferentes necessidades
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Dimensionamos a estrutura do pavimento de acordo com a carga de tráfego, tipo de solo e objetivo específico de cada projeto.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEGMENTS_DATA.map((segment, idx) => (
            <div
              key={segment.id}
              id={`segment-card-${segment.id}`}
              className="bg-blue-950/80 hover:bg-blue-950 border border-blue-900/60 hover:border-red-600/40 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image with Dark Vignette */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent" />
                
                {/* Icon in floating badge */}
                <div className="absolute bottom-3 left-4 p-2.5 rounded-lg bg-slate-950/90 border border-blue-900/80 text-red-500 backdrop-blur-md flex items-center gap-2">
                  {getSegmentIcon(segment.iconName)}
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 pt-3 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                    {segment.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {segment.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-900/60">
                  <a
                    href={COMPANY_INFO.whatsappUrl(`Olá! Gostaria de consultar orçamento para pavimentação em ${segment.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-bold uppercase tracking-wider text-red-400 hover:text-red-300 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Orçar para {segment.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
