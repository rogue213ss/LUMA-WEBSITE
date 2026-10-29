import React, { useState } from 'react';
import { X, Check, Bell, Shield, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: 'lifetime' | 'exclusive';
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  selectedTierId = 'lifetime'
}) => {
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<'lifetime' | 'exclusive'>(selectedTierId);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected tier if opened with specific prop
  React.useEffect(() => {
    if (selectedTierId) {
      setTier(selectedTierId);
    }
  }, [selectedTierId]);

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS.find(t => t.id === tier) || PRICING_TIERS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    try {
      // Store locally without external trackers
      const list = JSON.parse(localStorage.getItem('luma_launch_waitlist') || '[]');
      list.push({ email, tier, timestamp: new Date().toISOString() });
      localStorage.setItem('luma_launch_waitlist', JSON.stringify(list));
    } catch {
      // Fallback
    }

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#0B0F17] border border-surface-border p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle atmospheric glow inside modal */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-luma-blue/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-surface text-muted-dark hover:text-white hover:bg-surface-card transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              You're on the priority launch list!
            </h3>

            <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
              We've registered <span className="text-white font-medium">{email}</span> for priority access to <span className="text-luma-blue font-semibold">{currentTier.name} ({currentTier.price})</span> when Lemon Squeezy checkout goes live.
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-surface-card border border-surface-border text-white text-sm font-medium hover:bg-surface transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        ) : (
          /* Subscription & Launch Notice */
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-luma-blue animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-luma-blue">
                Phase 1 Preview • Public Launch Coming Soon
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Get notified when Luma launches
              </h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Project Luma is in final Windows testing. Payment processing and automated license keys will be powered by Lemon Squeezy upon public release.
              </p>
            </div>

            {/* Tier Switcher inside modal */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-surface border border-surface-border">
              <button
                type="button"
                onClick={() => setTier('lifetime')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  tier === 'lifetime'
                    ? 'bg-surface-card text-white border border-luma-blue/40 shadow-sm'
                    : 'text-muted-dark hover:text-muted'
                }`}
              >
                Luma Lifetime ($5.99)
              </button>
              <button
                type="button"
                onClick={() => setTier('exclusive')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  tier === 'exclusive'
                    ? 'bg-surface-card text-white border border-luma-violet/40 shadow-sm'
                    : 'text-muted-dark hover:text-muted'
                }`}
              >
                Luma Exclusive ($9.99)
              </button>
            </div>

            {/* Tier Details Summary */}
            <div className="p-3.5 rounded-xl bg-surface-card border border-surface-border text-xs space-y-1.5">
              <div className="flex justify-between items-center text-muted-light">
                <span className="font-medium text-white">{currentTier.name}</span>
                <span className="font-mono text-luma-blue font-semibold">{currentTier.price} one-time</span>
              </div>
              <p className="text-muted text-[11px] leading-tight">
                {currentTier.headline}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-medium text-muted-light mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white text-sm outline-none focus:border-luma-blue transition-colors placeholder:text-muted-dark"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>Notify Me At Launch</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </form>

            {/* Privacy Promise */}
            <div className="flex items-center gap-2 text-[11px] text-muted-dark justify-center pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero spam. No credit card required. Strictly one-time release notice.</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
