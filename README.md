# Aspire Card Creation Assignment

A modern React application for managing virtual debit cards, built for the Aspire Card Creation Assignment. This app features a beautiful UI, card carousel, freeze/unfreeze functionality, transaction history, and more.

## 🚀 Features
- **Card Carousel**: Swipe through your debit cards, view details, and take actions.
- **Freeze/Unfreeze**: Instantly freeze or unfreeze your card; disables all other actions when frozen.
- **Add New Card**: Create new cards with a custom name.
- **Transaction History**: View recent transactions for each card.
- **Tabs**: Switch between "My debit cards" and "All company cards" (placeholder).
- **Pixel-perfect UI**: Styled to match the provided design, with responsive layouts and custom icons.
- **Accessible**: Keyboard and screen reader friendly.
- **Unit Tests**: Major components covered with React Testing Library.

## 🗂️ Folder Structure
```
aspire-card-creation-assignment/
├── public/
├── src/
│   ├── api/                # Mock API services
│   ├── assets/             # SVGs and images
│   ├── components/
│   │   └── Tabs/           # Tab navigation
│   ├── pages/
│   │   └── Cards/          # Main card management UI
│   │       └── __tests__/  # Unit tests for Cards page components
│   ├── types.ts            # TypeScript types
│   ├── constants.ts        # App constants
│   ├── utils/              # Utility functions
│   └── main.tsx            # App entry point
├── package.json
├── README.md
└── ...
```

## 🛠️ Tech Stack
- **React** (with hooks)
- **TypeScript**
- **Material-UI (MUI)** for UI components
- **Styled-components** for custom styles
- **React Router** (if navigation is used)
- **Jest** & **React Testing Library** for testing
- **Vite** for fast development

## 🏁 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/aspire-card-creation-assignment.git
cd aspire-card-creation-assignment
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the app
```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

### 4. Run tests
```bash
npm test
# or
yarn test
```

## 🧪 Testing
- All major components are covered with unit tests in their respective `__tests__` folders.
- Tests use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Jest](https://jestjs.io/).
- To run all tests:
  ```bash
  npm test
  # or
  yarn test
  ```

## ✨ Contribution Guidelines
- Fork the repo and create a feature branch.
- Write clear, descriptive commit messages.
- Add/modify tests for new features or bug fixes.
- Open a pull request with a clear description of your changes.

## 📦 Mock API
- The app uses mock API services in `src/api/` for cards and transactions.
- No real backend is required.

## 📄 License
This project is for assignment/demo purposes only.

## 🚀 Deployment

The latest version of this app is deployed and accessible at:

[https://jagratikothari.github.io/aspire-card-creation-assignment/cards](https://jagratikothari.github.io/aspire-card-creation-assignment/cards)

You can always access the live app at the above URL.

---

**Enjoy managing your Aspire cards!**
