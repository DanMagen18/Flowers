import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import GallerySection from '../components/sections/GallerySection';
import DeliverySection from '../components/sections/DeliverySection';
import FinalCtaSection from '../components/sections/FinalCtaSection';

function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <FeaturedProductsSection />
      <BenefitsSection />
      <GallerySection />
      <DeliverySection />
      <FinalCtaSection />
    </PageContainer>
  );
}

export default HomePage;
