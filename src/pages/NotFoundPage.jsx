import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';

function NotFoundPage() {
  return (
    <PageContainer>
      <section className="section">
        <div className="container">
          <div className="not-found-content">
            <div className="not-found-number">404</div>
            <h1 className="not-found-title">הדף לא נמצא</h1>
            <p className="not-found-text">
              מצטערים, הדף שחיפשתם אינו קיים או שהועבר למיקום אחר
            </p>
            <div className="not-found-actions">
              <Button to="/" size="large">
                חזרה לדף הבית
              </Button>
              <Button to="/collections" variant="secondary" size="large">
                צפו בקולקציות
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default NotFoundPage;
