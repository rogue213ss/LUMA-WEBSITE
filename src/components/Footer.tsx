import type { FC } from 'react';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('home');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070B] border-t border-surface-border text-xs text-muted-dark py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/icon.png" alt="Project Luma" className="w-6 h-6 object-contain" />
              <span className="text-base font-bold text-white tracking-tight">Project Luma</span>
            </div>
            
            <p className="text-muted leading-relaxed text-xs">
              "Don't just listen. Feel it."
              <br />
              The music-reactive desktop companion that transforms audio into living light, lyrics, and visual worlds on Windows.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-muted-light font-medium">Follow:</span>
              <a 
                href="https://x.com/luma_player" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-luma-blue font-mono text-xs hover:underline inline-flex items-center gap-1"
              >
                @luma.player
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('#features')}
                  className="text-muted hover:text-white transition-colors"
                >
                  Features &amp; Ambient Glow
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#showcase')}
                  className="text-muted hover:text-white transition-colors"
                >
                  8 Visual Worlds
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#how-it-works')}
                  className="text-muted hover:text-white transition-colors"
                >
                  How Luma Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#pricing')}
                  className="text-muted hover:text-white transition-colors"
                >
                  Pricing &amp; 7-Day Trial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#faq')}
                  className="text-muted hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="text-muted hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="text-muted hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('refunds')}
                  className="text-muted hover:text-white transition-colors text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('support')}
                  className="text-muted hover:text-white transition-colors text-left"
                >
                  Contact &amp; Support Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Architecture & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              System Specs
            </h4>
            <div className="p-3.5 rounded-xl bg-surface-card border border-surface-border space-y-2 text-[11px] font-mono">
              <div className="flex items-center justify-between text-muted-light">
                <span>Platform:</span>
                <span className="text-white">Windows 10/11 x64</span>
              </div>
              <div className="flex items-center justify-between text-muted-light">
                <span>Audio Engine:</span>
                <span className="text-emerald-400">WASAPI Loopback</span>
              </div>
              <div className="flex items-center justify-between text-muted-light">
                <span>Telemetry:</span>
                <span className="text-emerald-400">Zero / Disabled</span>
              </div>
              <div className="flex items-center justify-between text-muted-light">
                <span>License Model:</span>
                <span className="text-sky-400">One-Time (No Sub)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-dark">
          <p>
            © {new Date().getFullYear()} Project Luma. All rights reserved.
          </p>

          <p className="max-w-xl text-center sm:text-right leading-relaxed">
            Project Luma is an independent software application developed for Windows. Spotify is a registered trademark of Spotify AB. Project Luma is not affiliated with or endorsed by Spotify AB.
          </p>
        </div>

      </div>
    </footer>
  );
};
