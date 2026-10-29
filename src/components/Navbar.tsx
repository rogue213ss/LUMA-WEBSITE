import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Monitor } from 'lucide-react';

interface NavbarProps {
  onOpenPricingModal: (tierId?: 'trial' | 'lifetime' | 'exclusive') => void;
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPricingModal, currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentRoute !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-surface-border/60 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Project Luma Home"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-surface-card border border-surface-border group-hover:border-luma-blue/50 transition-all duration-300 overflow-hidden shadow-inner-light">
              <div className="absolute inset-0 bg-gradient-to-br from-luma-blue/20 via-transparent to-luma-violet/20 opacity-70 group-hover:opacity-100 transition-opacity" />
              <img src="/icon.png" alt="Luma" className="w-5 h-5 object-contain relative z-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-luma-blue transition-colors">
                  Luma
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface-muted border border-surface-border text-muted">
                  Win 10/11
                </span>
              </div>
              <p className="text-[11px] text-muted-dark hidden sm:block tracking-wide">
                Windows Music Companion
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('#features')}
              className="text-muted-light hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('#showcase')}
              className="text-muted-light hover:text-white transition-colors"
            >
              Visual Worlds
            </button>
            <button
              onClick={() => handleNavClick('#how-it-works')}
              className="text-muted-light hover:text-white transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="text-muted-light hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Pricing</span>
              <span className="text-[10px] font-mono uppercase bg-luma-blue/15 text-luma-blue px-1.5 py-0.2 rounded border border-luma-blue/30">
                Trial Free
              </span>
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-muted-light hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('support')}
              className={`transition-colors ${currentRoute === 'support' ? 'text-luma-blue font-semibold' : 'text-muted-light hover:text-white'}`}
            >
              Support
            </button>
          </nav>

          {/* CTA & Platform Indicator */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-dark px-2.5 py-1 rounded-full bg-surface/50 border border-surface-border">
              <Monitor className="w-3.5 h-3.5 text-luma-blue" />
              <span>Windows Desktop</span>
            </div>
            <button
              onClick={() => onOpenPricingModal('trial')}
              className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500/20 via-sky-500/10 to-blue-600/20 hover:from-sky-500/30 hover:to-blue-600/30 border border-luma-blue/50 hover:border-luma-blue text-sm font-semibold text-white transition-all duration-200 shadow-glow-sm hover:shadow-glow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-luma-blue animate-pulse" />
              <span>Try 7 Days Free</span>
              <span className="text-xs text-emerald-400 font-mono ml-0.5">$0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenPricingModal('trial')}
              className="px-3 py-1.5 rounded-lg bg-luma-blue/15 border border-luma-blue/40 text-xs font-semibold text-luma-blue"
            >
              Try 7 Days Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface-card border border-surface-border text-muted-light hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 border-b border-surface-border backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-base font-medium">
            <button
              onClick={() => handleNavClick('#features')}
              className="text-left py-2 px-3 rounded-lg text-muted-light hover:text-white hover:bg-surface-card"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('#showcase')}
              className="text-left py-2 px-3 rounded-lg text-muted-light hover:text-white hover:bg-surface-card"
            >
              Visual Worlds
            </button>
            <button
              onClick={() => handleNavClick('#how-it-works')}
              className="text-left py-2 px-3 rounded-lg text-muted-light hover:text-white hover:bg-surface-card"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="text-left py-2 px-3 rounded-lg text-muted-light hover:text-white hover:bg-surface-card flex items-center justify-between"
            >
              <span>Pricing</span>
              <span className="text-xs font-mono uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                7 Days Free
              </span>
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-left py-2 px-3 rounded-lg text-muted-light hover:text-white hover:bg-surface-card"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('support')}
              className="text-left py-2 px-3 rounded-lg text-muted-light hover:text-white hover:bg-surface-card"
            >
              Support &amp; Documentation
            </button>
          </div>

          <div className="pt-3 border-t border-surface-border flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricingModal('trial');
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-center font-medium text-white flex items-center justify-center gap-2 shadow-glow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Try Luma Free for 7 Days</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPricingModal('lifetime');
              }}
              className="w-full py-2.5 rounded-lg bg-surface-card border border-surface-border text-center font-medium text-white flex items-center justify-center gap-2"
            >
              <span>Luma Lifetime</span>
              <span className="text-luma-blue font-mono">$5.99</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
