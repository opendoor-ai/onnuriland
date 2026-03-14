import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header, Footer } from './components/Layout';
import { FloatingButtons } from './components/FloatingButtons';
import { MainPage, DetailsPage, ServicesPage, AboutPage, ContactPage, TermsPage, PrivacyPage } from './pages/Pages';
import { AnimatePresence } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}
