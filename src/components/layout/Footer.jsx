import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';

function Footer() {
  const whatsappLink = `https://wa.me/${siteData.whatsapp}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{siteData.brandName}</h3>
            <p className="footer-text">
              פרחים בוטיק יוקרתיים עם אהבה ותשומת לב לכל פרט
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">ניווט מהיר</h4>
            <ul className="footer-links">
              {siteData.navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">יצירת קשר</h4>
            <ul className="footer-contact">
              <li>
                <a href={whatsappLink} className="footer-link" target="_blank" rel="noopener noreferrer">
                  {siteData.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteData.email}`} className="footer-link">
                  {siteData.email}
                </a>
              </li>
              <li className="footer-text">{siteData.address}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">שעות פעילות</h4>
            <p className="footer-text">
              ימים א׳-ה׳: 08:00-20:00<br />
              יום ו׳: 08:00-14:00<br />
              שבת: סגור
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {siteData.brandName}. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
