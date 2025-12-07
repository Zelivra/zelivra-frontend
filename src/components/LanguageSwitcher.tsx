import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-1 bg-surface-elevated rounded-md p-1 border border-border-light shadow-xs">
      <button
        className={`px-3.5 py-2 border-none ${
          i18n.language === 'pl'
            ? 'bg-primary text-white shadow-sm'
            : 'bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary'
        } font-medium text-sm cursor-pointer rounded-sm transition-all duration-fast`}
        onClick={() => changeLanguage('pl')}
        aria-label="Polski"
      >
        PL
      </button>
      <button
        className={`px-3.5 py-2 border-none ${
          i18n.language === 'en'
            ? 'bg-primary text-white shadow-sm'
            : 'bg-transparent text-text-secondary hover:bg-surface hover:text-text-primary'
        } font-medium text-sm cursor-pointer rounded-sm transition-all duration-fast`}
        onClick={() => changeLanguage('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
