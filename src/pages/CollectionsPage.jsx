import React from 'react';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function CollectionsPage() {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('שלום, אני מעוניין בזר פרחים מותאם אישית')}`;

  return (
    <PageContainer>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">הקולקציות שלנו</h1>
            <p className="page-subtitle">
              גלו את המגוון המלא של זרי הפרחים היוקרתיים שלנו. כל זר הוא יצירה ייחודית שנוצרת במיוחד עבורכם עם תשומת לב מקסימלית לכל פרט.
            </p>
          </div>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className={isVisible ? 'reveal' : ''}>
            <div className="products-grid">
              {siteData.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            <div className="section-cta-box">
              <h3 className="cta-box-title">מחפשים משהו מיוחד במיוחד?</h3>
              <p className="cta-box-text">
                אנחנו יכולים ליצור עבורכם זר פרחים מותאם אישית לפי העדפותיכם והסגנון שלכם
              </p>
              <Button href={whatsappLink} size="large">
                בואו נדבר
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default CollectionsPage;
