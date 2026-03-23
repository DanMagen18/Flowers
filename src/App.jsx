import { useEffect, useMemo, useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
import {
  faqItems,
  galleryImages,
  products,
  stats,
  whatsappBase
} from "./data.js";

function App() {
  useScrollToTop();
  useRevealAnimations();
  useShowcaseAnimation();

  return (
    <div className="app-shell">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container nav">
        <NavLink to="/" className="logo">
          <span className="logo-mark">✿</span>
          <span className="logo-text">Bloom Rouge</span>
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavItem to="/">ראשי</NavItem>
          <NavItem to="/collections">קולקציות</NavItem>
          <NavItem to="/about">אודות</NavItem>
          <NavItem to="/delivery">משלוחים</NavItem>
          <NavItem to="/faq">שאלות נפוצות</NavItem>
          <NavItem to="/contact">צור קשר</NavItem>
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-primary desktop-only"
            href={createWhatsappLink("היי, אני רוצה להזמין זר פרחים")}
            target="_blank"
            rel="noreferrer"
          >
            להזמנה מהירה
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            aria-label="פתח תפריט"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </NavLink>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">חנות פרחים בעיצוב פרימיום</p>
            <h1>
              פרחים שנראים
              <span>יקרים מהרגע הראשון</span>
            </h1>
            <p className="hero-text">
              זרי ורדים, סידורי פרחים ומתנות בעיצוב רומנטי, אלגנטי ויוקרתי —
              עם חוויית הזמנה פשוטה ומשלוח מהיר.
            </p>

            <div className="hero-buttons">
              <a
                className="btn btn-primary"
                href={createWhatsappLink("היי, אני רוצה להזמין זר פרחים")}
                target="_blank"
                rel="noreferrer"
              >
                להזמין בוואטסאפ
              </a>
              <NavLink className="btn btn-secondary" to="/collections">
                לצפייה בזרים
              </NavLink>
            </div>

            <div className="hero-points">
              <div className="point-card">
                <strong>משלוח מהיום להיום</strong>
                <span>זמינות מהירה באזורים נבחרים</span>
              </div>
              <div className="point-card">
                <strong>עיצוב יוקרתי</strong>
                <span>מראה נקי, רגשי ומדויק</span>
              </div>
              <div className="point-card">
                <strong>שירות אישי</strong>
                <span>התאמה לאירוע, לתקציב ולסגנון</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="hero-glow glow-1" />
            <div className="hero-glow glow-2" />
            <div className="hero-media-frame">
              <img
                className="hero-media"
                src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1400&q=80"
                alt="זר פרחים יוקרתי"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid reveal">
          {stats.map((item) => (
            <div className="stat-card" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase" id="showcase">
        <div className="showcase-sticky">
          <div className="container showcase-grid">
            <div className="showcase-visual reveal">
              <div className="showcase-stack">
                <img
                  className="bouquet-base"
                  src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=1200&q=80"
                  alt="זר סגור"
                />
                <img
                  className="bouquet-overlay"
                  id="bouquetOverlay"
                  src="https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80"
                  alt="זר פתוח"
                />
              </div>
            </div>

            <div className="showcase-copy">
              <div className="showcase-step reveal active-step" data-progress="0.18">
                <p className="eyebrow">תצוגת סקרול</p>
                <h2>המוצר נפתח תוך כדי גלילה</h2>
                <p>
                  זה בנוי כך שאפשר להחליף אחר כך את התמונות בוידאו אמיתי של מעבר
                  בין זר סגור לזר פתוח.
                </p>
              </div>

              <div className="showcase-step reveal" data-progress="0.48">
                <h3>יותר נוכחות. יותר תחושת פרימיום.</h3>
                <p>
                  בזמן גלילה, השכבה העליונה נחשפת בהדרגה ויוצרת תחושת תנועה רכה
                  סביב הזר המרכזי.
                </p>
              </div>

              <div className="showcase-step reveal" data-progress="0.78">
                <h3>מוכן לשדרוג עתידי</h3>
                <p>
                  ברגע שיהיה לך קובץ וידאו אמיתי, לא צריך לשבור את המבנה. רק
                  מחליפים את המדיה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHead
            eyebrow="למה לבחור בנו"
            title="לא רק זר. חוויה שנראית טוב בכל פרט"
            text="האתר בנוי כדי להרגיש רגשי, יוקרתי ונקי — בלי עומס ובלי תחושת טמפלייט זול."
          />

          <div className="features-grid">
            <article className="feature-card reveal">
              <div className="feature-icon">❤</div>
              <h3>רומנטי ומדויק</h3>
              <p>שפה חזותית רכה, עמוקה ונקייה עם מיקוד בפרח ובתחושה.</p>
            </article>

            <article className="feature-card reveal delay-1">
              <div className="feature-icon">✦</div>
              <h3>נראות פרימיום</h3>
              <p>ריווחים נכונים, צבעים נקיים והיררכיה שמרגישה מותג.</p>
            </article>

            <article className="feature-card reveal delay-2">
              <div className="feature-icon">⚡</div>
              <h3>הזמנה מהירה</h3>
              <p>CTA ברור, וואטסאפ בולט ומסלול קצר להזמנה בלי בלגן.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="קטגוריות פופולריות"
            title="זרים שנבנו כדי להרשים"
            text="שלוש קטגוריות ראשיות שמכניסות את הגולש מהר למקום הנכון."
          />

          <div className="cards-grid">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                className={`reveal ${index === 1 ? "delay-1" : ""} ${
                  index === 2 ? "delay-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container delivery-grid">
          <div className="delivery-copy reveal">
            <p className="eyebrow">משלוחים ושירות</p>
            <h2>הזמנה פשוטה. תוצאה מרשימה.</h2>
            <p>
              שולחים הודעה, בוחרים סגנון, מקבלים אישור ואנחנו דואגים להכנה,
              לאריזה ולמשלוח.
            </p>

            <ul className="delivery-list">
              <li>משלוחים מהיום להיום באזורים נבחרים</li>
              <li>אפשרות לברכה אישית</li>
              <li>התאמה לפי תקציב, גודל וסגנון</li>
            </ul>

            <NavLink className="btn btn-primary" to="/delivery">
              לכל פרטי המשלוחים
            </NavLink>
          </div>

          <div className="delivery-card reveal delay-1">
            <h3>איך זה עובד</h3>
            <div className="steps">
              <div className="step">
                <span>01</span>
                <p>בוחרים סגנון זר או שולחים השראה</p>
              </div>
              <div className="step">
                <span>02</span>
                <p>מקבלים מחיר והתאמה מהירה</p>
              </div>
              <div className="step">
                <span>03</span>
                <p>אנחנו מכינים, אורזים ושולחים</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySection limit={4} />

      <section className="cta-section">
        <div className="container">
          <div className="cta-box reveal">
            <p className="eyebrow">מוכנים להזמין?</p>
            <h2>שלחו הודעה ונרכיב לכם זר שנראה בדיוק כמו שצריך</h2>
            <p>
              בלי טפסים מסובכים. בלי רעש. פשוט הודעה אחת ומתקדמים.
            </p>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={createWhatsappLink("היי, אני רוצה להזמין זר פרחים")}
                target="_blank"
                rel="noreferrer"
              >
                להזמנה עכשיו
              </a>
              <NavLink className="btn btn-secondary" to="/contact">
                לדבר איתנו
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="הקולקציות שלנו"
        title="הקטלוג המרכזי של Bloom Rouge"
        text="עמוד מרוכז עם הזרים המובילים, אווירה פרימיום ומעבר מהיר להזמנה."
      />

      <section className="section">
        <div className="container cards-grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              className={`reveal ${index % 3 === 1 ? "delay-1" : ""} ${
                index % 3 === 2 ? "delay-2" : ""
              }`}
            />
          ))}
        </div>
      </section>

      <GallerySection limit={6} />
    </>
  );
}

function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => products.find((item) => item.slug === slug),
    [slug]
  );

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section className="product-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-media reveal">
            <img src={product.hero} alt={product.name} />
          </div>

          <div className="product-hero-copy reveal delay-1">
            <p className="eyebrow">דף מוצר</p>
            <h1>{product.name}</h1>
            <p className="product-price">{product.price}</p>
            <p>{product.description}</p>

            <ul className="product-bullets">
              {product.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="hero-buttons">
              <a
                className="btn btn-primary"
                href={createWhatsappLink(`היי, אני רוצה להזמין את ${product.name}`)}
                target="_blank"
                rel="noreferrer"
              >
                להזמין בוואטסאפ
              </a>
              <button className="btn btn-secondary" onClick={() => navigate("/collections")}>
                חזרה לקטלוג
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container info-grid">
          <div className="info-card reveal">
            <h3>למי זה מתאים</h3>
            <p>
              למי שרוצה מתנה שנראית מושקעת, רומנטית ועם נוכחות חזקה כבר מהמבט
              הראשון.
            </p>
          </div>
          <div className="info-card reveal delay-1">
            <h3>מה אפשר להתאים</h3>
            <p>
              צבע עטיפה, תוספת ברכה, גודל הזר והתאמה לתקציב או לסוג האירוע.
            </p>
          </div>
          <div className="info-card reveal delay-2">
            <h3>איך מזמינים</h3>
            <p>
              שולחים הודעה בוואטסאפ, מקבלים אישור, ואנחנו ממשיכים משם מהר.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="אודות"
        title="חנות פרחים עם שפה רומנטית וסטנדרט גבוה"
        text="המותג נבנה סביב שילוב של רגש, אלגנטיות, דיוק חזותי וחוויית הזמנה פשוטה."
      />

      <section className="section">
        <div className="container split-layout">
          <div className="split-copy reveal">
            <h2>מה חשוב לנו</h2>
            <p>
              שכל זר ירגיש כמו מתנה אמיתית — לא סתם סידור פרחים, אלא משהו שיש לו
              נוכחות, עטיפה נכונה, תחושה נקייה ורגע חזק סביבו.
            </p>
            <p>
              בגלל זה אנחנו שמים דגש על קומפוזיציה, צבע, נפח, עטיפה ושירות אישי
              שמבין את הסיטואציה ולא רק “מוכר זר”.
            </p>
          </div>

          <div className="split-media reveal delay-1">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=80"
              alt="אודות החנות"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="משלוחים"
        title="שירות מהיר עם נראות שלא נופלת בדרך"
        text="עמוד מסודר שמסביר ללקוח איך ההזמנה עובדת, מה זמני המשלוח ומה אפשר לבקש."
      />

      <section className="section">
        <div className="container info-grid">
          <div className="info-card reveal">
            <h3>Same Day</h3>
            <p>באזורים נבחרים אפשר להזמין ולקבל משלוח עוד באותו היום.</p>
          </div>
          <div className="info-card reveal delay-1">
            <h3>התאמה אישית</h3>
            <p>אפשר להוסיף ברכה, לבקש עטיפה מסוימת או להתאים את הסגנון לאירוע.</p>
          </div>
          <div className="info-card reveal delay-2">
            <h3>אישור מהיר</h3>
            <p>ההזמנה מתבצעת דרך וואטסאפ כדי לזרז תיאום ולמנוע חיכוך מיותר.</p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container cta-box reveal">
          <p className="eyebrow">רוצים לבצע הזמנה?</p>
          <h2>שלחו הודעה ונכוון אתכם לזר הנכון</h2>
          <a
            className="btn btn-primary"
            href={createWhatsappLink("היי, אני רוצה לבצע הזמנה עם משלוח")}
            target="_blank"
            rel="noreferrer"
          >
            להזמנה עם משלוח
          </a>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    eventType: "",
    notes: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    const message = `היי, אני ${form.fullName || "לקוח חדש"}.
טלפון: ${form.phone || "-"}
סוג אירוע: ${form.eventType || "-"}
הערות: ${form.notes || "-"}`;

    window.open(createWhatsappLink(message), "_blank", "noopener,noreferrer");
    navigate("/thank-you");
  }

  return (
    <>
      <PageHero
        eyebrow="צור קשר"
        title="ספרו לנו מה אתם צריכים"
        text="טופס קצר להכוונה ראשונית, ואז ממשיכים להזמנה דרך וואטסאפ."
      />

      <section className="section">
        <div className="container form-layout">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <label>
              שם מלא
              <input
                type="text"
                placeholder="השם שלך"
                value={form.fullName}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, fullName: e.target.value }))
                }
              />
            </label>

            <label>
              טלפון
              <input
                type="tel"
                placeholder="050-0000000"
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            </label>

            <label>
              סוג אירוע
              <input
                type="text"
                placeholder="יום הולדת / רומנטי / תודה / אחר"
                value={form.eventType}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, eventType: e.target.value }))
                }
              />
            </label>

            <label>
              הערות
              <textarea
                rows="5"
                placeholder="איזה סגנון, צבע או תקציב יש לך?"
                value={form.notes}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, notes: e.target.value }))
                }
              />
            </label>

            <button className="btn btn-primary" type="submit">
              שלח ועבור לוואטסאפ
            </button>
          </form>

          <div className="contact-side reveal delay-1">
            <div className="info-card">
              <h3>שעות פעילות</h3>
              <p>א׳–ה׳ 09:00–19:00</p>
              <p>ו׳ 09:00–14:00</p>
            </div>

            <div className="info-card">
              <h3>איך הכי מהיר להזמין</h3>
              <p>הדרך המהירה ביותר היא וואטסאפ עם תמונה, סגנון או תקציב.</p>
            </div>

            <div className="info-card">
              <h3>דחוף?</h3>
              <p>שלחו הודעה ישירה וננסה לכוון להזמנה מהירה עוד היום.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="שאלות נפוצות"
        title="מה בדרך כלל שואלים לפני הזמנה"
        text="עמוד מסודר שנותן תחושת ביטחון, מונע חיכוך ועונה על הדברים החשובים באמת."
      />

      <section className="section">
        <div className="container faq-list">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                className={`faq-item reveal ${open ? "open" : ""}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span>{open ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function ThankYouPage() {
  return (
    <section className="section thank-you-page">
      <div className="container">
        <div className="cta-box reveal visible">
          <p className="eyebrow">תודה</p>
          <h2>הפרטים נקלטו</h2>
          <p>
            פתחנו עבורך גם מעבר לוואטסאפ כדי לזרז את ההזמנה. אם זה לא נפתח,
            אפשר ללחוץ כאן שוב.
          </p>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href={createWhatsappLink("היי, אני רוצה להמשיך את ההזמנה")}
              target="_blank"
              rel="noreferrer"
            >
              להמשך בוואטסאפ
            </a>
            <NavLink className="btn btn-secondary" to="/">
              חזרה לדף הבית
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="section thank-you-page">
      <div className="container">
        <div className="cta-box reveal visible">
          <p className="eyebrow">404</p>
          <h2>העמוד הזה לא קיים</h2>
          <p>תחזור לעמוד הבית או תעבור לקטלוג הראשי.</p>
          <div className="cta-actions">
            <NavLink className="btn btn-primary" to="/">
              לדף הבית
            </NavLink>
            <NavLink className="btn btn-secondary" to="/collections">
              לקטלוג
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, className = "" }) {
  return (
    <article className={`product-card ${className}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <div className="product-footer">
          <span>{product.price}</span>
          <NavLink to={`/product/${product.slug}`}>לפרטים</NavLink>
        </div>
      </div>
    </article>
  );
}

function GallerySection({ limit = 4 }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionHead
          eyebrow="גלריה"
          title="כמה דוגמאות מהשפה החזותית"
          text="אפשר להחליף אחר כך לכל התמונות האמיתיות של העסק."
        />

        <div className="gallery-grid">
          {galleryImages.slice(0, limit).map((image, index) => (
            <div
              className={`gallery-item reveal ${index % 3 === 1 ? "delay-1" : ""} ${
                index % 3 === 2 ? "delay-2" : ""
              }`}
              key={image}
            >
              <img src={image} alt={`גלריית פרחים ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero-box reveal visible">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Bloom Rouge</h3>
          <p>
            חנות פרחים עם זרים יוקרתיים, שפה רומנטית ומשלוחים מהירים.
          </p>
        </div>

        <div>
          <h4>ניווט מהיר</h4>
          <NavLink to="/">ראשי</NavLink>
          <NavLink to="/collections">קולקציות</NavLink>
          <NavLink to="/delivery">משלוחים</NavLink>
          <NavLink to="/faq">שאלות נפוצות</NavLink>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={createWhatsappLink("היי, אני רוצה להזמין זר פרחים")}
      target="_blank"
      rel="noreferrer"
      aria-label="הזמנה בוואטסאפ"
    >
      ✆
    </a>
  );
}

function createWhatsappLink(text) {
  return `${whatsappBase}?text=${encodeURIComponent(text)}`;
}

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
}

function useRevealAnimations() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);
}

function useShowcaseAnimation() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const section = document.getElementById("showcase");
    const overlay = document.getElementById("bouquetOverlay");
    const steps = document.querySelectorAll(".showcase-step");

    if (!section || !overlay) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      const totalScrollable = sectionHeight - winH;

      if (totalScrollable <= 0) return;

      let progress = (-rect.top) / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      overlay.style.opacity = String(progress);
      overlay.style.transform = `scale(${0.96 + progress * 0.04})`;

      steps.forEach((step) => {
        const trigger = Number(step.dataset.progress || 0);
        if (progress >= trigger) {
          step.classList.add("active");
        } else {
          step.classList.remove("active");
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [location.pathname]);
}

export default App;