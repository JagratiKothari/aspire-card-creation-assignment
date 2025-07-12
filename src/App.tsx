import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Credits } from './pages/Credits';
import { Payments } from './pages/Payments';
import { Settings } from './pages/Settings';
import { Cards } from './pages/Cards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <BrowserRouter basename="/aspire-card-creation-assignment">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default route: redirect / → /cards */}
          <Route index element={<Navigate to="cards" replace />} />
          
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />} />
          <Route path="payments" element={<Payments />} />
          <Route path="credit" element={<Credits />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
