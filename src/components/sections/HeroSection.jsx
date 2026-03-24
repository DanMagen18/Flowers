import React from 'react';
import { siteData } from '../../data/siteData';
import Button from '../ui/Button';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

function HeroSection() {
  const [ref, isVisible] = useRevealOnScroll(0.2);
  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('שלום, אני מעוניין לשמוע עוד על הפרחים שלכם')}`;

  return (
    <section className="hero" ref={ref}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="/image.png"
          alt="פרחים יוקרתיים"
          className="hero-image"
        />
      </div>

      <div className="container">
        <div className={`hero-content ${isVisible ? 'reveal' : ''}`}>
          <h1 className="hero-title">{siteData.hero.title}</h1>
          <p className="hero-subtitle">{siteData.hero.subtitle}</p>

          <div className="hero-cta">
            <Button to="/collections" size="large">
              {siteData.hero.primaryCta}
            </Button>
            <Button href={whatsappLink} variant="secondary" size="large">
              {siteData.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
