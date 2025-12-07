import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Landing: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle text-text-primary">
      <nav className="sticky top-0 bg-white/85 backdrop-blur-xl border-b border-border-light z-[100] transition-all duration-base hover:bg-white/95 hover:shadow-sm">
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="m-0 text-2xl font-semibold text-primary-dark -tracking-[0.02em] transition-all duration-base cursor-pointer hover:text-primary hover:translate-x-0.5">
              {t('app.title')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              className="px-6 py-2.5 border border-border bg-surface text-text-primary font-medium text-[15px] rounded-md cursor-pointer transition-all duration-base shadow-xs hover:bg-surface-elevated hover:border-primary hover:text-primary hover:-translate-y-px hover:shadow-sm active:translate-y-0 active:shadow-xs"
              onClick={() => navigate('/login')}
            >
              {t('nav.login')}
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-[1200px] mx-auto px-8 py-20 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full before:bg-[radial-gradient(circle_at_50%_20%,rgba(107,122,153,0.03)_0%,transparent_50%)] before:pointer-events-none before:-z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[56px] font-bold leading-[1.15] mb-6 text-primary-dark -tracking-[0.03em] animate-[fadeInUp_0.6s_ease-out]">
              {t('landing.hero.title')}
            </h2>
            <p className="text-xl leading-[1.7] mb-8 text-text-secondary font-normal animate-[fadeInUp_0.6s_ease-out_0.1s_backwards]">
              {t('landing.hero.subtitle')}
            </p>
            <button 
              className="px-10 py-4 border-none bg-primary text-white font-semibold text-[17px] rounded-lg cursor-pointer transition-all duration-base shadow-md relative overflow-hidden animate-[fadeInUp_0.6s_ease-out_0.2s_backwards] hover:-translate-y-0.5 hover:shadow-lg hover:bg-primary-light active:-translate-y-px active:shadow-md before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-base hover:before:opacity-100"
              onClick={() => navigate('/login')}
            >
              {t('landing.hero.cta')}
            </button>
          </div>
          <div className="flex justify-center">
            <div className="bg-surface rounded-xl p-12 border border-border-light shadow-lg transition-all duration-smooth animate-[fadeInUp_0.6s_ease-out_0.3s_backwards] hover:-translate-y-1 hover:shadow-xl hover:border-border">
              <div className="text-[56px] text-center mb-8 grayscale-[0.3] transition-all duration-smooth hover:grayscale-0 hover:scale-105">
                📊
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-2.5 bg-gradient-to-r from-primary to-accent rounded-md animate-[pulse_2.5s_ease-in-out_infinite] transition-all duration-base hover:from-primary-light hover:to-accent"></div>
                <div className="h-2.5 w-4/5 bg-gradient-to-r from-primary to-accent rounded-md animate-[pulse_2.5s_ease-in-out_infinite] [animation-delay:0.3s] transition-all duration-base hover:from-primary-light hover:to-accent"></div>
                <div className="h-2.5 w-[90%] bg-gradient-to-r from-primary to-accent rounded-md animate-[pulse_2.5s_ease-in-out_infinite] [animation-delay:0.6s] transition-all duration-base hover:from-primary-light hover:to-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-8 py-20 border-t border-border-light">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-4xl font-semibold text-center mb-12 text-primary-dark -tracking-[0.02em]">
            {t('landing.features.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-surface rounded-xl p-8 border border-border-light transition-all duration-smooth shadow-sm relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-border before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-primary before:to-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-smooth hover:before:scale-x-100">
              <div className="text-[40px] mb-4 inline-block transition-transform duration-smooth hover:scale-105 hover:-translate-y-0.5">
                ⚡
              </div>
              <h4 className="text-[22px] font-semibold mb-3 text-primary-dark -tracking-[0.01em]">
                {t('landing.features.realtime.title')}
              </h4>
              <p className="text-text-secondary leading-[1.7] text-[15px]">
                {t('landing.features.realtime.description')}
              </p>
            </div>
            <div className="bg-gradient-surface rounded-xl p-8 border border-border-light transition-all duration-smooth shadow-sm relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-border before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-primary before:to-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-smooth hover:before:scale-x-100">
              <div className="text-[40px] mb-4 inline-block transition-transform duration-smooth hover:scale-105 hover:-translate-y-0.5">
                🗺️
              </div>
              <h4 className="text-[22px] font-semibold mb-3 text-primary-dark -tracking-[0.01em]">
                {t('landing.features.map.title')}
              </h4>
              <p className="text-text-secondary leading-[1.7] text-[15px]">
                {t('landing.features.map.description')}
              </p>
            </div>
            <div className="bg-gradient-surface rounded-xl p-8 border border-border-light transition-all duration-smooth shadow-sm relative overflow-hidden hover:-translate-y-1.5 hover:shadow-lg hover:border-border before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-primary before:to-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-smooth hover:before:scale-x-100">
              <div className="text-[40px] mb-4 inline-block transition-transform duration-smooth hover:scale-105 hover:-translate-y-0.5">
                📈
              </div>
              <h4 className="text-[22px] font-semibold mb-3 text-primary-dark -tracking-[0.01em]">
                {t('landing.features.analytics.title')}
              </h4>
              <p className="text-text-secondary leading-[1.7] text-[15px]">
                {t('landing.features.analytics.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-surface text-center px-8 py-8 mt-16 border-t border-border-light text-text-tertiary text-sm">
        <p>&copy; 2024 Zelivra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
