import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

function ProductPage() {
  const { slug } = useParams();
  const product = siteData.products.find(p => p.slug === slug);

  if (!product) {
    return (
      <PageContainer>
        <section className="section">
          <div className="container">
            <div className="empty-state">
              <h2 className="empty-state-title">המוצר לא נמצא</h2>
              <p className="empty-state-text">
                מצטערים, המוצר שחיפשתם אינו קיים במערכת
              </p>
              <Button to="/collections">חזרה לקולקציות</Button>
            </div>
          </div>
        </section>
      </PageContainer>
    );
  }

  const whatsappMessage = `שלום, אני מעוניין להזמין את "${product.name}" (${product.price})`;
  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const relatedProducts = siteData.products
    .filter(p => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

  return (
    <PageContainer>
      <section className="section">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">ראשי</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/collections" className="breadcrumb-link">קולקציות</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{product.name}</span>
          </div>

          <div className="product-detail">
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-detail-content">
              <div className="product-detail-header">
                <span className="product-detail-category">{product.category}</span>
                <h1 className="product-detail-title">{product.name}</h1>
                <p className="product-detail-price">{product.price}</p>
              </div>

              <div className="product-detail-description">
                <p>{product.fullDescription}</p>
              </div>

              <div className="product-detail-features">
                <h3 className="product-detail-features-title">מה כולל הזר:</h3>
                <ul className="product-detail-list">
                  {product.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="product-detail-actions">
                <Button href={whatsappLink} size="large">
                  הזמינו עכשיו
                </Button>
                <Button to="/contact" variant="secondary" size="large">
                  שאלות? צרו קשר
                </Button>
              </div>

              <div className="product-detail-note">
                <p>
                  כל זר פרחים נוצר בהזמנה אישית ומגיע עם הוראות טיפול מפורטות.
                  משלוח עד הדלת באותו היום או למחרת.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section section-dark">
          <div className="container">
            <h2 className="section-heading-centered">מוצרים דומים</h2>
            <div className="products-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageContainer>
  );
}

export default ProductPage;
