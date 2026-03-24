import React from 'react';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function AboutPage() {
  const [ref1, isVisible1] = useRevealOnScroll(0.1);
  const [ref2, isVisible2] = useRevealOnScroll(0.1);
  const [ref3, isVisible3] = useRevealOnScroll(0.1);

  return (
    <PageContainer>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">הסיפור שלנו</h1>
            <p className="page-subtitle">
              אהבה לפרחים, תשוקה לאיכות, מחויבות למצוינות
            </p>
          </div>
        </div>
      </section>

      <section className="section" ref={ref1}>
        <div className="container">
          <div className={`about-content ${isVisible1 ? 'reveal' : ''}`}>
            <div className="about-text">
              <h2 className="about-heading">מי אנחנו</h2>
              <p className="about-paragraph">
                {siteData.about.story}
              </p>
              <p className="about-paragraph">
                {siteData.about.mission}
              </p>
              <p className="about-paragraph">
                מאז הקמתנו, אנחנו עובדים רק עם מגדלי הפרחים הטובים ביותר בארץ,
                בוחרים כל בוקר את הפרחים הטריים והיפים ביותר, ומעניקים לכל זר
                את תשומת הלב והאהבה שהוא מגיע לו. התוצאה היא יצירות אומנות
                פרחוניות שגורמות לאנשים להרגיש מיוחדים.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/1070862/pexels-photo-1070862.jpeg"
                alt="הסטודיו שלנו"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" ref={ref2}>
        <div className="container">
          <div className={isVisible2 ? 'reveal' : ''}>
            <h2 className="section-heading-centered">הערכים שלנו</h2>
            <div className="values-grid">
              {siteData.about.values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-number">{index + 1}</div>
                  <h3 className="value-title">{value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" ref={ref3}>
        <div className="container">
          <div className={isVisible3 ? 'reveal' : ''}>
            <div className="about-process">
              <h2 className="about-heading">התהליך שלנו</h2>

              <div className="process-step">
                <div className="process-number">01</div>
                <div className="process-content">
                  <h3 className="process-title">בחירה קפדנית</h3>
                  <p className="process-text">
                    כל בוקר אנו מגיעים לשוק הפרחים ובוחרים באופן אישי את הפרחים
                    הטריים והיפים ביותר. אנחנו בוחנים כל פרח לפני שהוא נכנס לסטודיו שלנו.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-number">02</div>
                <div className="process-content">
                  <h3 className="process-title">עיצוב אומנותי</h3>
                  <p className="process-text">
                    מעצבי הפרחים המנוסים שלנו יוצרים כל זר כיצירת אומנות ייחודית,
                    עם תשומת לב לצבעים, מרקמים ויחסים. כל זר מספר סיפור משלו.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-number">03</div>
                <div className="process-content">
                  <h3 className="process-title">אריזה יוקרתית</h3>
                  <p className="process-text">
                    אנחנו אורזים כל זר באריזה יוקרתית ומושקעת שמגינה על הפרחים
                    ומוסיפה להם אלגנטיות. כל פרט חשוב לנו.
                  </p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-number">04</div>
                <div className="process-content">
                  <h3 className="process-title">משלוח מהיר וזהיר</h3>
                  <p className="process-text">
                    השליחים המיומנים שלנו מגיעים עד הדלת עם הפרחים במצב מושלם,
                    בזמן המדויק שהזמנתם. אנחנו דואגים שהפרחים יגיעו כמו שיצאו מהסטודיו.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-cta">
              <Button to="/collections" size="large">
                גלו את הקולקציה שלנו
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default AboutPage;
