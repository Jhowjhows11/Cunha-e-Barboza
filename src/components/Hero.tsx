import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section 
      id="inicio" 
      className="relative overflow-hidden bg-white"
    >
      {/* ================= DESKTOP VERSION (RESTORED ORIGINAL) ================= */}
      <div className="hidden lg:flex relative min-h-[92vh] items-center pt-28 pb-16 w-full">
        {/* Right-Side Compactor Video Background Container */}
        <div className="absolute right-0 top-0 bottom-0 w-[68%] h-full z-0 overflow-hidden pointer-events-none">
          
          {/* Native Autoplay Video Tag without Controls */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src="/videos/Rolo%20compactador.mp4" type="video/mp4" />
              <source src="/videos/pavimentacao.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Inverted Half-Moon Curved Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <svg 
              className="absolute inset-0 w-full h-full preserve-3d" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="moonFeather" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="32" />
                </filter>

                <mask id="invertedMoonMask">
                  <rect width="1000" height="1000" fill="black" />
                  <path 
                    d="M -100,-100 L 480,-100 C 180,260 180,740 480,1100 L -100,1100 Z" 
                    fill="white" 
                    filter="url(#moonFeather)"
                  />
                </mask>

                <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="0.98" />
                  <stop offset="80%" stopColor="#ffffff" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              <rect 
                width="1000" 
                height="1000" 
                fill="url(#moonGradient)" 
                mask="url(#invertedMoonMask)" 
              />
            </svg>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-5">

            <div className="space-y-2.5">
              <h1 
                id="hero-title"
                className="font-heading font-black text-2xl sm:text-4xl md:text-5xl text-[#080E21] tracking-tight leading-[1.1] text-balance"
              >
                INFRAESTRUTURA <br />
                <span className="text-red-600">QUE CONSTRÓI</span> <br />
                O FUTURO<span className="text-red-600">.</span>
              </h1>

              <p 
                id="hero-subtitle"
                className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-md text-pretty"
              >
                Excelência em pavimentação e soluções de engenharia para obras públicas e privadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
              <a
                id="hero-cta-whatsapp"
                href={COMPANY_INFO.whatsappUrl('Olá! Gostaria de falar com a equipe de engenharia da Cunha & Barboza sobre meu projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-heading font-bold text-xs tracking-wide rounded-full shadow-md shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <MessageSquare className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
                <span>FALE CONOSCO</span>
              </a>

              <a
                id="hero-cta-services"
                href="#servicos"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#080E21] font-heading font-bold text-xs rounded-full border-2 border-[#080E21] hover:border-red-600 transition-all duration-200 shadow-xs"
              >
                <span>NOSSOS SERVIÇOS</span>
                <ArrowRight className="w-3 h-3 text-red-600" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="lg:hidden relative min-h-[90vh] flex items-center pt-28 pb-16 w-full">
        {/* Background Video Container (Full width & height) */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          {/* Native Autoplay Video Tag without Controls */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src="/videos/Rolo%20compactador.mp4" type="video/mp4" />
              <source src="/videos/pavimentacao.mp4" type="video/mp4" />
            </video>
          </div>

          {/* White Veil Gradient Overlay for Mobile - Strong Opaque White at Top/Left, dissolving smoothly downwards and towards top-right */}
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {/* Primary Radial Mass: Solid white at top-left (covering title/subtitle/buttons), fading smoothly down and towards top-right */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 125% 90% at 0% 0%, 
                    rgba(255, 255, 255, 1) 0%, 
                    rgba(255, 255, 255, 1) 40%, 
                    rgba(255, 255, 255, 0.82) 56%, 
                    rgba(255, 255, 255, 0.48) 72%, 
                    rgba(255, 255, 255, 0.10) 86%, 
                    rgba(255, 255, 255, 0) 100%
                  )
                `
              }}
            />

            {/* Vertical Dissolve: Guarantees strong clean white over text at top-left and smooth fade downwards */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to bottom, 
                    rgba(255, 255, 255, 0.88) 0%, 
                    rgba(255, 255, 255, 0.78) 30%, 
                    rgba(255, 255, 255, 0.35) 60%, 
                    rgba(255, 255, 255, 0) 88%
                  )
                `
              }}
            />
          </div>
        </div>

        {/* Mobile Hero Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 w-full">
          <div className="max-w-xl space-y-6 text-left">

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 
                id="hero-title-mobile"
                className="font-heading font-black text-3xl sm:text-5xl text-[#080E21] tracking-tight leading-[1.1] text-balance"
              >
                INFRAESTRUTURA <br />
                <span className="text-red-600">QUE CONSTRÓI</span> <br />
                O FUTURO<span className="text-red-600">.</span>
              </h1>

              {/* Subtitle */}
              <p 
                id="hero-subtitle-mobile"
                className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed max-w-md text-pretty"
              >
                Excelência em pavimentação e soluções de engenharia para obras públicas e privadas.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 max-w-xs sm:max-w-none">
              {/* Primary CTA */}
              <a
                id="hero-cta-whatsapp-mobile"
                href={COMPANY_INFO.whatsappUrl('Olá! Gostaria de falar com a equipe de engenharia da Cunha & Barboza sobre meu projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-heading font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-md shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <MessageSquare className="w-4 h-4 group-hover:scale-105 transition-transform" />
                <span>FALE CONOSCO</span>
              </a>

              {/* Secondary CTA */}
              <a
                id="hero-cta-services-mobile"
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 hover:bg-white backdrop-blur-md text-[#080E21] font-heading font-bold text-xs sm:text-sm tracking-wider rounded-xl border border-slate-300 hover:border-red-600 transition-all duration-200 shadow-xs"
              >
                <span>NOSSOS SERVIÇOS</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};



