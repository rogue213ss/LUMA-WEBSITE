import React from 'react';
import { X, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { POLAR_LIFETIME_CHECKOUT_URL, POLAR_EXCLUSIVE_CHECKOUT_URL } from '../data/mockData';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: 'lifetime' | 'exclusive';
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  selectedTierId = 'exclusive'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#0B0F17] border border-surface-border p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Atmosphere glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luma-violet/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-muted-dark hover:text-white hover:bg-surface-card transition-colors z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 space-y-6">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luma-violet/15 border border-luma-violet/30 text-xs font-mono uppercase tracking-wider text-luma-violet">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{selectedTierId === "exclusive" ? "Enthusiast Tier • $9.99 USD" : "Lifetime License • $5.99 USD"}</span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Luma Exclusive Tier
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              For power users and enthusiasts who want early preview builds, experimental visual modes, a supporter badge, and direct input into development.
            </p>
          </div>

          {/* Status Note */}
          <div className="p-4 rounded-2xl bg-surface-card border border-luma-violet/30 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Polar Checkout Live</span>
            </div>
            <p className="text-muted-light leading-relaxed">
              Both Luma Lifetime ($5.99) and Luma Exclusive ($9.99) are now live for direct checkout via Polar with instant license key delivery.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-dark">
              Options Available Now:
            </div>

            {/* Option 1: Lifetime Now */}
            <a
              href={POLAR_LIFETIME_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>Get Luma Lifetime ($5.99)</span>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Option 2: Exclusive Now */}
            <a
              href={POLAR_EXCLUSIVE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-surface hover:bg-surface-hover border border-luma-violet/40 hover:border-luma-violet text-white font-semibold text-sm transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-luma-violet" />
                <span>Get Luma Exclusive ($9.99)</span>
              </div>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Policy notes */}
          <div className="pt-2 border-t border-surface-border/60 flex items-center justify-between text-[11px] text-muted-dark">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              One-Time Payment
            </span>
            <span>Up to 3 Personal PCs</span>
            <span>Zero Telemetry</span>
          </div>

        </div>
      </div>
    </div>
  );
};
