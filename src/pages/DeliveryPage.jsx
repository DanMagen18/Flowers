import React from 'react';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function DeliveryPage() {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('שלום, יש לי שאלה לגבי משלוחים')}`;

  return (
    <PageContainer>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">משלוחים</h1>
            <p className="page-subtitle">
              אנו מבטיחים שהפרחים שלכם יגיעו טריים, יפים ובזמן
            </p>
          </div>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className={isVisible ? 'reveal' : ''}>
            <div className="delivery-details">
              <div className="delivery-detail-card">
                <div className="delivery-detail-icon">📍</div>
                <h2 className="delivery-detail-title">איזורי משלוח</h2>
                <p className="delivery-detail-text">
                  {siteData.delivery.areas}
                </p>
                <p className="delivery-detail-subtext">
                  לא רואים את האזור שלכם? צרו איתנו קשר ונמצא פתרון
                </p>
              </div>

              <div className="delivery-detail-card">
                <div className="delivery-detail-icon">⚡</div>
                <h2 className="delivery-detail-title">משלוח באותו היום</h2>
                <p className="delivery-detail-text">
                  {siteData.delivery.sameDay}
                </p>
                <p className="delivery-detail-subtext">
                  מושלם למי ששכח יום הולדת או רוצה להפתיע במהירות
                </p>
              </div>

              <div className="delivery-detail-card">
                <div className="delivery-detail-icon">📅</div>
                <h2 className="delivery-detail-title">משלוח למחרת</h2>
                <p className="delivery-detail-text">
                  {siteData.delivery.nextDay}
                </p>
                <p className="delivery-detail-subtext">
                  אפשרות גמישה להזמנות מתוכננות מראש
                </p>
              </div>

              <div className="delivery-detail-card">
                <div className="delivery-detail-icon">🕐</div>
                <h2 className="delivery-detail-title">שעות פעילות</h2>
                <p className="delivery-detail-text">
                  {siteData.delivery.hours}
                </p>
                <p className="delivery-detail-subtext">
                  ניתן לתאם זמן משלוח ספציפי לפי בקשה
                </p>
              </div>

              <div className="delivery-detail-card">
                <div className="delivery-detail-icon">💰</div>
                <h2 className="delivery-detail-title">עלות משלוח</h2>
                <p className="delivery-detail-text">
                  משלוח חינם להזמנות מעל ₪300
                </p>
                <p className="delivery-detail-subtext">
                  להזמנות קטנות יותר - עלות משלוח של ₪30 בלבד
                </p>
              </div>

              <div className="delivery-detail-card">
                <div className="delivery-detail-icon">🌟</div>
                <h2 className="delivery-detail-title">איכות מובטחת</h2>
                <p className="delivery-detail-text">
                  {siteData.delivery.note}
                </p>
                <p className="delivery-detail-subtext">
                  אם משהו לא מושלם, אנחנו מתקנים זאת מיד
                </p>
              </div>
            </div>

            <div className="delivery-notes">
              <h2 className="delivery-notes-title">הערות חשובות</h2>
              <ul className="delivery-notes-list">
                <li>
                  הפרחים נמסרים ישירות למען, או נשארים בדלת אם המקבל לא נמצא
                  (לפי הנחיותיכם)
                </li>
                <li>
                  כל זר מגיע עם כרטיס ברכה אישי - אתם יכולים להוסיף מסר אישי בהזמנה
                </li>
                <li>
                  למשלוחים לאירועים מיוחדים (חתונות, אירועי חברה) יש להזמין
                  מראש ולתאם איתנו
                </li>
                <li>
                  אנו שומרים על קשר מתמיד במהלך המשלוח ונעדכן אתכם כשהפרחים הגיעו
                </li>
                <li>
                  במקרה של בעיה כלשהי במשלוח, אנחנו פותרים אותה באופן מיידי
                  ללא עלות נוספת
                </li>
              </ul>
            </div>

            <div className="section-cta-box">
              <h3 className="cta-box-title">יש שאלות נוספות?</h3>
              <p className="cta-box-text">
                אנחנו כאן לעזור! צרו איתנו קשר בווטסאפ או בטלפון ונשמח לענות על כל שאלה
              </p>
              <div className="cta-box-buttons">
                <Button href={whatsappLink} size="large">
                  דברו איתנו בווטסאפ
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

export default DeliveryPage;
