import React, { useState } from 'react';
import { Calculator, Send, MessageSquare, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const EstimatorSection: React.FC = () => {
  const [area, setArea] = useState<number>(500);
  const [serviceType, setServiceType] = useState<string>('recapeamento');
  const [trafficType, setTrafficType] = useState<string>('medio');
  const [thickness, setThickness] = useState<number>(4);

  const serviceNames: Record<string, string> = {
    recapeamento: 'Recapeamento Asfáltico sobre Pavimento Existente',
    pavimentacao_completa: 'Pavimentação Completa (com Preparo de Base e Subleito)',
    fresagem_recape: 'Fresagem Milimétrica + Nova Capa CBUQ',
    apenas_cbuq: 'Aplicação e Compactação de CBUQ'
  };

  const trafficNames: Record<string, string> = {
    leve: 'Tráfego Leve (Carros de passeio e pedestres)',
    medio: 'Tráfego Médio (Caminhões médios, vans e ônibus)',
    pesado: 'Tráfego Pesado (Carretas, bitrens e empilhadeiras pesadas)'
  };

  const generateWhatsAppMessage = () => {
    const text = `*SOLICITAÇÃO DE ORÇAMENTO TÉCNICO - CUNHA & BARBOZA*
----------------------------------------
*Área aproximada:* ${area.toLocaleString('pt-BR')} m²
*Serviço desejado:* ${serviceNames[serviceType] || serviceType}
*Espessura estimada de CBUQ:* ${thickness} cm compactado
*Tipo de tráfego esperado:* ${trafficNames[trafficType] || trafficType}
----------------------------------------
Olá! Gostaria de receber uma estimativa e agendar uma avaliação técnica para a minha obra.`;
    return COMPANY_INFO.whatsappUrl(text);
  };

  return (
    <section 
      id="simulador"
      className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context and Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-red-600/10 border border-red-600/30 text-red-600 text-xs font-heading font-bold uppercase tracking-widest">
              <Calculator className="w-3.5 h-3.5 text-red-600" />
              <span>Simulador Técnico de Obra</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#080E21] tracking-tight leading-tight">
              Calcule a estimativa prévia da sua área
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Informe a metragem aproximada e o tipo de uso para montarmos uma proposta preliminar personalizada diretamente no WhatsApp com nossa equipe de engenharia.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Atendimento rápido e sem compromisso</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Massa asfáltica CBUQ com nota fiscal e laudo técnico</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Visita técnica no local para confirmação de greide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-heading font-bold text-lg text-[#080E21]">
                  Configuração dos Parâmetros
                </h3>
                <span className="text-xs font-mono font-bold text-red-600 bg-red-600/10 border border-red-600/20 px-2.5 py-1 rounded">
                  Simulação Direta
                </span>
              </div>

              {/* Area Slider & Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="area-slider" className="text-sm font-semibold text-slate-700">
                    Área Total Estimada (m²):
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="area-number-input"
                      type="number"
                      min={50}
                      max={100000}
                      step={50}
                      value={area}
                      onChange={(e) => setArea(Math.max(50, Number(e.target.value)))}
                      className="w-28 px-3 py-1.5 bg-slate-50 border border-slate-200 text-[#080E21] font-mono font-bold text-sm text-right rounded focus:outline-none focus:border-red-600"
                    />
                    <span className="text-xs text-slate-500 font-mono">m²</span>
                  </div>
                </div>

                <input
                  id="area-slider"
                  type="range"
                  min={100}
                  max={10000}
                  step={100}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>100 m²</span>
                  <span>2.500 m²</span>
                  <span>5.000 m²</span>
                  <span>10.000+ m²</span>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Tipo de Serviço Necessário:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'recapeamento', name: 'Recapeamento Asfáltico' },
                    { id: 'pavimentacao_completa', name: 'Pavimentação do Zero' },
                    { id: 'fresagem_recape', name: 'Fresagem + Recape' },
                    { id: 'apenas_cbuq', name: 'Aplicação de CBUQ' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`p-3 text-left text-xs font-semibold rounded-lg border transition-all ${
                        serviceType === s.id
                          ? 'bg-red-600/10 border-red-600 text-red-700 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Traffic / Load Selection */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Intensidade de Carga / Tráfego:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'leve', label: 'Leve', sub: 'Veículos' },
                    { id: 'medio', label: 'Médio', sub: 'Vans/Caminhões' },
                    { id: 'pesado', label: 'Pesado', sub: 'Carretas' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTrafficType(t.id)}
                      className={`p-2.5 text-center rounded border transition-all ${
                        trafficType === t.id
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <div className="font-heading font-bold text-xs">{t.label}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Summary & Action */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Volume Estimado</span>
                    <span className="text-[10px] font-mono font-bold text-amber-700 bg-amber-400/20 px-2 py-0.5 rounded border border-amber-400/40">CBUQ + Frota Amarela</span>
                  </div>
                  <div className="font-heading font-bold text-lg text-[#080E21]">
                    {area.toLocaleString('pt-BR')} m² de Asfalto Técnico
                  </div>
                </div>

                <a
                  id="simulator-send-whatsapp"
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow-lg shadow-red-600/30 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Orçamento no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
