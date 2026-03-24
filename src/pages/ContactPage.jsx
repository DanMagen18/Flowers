import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteData } from '../data/siteData';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

function ContactPage() {
  const [ref, isVisible] = useRevealOnScroll(0.1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
    } else if (!/^[0-9\-\s]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.occasion.trim()) {
      newErrors.occasion = 'נא לבחור אירוע או לכתב סיבת ההזמנה';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'נא לכתוב הודעה';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = `
שלום, אני מעוניין להזמין פרחים:

שם: ${formData.name}
טלפון: ${formData.phone}
אירוע: ${formData.occasion}
הודעה: ${formData.message}
    `.trim();

    const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      window.open(whatsappLink, '_blank');
      navigate('/thank-you');
    }, 500);
  };

  const whatsappDirectLink = `https://wa.me/${siteData.whatsapp}`;

  return (
    <PageContainer>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">צור קשר</h1>
            <p className="page-subtitle">
              נשמח לשמוע ממך ולעזור לך ליצור את זר הפרחים המושלם
            </p>
          </div>
        </div>
      </section>

      <section className="section" ref={ref}>
        <div className="container">
          <div className={`contact-wrapper ${isVisible ? 'reveal' : ''}`}>
            <div className="contact-form-section">
              <h2 className="contact-section-title">שלחו לנו הודעה</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    שם מלא <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="איך קוראים לך?"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    טלפון <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="050-1234567"
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="occasion" className="form-label">
                    אירוע / סיבה <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="occasion"
                    name="occasion"
                    className={`form-input ${errors.occasion ? 'form-input-error' : ''}`}
                    value={formData.occasion}
                    onChange={handleChange}
                    placeholder="יום הולדת, יום נישואין, חתונה..."
                  />
                  {errors.occasion && <span className="form-error">{errors.occasion}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    הודעה <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ספרו לנו מה אתם מחפשים, צבעים מועדפים, סגנון..."
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <Button
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                  className="form-submit"
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </Button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2 className="contact-section-title">דרכי התקשרות</h2>

              <div className="contact-info-card">
                <div className="contact-info-icon">💬</div>
                <h3 className="contact-info-title">ווטסאפ</h3>
                <p className="contact-info-text">הדרך המהירה ביותר ליצור קשר</p>
                <Button href={whatsappDirectLink} variant="secondary">
                  שלחו הודעה
                </Button>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <h3 className="contact-info-title">טלפון</h3>
                <p className="contact-info-text">{siteData.phone}</p>
                <p className="contact-info-subtext">
                  {siteData.delivery.hours}
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <h3 className="contact-info-title">אימייל</h3>
                <a href={`mailto:${siteData.email}`} className="contact-info-link">
                  {siteData.email}
                </a>
                <p className="contact-info-subtext">
                  נשיב תוך 24 שעות
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <h3 className="contact-info-title">כתובת</h3>
                <p className="contact-info-text">{siteData.address}</p>
                <p className="contact-info-subtext">
                  ניתן לאסוף הזמנות לפי תיאום מראש
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default ContactPage;
