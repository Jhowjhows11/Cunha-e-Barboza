import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Send, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const CtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [area, setArea] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*SOLICITAÇÃO DE ORÇAMENTO VIA SITE - CUNHA & BARBOZA*
-----------------------------------------
*Nome:* ${name}
*Telefone/WhatsApp:* ${phone}
*Cidade/Região:* ${city}
*Área aproximada:* ${area || 'A calcular'}
*Detalhes:* ${notes || 'Solicito contato para orçamento técnico.'}
-----------------------------------------`;
    
    window.open(COMPANY_INFO.whatsappUrl(msg), '_blank');
    setSubmitted(true);
  };

  return (
    <section 
      id="contato"
      className="py-20 lg:py-32 bg-[#080E21] relative overflow-hidden border-t border-blue-900/40"
    >
      {/* Background Heavy Machinery Photo with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=2000&q=80"
          alt="Obra de pavimentação asfáltica pesada com rolo compactador"
          className="w-full h-full object-cover object-center opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E21] via-[#080E21]/95 to-[#080E21]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-red-600/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-heading font-bold uppercase tracking-widest shadow">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <span>Orçamento Imediato</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Atendimento Estadual</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 
                id="cta-title"
                className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
              >
                Sua obra precisa de uma <span className="text-red-500">pavimentação de verdade?</span>
              </h2>

              <p 
                id="cta-description"
                className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl"
              >
                Fale com a <strong className="text-white font-semibold">Cunha & Barboza Pavimentação</strong> e solicite uma avaliação técnica para a sua necessidade.
              </p>
            </div>

            {/* Direct High-Impact WhatsApp Button */}
            <div className="pt-2">
              <a
                id="cta-main-whatsapp-btn"
                href={COMPANY_INFO.whatsappUrl('Olá! Gostaria de falar com a equipe da Cunha & Barboza para solicitar um orçamento de pavimentação.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-heading font-black text-base sm:text-lg uppercase tracking-wider rounded-lg shadow-2xl shadow-red-600/50 hover:shadow-red-600/70 transition-all duration-300 transform hover:-translate-y-1 group w-full sm:w-auto"
              >
                <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Solicitar Orçamento pelo WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                Resposta rápida
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Visita técnica no local
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                Proposta detalhada
              </span>
            </div>
          </div>

          {/* Quick Contact Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-blue-950/90 border border-blue-900/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <div className="border-b border-blue-900/60 pb-4 mb-6">
                <h3 className="font-heading font-bold text-xl text-white">
                  Envie os dados da sua obra
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Receba um retorno técnico da nossa equipe de engenharia.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Seu Nome / Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva / Construtora"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-blue-900/80 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-blue-900/80 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Cidade / Local da Obra *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: São Paulo, Campinas, etc."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-blue-900/80 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Área Estimada (m²)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 800 m²"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-blue-900/80 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Descrição do Serviço / Necessidade
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Recapeamento de vias de condomínio, asfalto para pátio de carretas, fresagem de asfalto antigo..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-blue-900/80 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-sm uppercase tracking-wider rounded shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação Direto no WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
