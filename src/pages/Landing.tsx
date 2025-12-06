import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/Landing.css';

const Landing: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>{t('app.title')}</h1>
          </div>
          <div className="nav-items">
            <LanguageSwitcher />
            <button className="btn-login" onClick={() => navigate('/login')}>
              {t('nav.login')}
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">{t('landing.hero.title')}</h2>
            <p className="hero-subtitle">{t('landing.hero.subtitle')}</p>
            <button className="btn-cta" onClick={() => navigate('/login')}>
              {t('landing.hero.cta')}
            </button>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-icon">📊</div>
              <div className="visual-content">
                <div className="visual-line"></div>
                <div className="visual-line"></div>
                <div className="visual-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h3 className="features-title">{t('landing.features.title')}</h3>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>{t('landing.features.realtime.title')}</h4>
              <p>{t('landing.features.realtime.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h4>{t('landing.features.map.title')}</h4>
              <p>{t('landing.features.map.description')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h4>{t('landing.features.analytics.title')}</h4>
              <p>{t('landing.features.analytics.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 Zelivra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
