import React from 'react';
import { Sparkles, ArrowRight, Shield, Activity, Monitor, Clock } from 'lucide-react';
import { InteractivePlayerMockup } from './InteractivePlayerMockup';

interface HeroProps {
  onOpenPricingModal: (tierId?: 'trial' | 'lifetime' | 'exclusive') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPricingModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Atmospheric Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-luma-blue/10 via-luma-violet/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges & Announcement */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border text-xs text-muted-light shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-white">Project Luma for Windows</span>
            <span className="text-muted-dark">•</span>
            <span className="text-emerald-400 font-mono font-medium">7-Day Free Trial Available</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-muted/60 border border-surface-border text-xs text-muted-dark">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Private Audio Loopback</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Don't just listen. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luma-blue via-sky-200 to-indigo-300">
              Feel it.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-normal">
            Luma transforms whatever your Windows PC is playing into music-reactive screen-edge lighting, cinematic synchronized lyrics, and living visual worlds.
          </p>

          {/* Call to Actions - Primary 7-Day Free Trial */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onOpenPricingModal('trial')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base shadow-glow-md hover:shadow-glow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Try Luma Free for 7 Days</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="#pricing"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-surface-card hover:bg-surface border border-surface-border hover:border-luma-blue/40 text-muted-light hover:text-white font-medium text-base transition-colors flex items-center justify-center gap-2"
            >
              <span>View Lifetime Plans ($4.99)</span>
            </a>
          </div>

          {/* Trial Delay Policy Reassurance Pill */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-card/80 border border-surface-border text-xs text-muted-light text-center leading-normal">
              <Clock className="w-3.5 h-3.5 text-luma-blue shrink-0" />
              <span>
                <strong className="text-white">Trial Reassurance:</strong> If your access isn't ready yet, don't worry. Your trial will be extended so you get the full 7 days to enjoy Luma once access is available.
              </span>
            </div>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-dark">
            <div className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4 text-luma-blue" />
              <span>Windows 10 &amp; 11 (64-bit)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Spotify, YouTube, Media Players</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-400" />
              <span>No Accounts • Zero Telemetry</span>
            </div>
          </div>
        </div>

        {/* Product Visual Mockup (Interactive Showcase) */}
        <div className="mt-12 sm:mt-16">
          <InteractivePlayerMockup />
        </div>

      </div>
    </section>
  );
};
