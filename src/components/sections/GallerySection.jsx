import React from 'react';
import { siteData } from '../../data/siteData';
import SectionTitle from '../ui/SectionTitle';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

function GallerySection() {
  const [ref, isVisible] = useRevealOnScroll(0.1);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className={isVisible ? 'reveal' : ''}>
          <SectionTitle
            title="גלריית השראה"
            subtitle="הציצו אל עולם היופי והיצירתיות שלנו"
            centered
          />

          <div className="gallery-grid">
            {siteData.gallery.map((item, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
