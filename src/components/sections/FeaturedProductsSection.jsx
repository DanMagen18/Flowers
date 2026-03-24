import React from 'react';
import { siteData } from '../../data/siteData';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import useRevealOnScroll from '../../hooks/useRevealOnScroll';

function FeaturedProductsSection() {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const featuredProducts = siteData.products.filter(p => p.featured);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className={isVisible ? 'reveal' : ''}>
          <SectionTitle
            title="הקולקציה המובחרת שלנו"
            subtitle="כל זר פרחים הוא יצירת אומנות ייחודית שנוצרת במיוחד עבורכם"
            centered
          />

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="section-cta">
            <Button to="/collections" size="large">
              צפו בכל הקולקציות
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
