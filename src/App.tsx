import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VisualShowcase } from './components/VisualShowcase';
import { HowItWorks } from './components/HowItWorks';
import { SystemRequirements } from './components/SystemRequirements';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ComingSoonModal } from './components/ComingSoonModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { RefundPolicy } from './pages/RefundPolicy';
import { SupportPage } from './pages/SupportPage';
import { PurchaseSuccess } from './pages/PurchaseSuccess';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'lifetime' | 'exclusive'>('exclusive');

  // Normalize route string from hash or pathname
  const normalizeRoute = (raw: string): string | null => {
    const clean = raw.replace(/^#\/?/, '').replace(/^\//, '').split('?')[0].split('#')[0].toLowerCase();
    if (['success', 'purchase-success', 'order-success', 'checkout-success'].includes(clean)) {
      return 'success';
    }
    if (['privacy', 'terms', 'refunds', 'support'].includes(clean)) {
      return clean;
    }
    return null;
  };

  // Handle URL hash and pathname changes
  useEffect(() => {
    const handleLocation = () => {
      const hashRoute = normalizeRoute(window.location.hash);
      const pathRoute = normalizeRoute(window.location.pathname);
      const resolved = hashRoute || pathRoute || 'home';

      setCurrentRoute(resolved);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleLocation();
    window.addEventListener('hashchange', handleLocation);
    window.addEventListener('popstate', handleLocation);
    return () => {
      window.removeEventListener('hashchange', handleLocation);
      window.removeEventListener('popstate', handleLocation);
    };
  }, []);

  const navigate = (route: string) => {
    if (['privacy', 'terms', 'refunds', 'support', 'success'].includes(route)) {
      window.location.hash = `#/${route}`;
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      setCurrentRoute('home');
    }
  };

  const handleOpenPricingModal = (tierId?: 'lifetime' | 'exclusive') => {
    setSelectedTier(tierId || 'exclusive');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F8FAFC] flex flex-col selection:bg-luma-blue/20 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onOpenPricingModal={handleOpenPricingModal}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <>
            <Hero onOpenPricingModal={handleOpenPricingModal} />
            <Features />
            <VisualShowcase />
            <HowItWorks />
            <SystemRequirements />
            <Pricing onSelectTier={handleOpenPricingModal} />
            <FAQ />
            <FinalCTA onOpenPricingModal={handleOpenPricingModal} />
          </>
        )}

        {currentRoute === 'privacy' && (
          <PrivacyPolicy onBack={() => navigate('home')} />
        )}

        {currentRoute === 'terms' && (
          <TermsOfService onBack={() => navigate('home')} />
        )}

        {currentRoute === 'refunds' && (
          <RefundPolicy onBack={() => navigate('home')} />
        )}

        {currentRoute === 'support' && (
          <SupportPage onBack={() => navigate('home')} />
        )}

        {currentRoute === 'success' && (
          <PurchaseSuccess onBack={() => navigate('home')} onNavigate={navigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Honest Coming Soon / Launch Waitlist Modal */}
      <ComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTierId={selectedTier}
      />
    </div>
  );
}

export default App;
