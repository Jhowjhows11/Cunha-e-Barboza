import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050914] border-t border-blue-900/60 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img 
                src={COMPANY_INFO.logoUrl} 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = COMPANY_INFO.logoRemoteUrl;
                }}
                alt={COMPANY_INFO.name} 
                className="h-16 sm:h-20 md:h-[82px] w-auto object-contain bg-white/90 px-3 py-1.5 rounded-lg"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Engenharia especializada em pavimentação asfáltica CBUQ, fresagem a frio, preparação de subleito e compactação térmica pesada para condomínios, indústrias e infraestrutura.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Equipe Técnica em Prontidão</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs border-l-2 border-red-600 pl-2">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#problemas" className="text-slate-400 hover:text-white transition-colors">
                  Diagnóstico
                </a>
              </li>
              <li>
                <a href="#autoridade" className="text-slate-400 hover:text-white transition-colors">
                  Engenharia
                </a>
              </li>
              <li>
                <a href="#main-footer" className="text-slate-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs border-l-2 border-red-600 pl-2">
              Serviços Técnicos
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-slate-200 transition-colors">
                • Pavimentação Asfáltica CBUQ
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Recapeamento Asfáltico
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Fresagem a Frio Milimétrica
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Preparação de Subleito e Base
              </li>
              <li className="hover:text-slate-200 transition-colors flex items-center gap-1.5">
                <span>• Compactação Térmica com</span>
                <span className="text-amber-400 font-semibold">Linha Amarela</span>
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Infraestrutura Viária e Drenagem
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs border-l-2 border-red-600 pl-2">
              Canais de Contato
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href={COMPANY_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white group"
              >
                <div className="p-1.5 rounded bg-red-600/20 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a 
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white group"
              >
                <div className="p-1.5 rounded bg-blue-950 border border-blue-900/80 text-slate-400 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Telefone: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="p-1.5 rounded bg-blue-950 border border-blue-900/80 text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{COMPANY_INFO.email}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <div className="p-1.5 rounded bg-blue-950 border border-blue-900/80 text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Cunha & Barboza Pavimentação. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Engenharia & Soluções em Pavimentação</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-blue-950 hover:bg-blue-900 text-slate-400 hover:text-white rounded border border-blue-900/80 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
