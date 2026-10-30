import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Monitor, Clock } from 'lucide-react';

interface FinalCTAProps {
  onOpenPricingModal: (tierId?: 'trial' | 'lifetime' | 'exclusive') => void;
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
            <span className="text-emerald-400 font-mono font-medium">7-Day Free Trial Available</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Turn your desktop into a living stage.
          </h2>

          <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Music-reactive lighting, cinematic lyrics, and 8 immersive visual worlds for Windows. Try everything free for 7 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={() => onOpenPricingModal('trial')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base shadow-glow-md hover:shadow-glow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Try Luma Free for 7 Days</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenPricingModal('lifetime')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border hover:border-luma-blue/40 text-white font-medium text-base transition-colors flex items-center justify-center gap-2"
            >
              <span>Lifetime Access ($4.99)</span>
            </button>
          </div>

          {/* Reassurance text */}
          <div className="max-w-lg mx-auto mb-8 text-xs text-muted leading-relaxed flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-luma-blue shrink-0" />
            <span>
              If your access isn't ready yet, don't worry. Your trial will be extended so you get the full 7 days to enjoy Luma once access is available.
            </span>
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
