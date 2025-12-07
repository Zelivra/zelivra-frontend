import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import LanguageSwitcher from '../components/LanguageSwitcher';

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
    <div className="min-h-screen bg-gradient-subtle flex flex-col text-text-primary">
      <div className="flex justify-between items-center px-8 py-6 bg-white/85 backdrop-blur-xl border-b border-border-light">
        <button 
          className="px-6 py-2.5 border border-border bg-surface text-text-primary font-medium text-[15px] rounded-md cursor-pointer transition-all duration-base shadow-xs hover:bg-surface-elevated hover:border-primary hover:text-primary hover:-translate-x-0.5 hover:shadow-sm active:-translate-x-px active:shadow-xs"
          onClick={() => navigate('/')}
        >
          ← {t('nav.home')}
        </button>
        <LanguageSwitcher />
      </div>
      
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="bg-surface rounded-xl p-12 max-w-[450px] w-full shadow-xl border border-border-light text-text-primary animate-fadeInUp">
          <h2 className="text-[30px] font-semibold mb-2 text-primary-dark text-center -tracking-[0.02em]">
            {t('auth.login.title')}
          </h2>
          <p className="text-center text-sm text-text-secondary bg-surface-elevated px-4 py-3.5 rounded-md mb-8 border border-border-light">
            Demo credentials: demo@zelivra.com / demo123
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-text-primary text-sm">
                {t('auth.login.email')}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                placeholder="demo@zelivra.com"
                className="px-4 py-3.5 border border-border rounded-md text-[15px] transition-all duration-base bg-surface text-text-primary shadow-xs hover:border-accent focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(107,122,153,0.1)] disabled:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-medium text-text-primary text-sm">
                {t('auth.login.password')}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                placeholder="demo123"
                className="px-4 py-3.5 border border-border rounded-md text-[15px] transition-all duration-base bg-surface text-text-primary shadow-xs hover:border-accent focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(107,122,153,0.1)] disabled:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>

            {error && (
              <div className="px-4 py-3.5 bg-error/10 text-error rounded-md text-sm text-center border border-error/20 animate-shake">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="px-4 py-4 border-none bg-primary text-white font-semibold text-base rounded-lg cursor-pointer transition-all duration-base shadow-md relative overflow-hidden hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-lg hover:not-disabled:bg-primary-light active:not-disabled:-translate-y-px active:not-disabled:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-base hover:not-disabled:before:opacity-100"
              disabled={isLoading}
            >
              {isLoading ? t('common.loading') : t('auth.login.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
