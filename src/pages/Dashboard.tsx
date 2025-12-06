import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from '../components/LanguageSwitcher';
import MapSelector from '../components/MapSelector';
import { saveArea, getAreas } from '../api/areas';
import type { Area } from '../api/areas';
import '../styles/Dashboard.css';

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
      setMessage('Error saving area');
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
    <div className="dashboard">
      <nav className="dashboard-nav">
        <div className="nav-container">
          <div className="nav-brand">
            <h1>{t('app.title')}</h1>
          </div>
          <div className="nav-items">
            <span className="user-name">{user?.name}</span>
            <LanguageSwitcher />
            <button className="btn-logout" onClick={handleLogout}>
              {t('auth.logout')}
            </button>
          </div>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>{t('dashboard.welcome')}, {user?.name}!</h2>
        </div>

        <div className="dashboard-grid">
          <div className="stats-card">
            <div className="stat-icon">📍</div>
            <div className="stat-content">
              <h3>{areas.length}</h3>
              <p>{t('dashboard.areas')}</p>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>$12,450</h3>
              <p>{t('dashboard.costs')}</p>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <h3>↓ 8.2%</h3>
              <p>vs last month</p>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>{t('dashboard.selectArea')}</h3>
          {message && <div className="success-message">{message}</div>}
          {isSaving && <div className="loading-message">Saving area...</div>}
          <MapSelector onAreaSelected={handleAreaSelected} />
        </div>

        <div className="areas-section">
          <h3>Saved Areas</h3>
          {isLoading ? (
            <p>Loading areas...</p>
          ) : (
            <div className="areas-list">
              {areas.map((area) => (
                <div key={area.id} className="area-item">
                  <div className="area-info">
                    <h4>{area.name}</h4>
                    <p>{area.coordinates.length} points</p>
                    <p className="area-date">
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
