import React from 'react';
import { siteData } from '../../data/siteData';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

function DeliverySection() {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container">
        <div className={isVisible ? 'reveal' : ''}>
          <SectionTitle
            title="משלוחים מהירים לכל המרכז"
            subtitle="אנו מבטיחים שהפרחים יגיעו אליכם טריים ומושלמים"
            centered
          />

          <div className="delivery-info">
            <div className="delivery-card">
              <h3 className="delivery-card-title">איזורי משלוח</h3>
              <p className="delivery-card-text">{siteData.delivery.areas}</p>
            </div>

            <div className="delivery-card">
              <h3 className="delivery-card-title">משלוח באותו היום</h3>
              <p className="delivery-card-text">{siteData.delivery.sameDay}</p>
            </div>

            <div className="delivery-card">
              <h3 className="delivery-card-title">שעות פעילות</h3>
              <p className="delivery-card-text">{siteData.delivery.hours}</p>
            </div>
          </div>

          <div className="section-cta">
            <Button to="/delivery" variant="secondary" size="large">
              פרטי משלוחים מלאים
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySection;
