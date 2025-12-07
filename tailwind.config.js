/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6b7a99',
          light: '#8793af',
          dark: '#4a5568',
        },
        accent: '#9ca6ba',
        background: '#f7f8fa',
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#fafbfc',
        },
        border: {
          DEFAULT: '#e4e7ec',
          light: '#f0f2f5',
        },
        text: {
          primary: '#2d3748',
          secondary: '#5a6a7a',
          tertiary: '#8893a4',
        },
        success: '#5c946e',
        error: '#c5697a',
        warning: '#d4965f',
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #f7f8fa 0%, #eef0f5 100%)',
        'gradient-surface': 'linear-gradient(180deg, #ffffff 0%, #fafbfc 100%)',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(45, 55, 72, 0.04)',
        sm: '0 2px 4px rgba(45, 55, 72, 0.06)',
        md: '0 4px 8px rgba(45, 55, 72, 0.08)',
        lg: '0 8px 16px rgba(45, 55, 72, 0.1)',
        xl: '0 12px 24px rgba(45, 55, 72, 0.12)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        smooth: '400ms',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scaleX(1)',
          },
          '50%': {
            opacity: '0.6',
            transform: 'scaleX(0.98)',
          },
        },
        slideInDown: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
        pulse: 'pulse 2.5s ease-in-out infinite',
        slideInDown: 'slideInDown 0.3s ease-out',
        shake: 'shake 0.3s ease-in-out',
      },
    },
  },
}
