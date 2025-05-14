
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import FactsSection from '@/components/FactsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollAnimationHandler from '@/components/ScrollAnimationHandler';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-light">
      <ScrollAnimationHandler />
      <Header />
      <Hero />
      <AboutSection />
      <GallerySection />
      <FactsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
