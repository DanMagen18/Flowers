import React from 'react';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';

function ThankYouPage() {
  const whatsappLink = `https://wa.me/${siteData.whatsapp}`;

  return (
    <PageContainer>
      <section className="section">
        <div className="container">
          <div className="thank-you-content">
            <div className="thank-you-icon">✓</div>
            <h1 className="thank-you-title">תודה שפניתם אלינו!</h1>
            <p className="thank-you-text">
              הפרטים שלכם התקבלו בהצלחה. אנחנו ניצור איתכם קשר בהקדם האפשרי
              כדי לדבר על זר הפרחים המושלם עבורכם.
            </p>

            <div className="thank-you-info">
              <h3 className="thank-you-info-title">מה הלאה?</h3>
              <ul className="thank-you-list">
                <li>נחזור אליכם תוך מספר שעות</li>
                <li>נתייעץ איתכם על הבחירה המושלמת</li>
                <li>ניצור עבורכם את זר הפרחים בהתאמה אישית</li>
                <li>נדאג למשלוח מהיר ובטוח עד הדלת</li>
              </ul>
            </div>

            <div className="thank-you-actions">
              <Button to="/" size="large">
                חזרה לדף הבית
              </Button>
              <Button href={whatsappLink} variant="secondary" size="large">
                דברו איתנו בווטסאפ
              </Button>
            </div>

            <p className="thank-you-note">
              רוצים לדבר איתנו עכשיו? אנחנו זמינים בווטסאפ בטלפון {siteData.phone}
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default ThankYouPage;
