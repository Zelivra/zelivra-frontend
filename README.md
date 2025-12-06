# Zelivra Frontend

Zelivra helps you monitor and control production costs in real-time.

## Features

- 🌍 **Multi-language Support**: Polish (default) and English
- 🔐 **Authentication System**: Secure login with JWT tokens
- 🗺️ **Interactive Map**: Leaflet-based area selection for production zones
- 📊 **Dashboard**: Real-time monitoring and analytics
- 🎨 **Modern UI/UX**: Sleek, non-generic design with gradient backgrounds
- 🔄 **API Integration**: All data fetched via dummy API calls

## Tech Stack

- **React 19** with TypeScript
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **i18next** - Internationalization
- **Leaflet** - Interactive maps
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Demo Credentials

- Email: `demo@zelivra.com`
- Password: `demo123`

## Project Structure

```
src/
├── api/              # API client and service layer
│   ├── client.ts     # Axios client with interceptors
│   ├── auth.ts       # Authentication API calls
│   └── areas.ts      # Areas/coordinates API calls
├── components/       # Reusable components
│   ├── LanguageSwitcher.tsx
│   └── MapSelector.tsx
├── contexts/         # React contexts
│   ├── AuthContext.ts
│   └── AuthProvider.tsx
├── hooks/            # Custom React hooks
│   └── useAuth.ts
├── i18n/             # Internationalization
│   ├── config.ts
│   └── locales/
│       ├── en.json
│       └── pl.json
├── pages/            # Page components
│   ├── Landing.tsx   # Pre-login landing page
│   ├── Login.tsx     # Login page
│   └── Dashboard.tsx # Post-login dashboard
└── styles/           # CSS modules
```

## API Structure

All API calls are dummy implementations that simulate backend responses:

- **POST /api/v1/auth/login** - Returns JWT access token
- **POST /api/v1/auth/refresh** - Refreshes access token (HttpOnly cookie)
- **POST /api/v1/auth/logout** - Clears session
- **POST /api/v1/areas** - Saves area coordinates
- **GET /api/v1/areas** - Retrieves saved areas

## Features Implementation

### Authentication
- JWT token stored in localStorage
- Refresh token handled via HttpOnly cookies
- Automatic token refresh on 401 errors
- Protected routes with authentication guards

### Internationalization
- Default language: Polish (pl)
- Supported languages: Polish, English
- Language switcher in navigation
- Persistent language preference

### Map Integration
- Click to add points on map
- Minimum 3 points to create area
- Visual polygon overlay
- Coordinates sent to backend
- Saved areas displayed below map

### UI/UX Design
- Purple gradient backgrounds
- Glassmorphism effects (backdrop blur)
- Smooth transitions and hover effects
- Responsive design
- Modern, sleek interface

## License

See LICENSE file for details.
