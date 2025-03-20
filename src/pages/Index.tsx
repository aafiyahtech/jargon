
import React, { useEffect } from 'react';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TeamSection from '@/components/sections/TeamSection';
import FundingSection from '@/components/sections/FundingSection';
import ContactSection from '@/components/sections/ContactSection';
import AsFeaturedinSection from '@/components/sections/AsFeaturedinSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import InteractiveSection from '@/components/sections/InteractiveSection';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a');
      
      if (anchorElement && anchorElement.hash && anchorElement.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchorElement.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Toaster />
      <NavBar />
      
      <main>
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <AsFeaturedinSection />
        <AboutSection />
        <TeamSection />
        <InteractiveSection />
        <FundingSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
