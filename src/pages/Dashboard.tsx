import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from '../components/LanguageSwitcher';
import MapSelector from '../components/MapSelector';
import { saveArea, getAreas } from '../api/areas';
import type { Area } from '../api/areas';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { user, isAuthenticated, logout } = useAuth();
  const [areas, setAreas] = useState<Area[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadAreas();
    }
  }, [isAuthenticated]);

  const loadAreas = async () => {
    try {
      setIsLoading(true);
      const data = await getAreas();
      setAreas(data);
    } catch (error) {
      console.error('Error loading areas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAreaSelected = async (coordinates: { lat: number; lng: number }[]) => {
    try {
      setIsSaving(true);
      setMessage('');
      
      const areaName = `Area ${areas.length + 1}`;
      const newArea = await saveArea({ name: areaName, coordinates });
      
      setAreas([...areas, newArea]);
      setMessage(t('dashboard.areaSaved'));
      
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving area:', error);
      setMessage(t('dashboard.errorSavingArea'));
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle text-text-primary">
      <nav className="sticky top-0 bg-white/85 backdrop-blur-xl border-b border-border-light z-[100] transition-all duration-base hover:bg-white/95 hover:shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="m-0 text-2xl font-semibold text-primary-dark -tracking-[0.02em] transition-all duration-base cursor-pointer hover:text-primary hover:translate-x-0.5">
              {t('app.title')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium px-4 py-2.5 bg-surface-elevated rounded-md text-text-primary text-[15px] border border-border-light">
              {user?.name}
            </span>
            <LanguageSwitcher />
            <button 
              className="px-6 py-2.5 border border-border bg-surface text-text-primary font-medium text-[15px] rounded-md cursor-pointer transition-all duration-base shadow-xs hover:bg-surface-elevated hover:border-error hover:text-error hover:-translate-y-px hover:shadow-sm active:translate-y-0 active:shadow-xs"
              onClick={handleLogout}
            >
              {t('auth.logout')}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-8 py-10 relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[300px] before:bg-[radial-gradient(circle_at_50%_0%,rgba(107,122,153,0.03)_0%,transparent_70%)] before:pointer-events-none before:-z-[1]">
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-primary-dark -tracking-[0.02em] animate-fadeInUp">
            {t('dashboard.welcome')}, {user?.name}!
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-surface rounded-xl p-8 border border-border-light flex items-center gap-6 transition-all duration-smooth shadow-sm animate-[fadeInUp_0.5s_ease-out_0.1s_backwards] hover:-translate-y-1 hover:shadow-lg hover:border-border">
            <div className="text-[40px] transition-transform duration-smooth hover:scale-105">
              📍
            </div>
            <div>
              <h3 className="text-[30px] font-semibold mb-1 text-primary-dark -tracking-[0.01em]">
                {areas.length}
              </h3>
              <p className="text-text-secondary text-sm">
                {t('dashboard.areas')}
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-surface rounded-xl p-8 border border-border-light flex items-center gap-6 transition-all duration-smooth shadow-sm animate-[fadeInUp_0.5s_ease-out_0.2s_backwards] hover:-translate-y-1 hover:shadow-lg hover:border-border">
            <div className="text-[40px] transition-transform duration-smooth hover:scale-105">
              💰
            </div>
            <div>
              <h3 className="text-[30px] font-semibold mb-1 text-primary-dark -tracking-[0.01em]">
                $12,450
              </h3>
              <p className="text-text-secondary text-sm">
                {t('dashboard.costs')}
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-surface rounded-xl p-8 border border-border-light flex items-center gap-6 transition-all duration-smooth shadow-sm animate-[fadeInUp_0.5s_ease-out_0.3s_backwards] hover:-translate-y-1 hover:shadow-lg hover:border-border">
            <div className="text-[40px] transition-transform duration-smooth hover:scale-105">
              📊
            </div>
            <div>
              <h3 className="text-[30px] font-semibold mb-1 text-primary-dark -tracking-[0.01em]">
                ↓ 8.2%
              </h3>
              <p className="text-text-secondary text-sm">
                vs last month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-8 border border-border-light mb-8 shadow-sm animate-[fadeInUp_0.5s_ease-out_0.4s_backwards]">
          <h3 className="text-[26px] font-semibold mb-6 text-primary-dark -tracking-[0.01em]">
            {t('dashboard.selectArea')}
          </h3>
          {message && (
            <div className="bg-success/10 border border-success/20 text-success px-4 py-3.5 rounded-md mb-4 font-medium text-[15px] animate-slideInDown">
              {message}
            </div>
          )}
          {isSaving && (
            <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-3.5 rounded-md mb-4 font-medium text-[15px]">
              {t('dashboard.savingArea')}
            </div>
          )}
          <MapSelector onAreaSelected={handleAreaSelected} />
        </div>

        <div className="bg-surface rounded-xl p-8 border border-border-light shadow-sm animate-[fadeInUp_0.5s_ease-out_0.5s_backwards]">
          <h3 className="text-[26px] font-semibold mb-6 text-primary-dark -tracking-[0.01em]">
            Saved Areas
          </h3>
          {isLoading ? (
            <p className="text-text-secondary text-[15px] animate-pulse">
              {t('dashboard.loadingAreas')}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {areas.map((area) => (
                <div 
                  key={area.id} 
                  className="bg-gradient-surface rounded-lg p-6 border border-border-light transition-all duration-smooth shadow-xs relative overflow-hidden hover:border-border hover:-translate-y-0.5 hover:shadow-md before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-primary before:to-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-smooth hover:before:scale-x-100"
                >
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-primary-dark -tracking-[0.01em]">
                      {area.name}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {area.coordinates.length} points
                    </p>
                    <p className="mt-2 text-[13px] text-text-tertiary">
                      {new Date(area.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
