import React from 'react';
import { siteData } from '../../data/siteData';
import SectionTitle from '../ui/SectionTitle';
import InfoCard from '../ui/InfoCard';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

function BenefitsSection() {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container">
        <div className={isVisible ? 'reveal' : ''}>
          <SectionTitle
            title="למה לבחור בנו?"
            subtitle="אנחנו לא רק מוכרים פרחים, אנחנו יוצרים חוויות בלתי נשכחות"
            centered
          />

          <div className="benefits-grid">
            {siteData.benefits.map((benefit, index) => (
              <InfoCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
