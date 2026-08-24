import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AuthoritySection } from './components/AuthoritySection';
import { ExecutionProcess } from './components/ExecutionProcess';
import { ServicesSection } from './components/ServicesSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { GallerySection } from './components/GallerySection';
import { SegmentsSection } from './components/SegmentsSection';
import { EstimatorSection } from './components/EstimatorSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceModal } from './components/ServiceModal';
import { LightboxModal } from './components/LightboxModal';
import { ServiceItem, GalleryItem } from './data/content';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const handleOpenEstimator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080E21] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar onOpenEstimator={handleOpenEstimator} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenEstimator={handleOpenEstimator} />

        {/* 3. Problem Section: "Seu asfalto está degradado?" */}
        <ProblemSection />

        {/* 4. Authority Section: "Engenharia de Pavimentação" */}
        <AuthoritySection />

        {/* 5. Process: "Nosso método de execução" */}
        <ExecutionProcess />

        {/* 6. Services: "Soluções em Pavimentação e Infraestrutura" */}
        <ServicesSection onSelectService={setSelectedService} />

        {/* 7. Differentials: "Por que escolher a Cunha & Barboza?" */}
        <DifferentialsSection />

        {/* 8. Gallery: "Obras realizadas" */}
        <GallerySection onOpenLightbox={setSelectedGalleryItem} />

        {/* 9. Segments: "Pavimentação para diferentes necessidades" */}
        <SegmentsSection />

        {/* 10. Technical Estimator / Calculator */}
        <EstimatorSection />

        {/* 11. Conversion CTA: "Sua obra precisa de uma pavimentação de verdade?" */}
        <CtaSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Persistent Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
