import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Diagnóstico', href: '#problemas' },
    { label: 'Engenharia', href: '#autoridade' },
    { label: 'Contato', href: '#main-footer' }
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-md py-2 sm:py-2.5' 
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a 
            href="#inicio" 
            id="brand-logo-link"
            className="flex items-center shrink-0 mr-4 lg:mr-6 xl:mr-10 group focus:outline-none"
            aria-label="Cunha & Barboza Pavimentação Home"
          >
            <img 
              src={COMPANY_INFO.logoUrl} 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = COMPANY_INFO.logoRemoteUrl;
              }}
              alt={COMPANY_INFO.name} 
              className="h-16 sm:h-20 md:h-[82px] w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8" aria-label="Navegação principal">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs xl:text-sm font-heading font-bold uppercase tracking-wider transition-colors relative py-1 whitespace-nowrap ${
                  idx === 0 
                    ? 'text-red-600 after:w-full after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0' 
                    : 'text-[#080E21] hover:text-red-600 after:w-0 hover:after:w-full after:h-0.5 after:bg-red-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Right Button */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl('Olá! Solicito um orçamento para pavimentação asfáltica.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg shadow-red-600/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#080E21] hover:text-red-600 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#080E21] border-b border-blue-900/60 px-5 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded text-base font-medium text-slate-200 hover:text-white hover:bg-blue-950 border-l-2 border-transparent hover:border-red-600 transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-blue-900/60">
            <a
              href={COMPANY_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-sm uppercase tracking-wider rounded shadow-lg shadow-red-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
