# 🌾 Zelivra - Farming Cost Control

Zelivra is a comprehensive farming cost control application that helps farmers and agricultural businesses calculate costs, estimate profits/losses, and make informed decisions about crop production.

![Zelivra Main Page](https://github.com/user-attachments/assets/368abf0e-e5a2-4dfe-b8c7-d1c79855fed1)

## ✨ Features

- **Interactive Cost Calculator** - Select crops, areas, and agricultural inputs to calculate costs
- **Real-time Profit/Loss Estimation** - Get instant calculations with detailed breakdowns
- **Dashboard Statistics** - View key metrics at a glance
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Micro-interactions** - Smooth animations and hover effects for better UX
- **Type-Safe** - Built with TypeScript for reliability
- **Modern Stack** - Next.js 16, React, Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 How to Use

1. **Select a Crop** - Choose from available crops (Wheat, Corn, Tomatoes, Soybeans, Potatoes)
2. **Select an Area** - Pick your farming area with size specifications
3. **Add Agricultural Inputs** - Enter quantities for:
   - Fertilizers (NPK, Organic Compost)
   - Pesticides and Herbicides
   - Seeds
   - Irrigation Water
   - Farm Labor
   - Equipment (Tractor Hours)
4. **Calculate** - Click "Calculate Costs" to see results
5. **Review Results** - View total costs, expected revenue, profit/loss, and cost breakdown

## 🏗️ Project Structure

```
zelivra-core/
├── app/
│   ├── api/v1/service/          # API routes (dummy data)
│   │   ├── crops/               # Crops endpoint
│   │   ├── inputs/              # Agricultural inputs endpoint
│   │   ├── areas/               # Farming areas endpoint
│   │   ├── calculations/        # Cost calculations endpoint
│   │   └── dashboard/           # Dashboard stats endpoint
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main page
│   └── globals.css              # Global styles
├── components/
│   ├── features/                # Feature components
│   │   ├── CostCalculator.tsx
│   │   ├── ResultsDisplay.tsx
│   │   ├── DashboardStats.tsx
│   │   └── Header.tsx
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Badge.tsx
│       └── LoadingSpinner.tsx
├── lib/
│   ├── api/                     # API client layer
│   │   └── client.ts
│   └── types/                   # TypeScript DTOs
│       └── index.ts
└── package.json
```

## 🔌 API Endpoints

All API endpoints follow the pattern `/api/v1/service/*` and are ready for backend integration:

- `GET /api/v1/service/crops` - Get all available crops
- `GET /api/v1/service/inputs` - Get agricultural inputs
- `GET /api/v1/service/areas` - Get farming areas
- `POST /api/v1/service/areas` - Create new farming area
- `POST /api/v1/service/calculations` - Calculate costs
- `GET /api/v1/service/dashboard/stats` - Get dashboard statistics

## 📦 DTOs (Data Transfer Objects)

All DTOs are defined in `lib/types/index.ts`:

- `CropType` - Crop information
- `AgriculturalInput` - Input details with pricing
- `Area` - Farming area specifications
- `CostCalculation` - Calculation results
- `InputUsage` - Input usage in calculations
- `DashboardStats` - Dashboard metrics
- `ApiResponse<T>` - Generic API response wrapper

## 🎨 Technologies

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom React components
- **State Management:** React hooks
- **API:** Next.js API routes

## 🧪 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Zelivra** - Control Your Farming Costs 🌱
