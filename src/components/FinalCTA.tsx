import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Monitor } from 'lucide-react';

interface FinalCTAProps {
  onOpenPricingModal: (tierId?: 'lifetime' | 'exclusive') => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenPricingModal }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#080B10] to-[#040609] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-radial-gradient from-luma-blue/10 via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="rounded-3xl bg-surface-card/80 border border-surface-border p-8 sm:p-14 relative overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Subtle edge glow */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-luma-blue/50 to-transparent" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-muted/80 border border-surface-border text-xs text-muted-light mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Windows Desktop Companion</span>
            <span className="text-muted-dark">•</span>
            <span className="text-luma-blue font-mono font-medium">One-Time Purchase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Turn your desktop into a living stage.
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Music-reactive lighting, cinematic lyrics, and 8 immersive visual worlds for Windows. No subscriptions. No tracking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenPricingModal('lifetime')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base shadow-glow-md hover:shadow-glow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <span>Get Luma Lifetime</span>
              <span className="px-2 py-0.5 rounded-md bg-black/20 text-xs font-mono font-medium">$5.99</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenPricingModal('exclusive')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-surface hover:bg-surface-hover border border-luma-violet/40 hover:border-luma-violet text-white font-medium text-base transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-luma-violet" />
              <span>Luma Exclusive ($9.99)</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-dark font-mono">
            <span className="flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-luma-blue" />
              Windows 10 / 11 (64-bit)
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% On-Device WASAPI Audio
            </span>
            <span>Up to 3 Personal PCs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
