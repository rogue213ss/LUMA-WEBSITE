import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VisualShowcase } from './components/VisualShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ComingSoonModal } from './components/ComingSoonModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { RefundPolicy } from './pages/RefundPolicy';
import { SupportPage } from './pages/SupportPage';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'lifetime' | 'exclusive'>('lifetime');

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['privacy', 'terms', 'refunds', 'support'].includes(hash)) {
        setCurrentRoute(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash || hash === 'home') {
        setCurrentRoute('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (route: string) => {
    if (['privacy', 'terms', 'refunds', 'support'].includes(route)) {
      window.location.hash = `#/${route}`;
      setCurrentRoute(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '';
      setCurrentRoute('home');
    }
  };

  const handleOpenPricingModal = (tierId?: 'lifetime' | 'exclusive') => {
    if (tierId) {
      setSelectedTier(tierId);
    }
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
