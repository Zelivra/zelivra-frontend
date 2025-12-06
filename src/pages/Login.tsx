import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../styles/Login.css';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch {
      setError(t('auth.login.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← {t('nav.home')}
        </button>
        <LanguageSwitcher />
      </div>
      
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">{t('auth.login.title')}</h2>
          <p className="login-demo-info">
            Demo credentials: demo@zelivra.com / demo123
          </p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">{t('auth.login.email')}</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                placeholder="demo@zelivra.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t('auth.login.password')}</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                placeholder="demo123"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : t('auth.login.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
