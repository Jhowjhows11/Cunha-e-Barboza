import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AuthoritySection } from './components/AuthoritySection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080E21] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem Section: "Seu asfalto está degradado?" */}
        <ProblemSection />

        {/* 4. Authority Section: "Engenharia de Pavimentação" */}
        <AuthoritySection />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Persistent Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
