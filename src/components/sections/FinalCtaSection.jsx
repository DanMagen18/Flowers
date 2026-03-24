import React from 'react';
import { siteData } from '../../data/siteData';
import Button from '../ui/Button';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

function FinalCtaSection() {
  const [ref, isVisible] = useRevealOnScroll(0.2);
  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('שלום, אני רוצה להזמין פרחים')}`;

  return (
    <section className="section section-cta" ref={ref}>
      <div className="container">
        <div className={`cta-content ${isVisible ? 'reveal' : ''}`}>
          <h2 className="cta-title">מוכנים להפתיע מישהו מיוחד?</h2>
          <p className="cta-subtitle">
            צרו איתנו קשר עכשיו ותנו לנו ליצור עבורכם את זר הפרחים המושלם
          </p>

          <div className="cta-buttons">
            <Button href={whatsappLink} size="large">
              הזמינו עכשיו בווטסאפ
            </Button>
            <Button to="/contact" variant="secondary" size="large">
              צרו קשר
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
