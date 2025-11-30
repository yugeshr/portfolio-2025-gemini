import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { CaseStudyPage } from './components/CaseStudyPage';
import { ScrollProgress } from './components/ScrollProgress';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Preloader } from './components/Preloader';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <Preloader />
      <HashRouter>
        <ScrollToTop />
        <ScrollProgress />
        <div className="bg-background text-primary min-h-screen">
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work/:id" element={<CaseStudyPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </HashRouter>
    </>
  );
};

export default App;