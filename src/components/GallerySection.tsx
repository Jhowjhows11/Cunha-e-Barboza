import React, { useState } from 'react';
import { ZoomIn, Filter, Eye, Layers } from 'lucide-react';
import { GALLERY_DATA, GalleryItem } from '../data/content';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const filterCategories = [
    { id: 'todos', label: 'Todas as Obras' },
    { id: 'compactacao', label: 'Compactação' },
    { id: 'cbuq', label: 'Aplicação CBUQ' },
    { id: 'fresagem', label: 'Fresagem' },
    { id: 'subleito', label: 'Base e Solo' },
    { id: 'final', label: 'Tapetão Concluído' }
  ];

  const filteredItems = activeFilter === 'todos' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <section 
      id="obras"
      className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-heading font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Portfólio em Campo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          </div>

          <h2 
            id="gallery-heading"
            className="font-heading font-black text-3xl sm:text-5xl text-[#080E21] tracking-tight"
          >
            Obras Realizadas
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Registros de nossas operações: maquinário de grande porte, rigor técnico em cada etapa e acabamento rodoviário contínuo.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-white text-slate-700 hover:text-red-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => onOpenLightbox(item)}
              className={`group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-red-600/60 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 ${
                item.span || ''
              }`}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Gradient and Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-950/80 backdrop-blur-md text-slate-200 text-xs font-mono px-3 py-1 rounded border border-white/10 uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon Top Right */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-red-600 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Description Bottom */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Action Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-mono">
            Fotos reais de maquinário e execução técnica em obras
          </p>
        </div>
      </div>
    </section>
  );
};
