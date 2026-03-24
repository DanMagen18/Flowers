import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button className="faq-question" onClick={onToggle}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function FaqPage() {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('שלום, יש לי שאלה')}`;

  return (
    <PageContainer>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">שאלות נפוצות</h1>
            <p className="page-subtitle">
              כל מה שרציתם לדעת על הפרחים והשירות שלנו
            </p>
          </div>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className={`faq-content ${isVisible ? 'reveal' : ''}`}>
            <div className="faq-list">
              {siteData.faq.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>

            <div className="faq-cta">
              <h2 className="faq-cta-title">לא מצאתם את התשובה?</h2>
              <p className="faq-cta-text">
                אנחנו כאן כדי לעזור! צרו איתנו קשר ונשמח לענות על כל שאלה
              </p>
              <div className="faq-cta-buttons">
                <Button href={whatsappLink} size="large">
                  שאלו אותנו בווטסאפ
                </Button>
                <Button to="/contact" variant="secondary" size="large">
                  צור קשר
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default FaqPage;
