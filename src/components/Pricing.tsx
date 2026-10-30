import React from 'react';
import { PRICING_TIERS } from '../data/mockData';
import { Check, Sparkles, Info, Clock } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierId: 'trial' | 'lifetime' | 'exclusive') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#06090E] border-t border-surface-border/50 relative">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-luma-blue/10 via-transparent to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-luma-blue/40 text-xs text-luma-blue font-mono uppercase tracking-wider shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-luma-blue animate-pulse" />
            <span>Primary Offer • 7-Day Free Trial</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Try Luma Free for 7 Days.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Experience music-reactive edge lighting, synchronized lyrics, and all 8 visual worlds on your Windows setup with zero upfront cost. Keep it permanently whenever you're ready.
          </p>
        </div>

        {/* Trial Delay Policy Reassurance Banner */}
        <div className="max-w-4xl mx-auto mb-14 rounded-2xl bg-surface-card/90 border border-luma-blue/30 p-5 sm:p-6 shadow-glow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-32 bg-luma-blue/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
            <div className="w-11 h-11 rounded-xl bg-luma-blue/15 border border-luma-blue/40 flex items-center justify-center shrink-0 text-luma-blue">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-luma-blue font-semibold">
                  Trial Access Guarantee
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs text-muted-dark font-mono">Full 7 Days Protected</span>
              </div>
              <p className="text-sm font-semibold text-white leading-snug">
                “If your access isn't ready yet, don't worry. Your trial will be extended so you get the full 7 days to enjoy Luma once access is available.”
              </p>
              <p className="text-xs text-muted-light leading-relaxed">
                Waiting for access will never eat into your trial period. Your 7 days of evaluation begin strictly after your build is delivered and activated on your PC.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid - 3 Column Layout highlighting Trial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          
          {PRICING_TIERS.map((tier) => {
            const isTrial = tier.id === 'trial';
            const isExclusive = tier.id === 'exclusive';
            
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isTrial
                    ? 'bg-gradient-to-b from-[#0F1829] via-surface-card to-[#0A0F1A] border-2 border-luma-blue shadow-glow-md lg:-translate-y-2'
                    : isExclusive
                    ? 'bg-surface-card border border-surface-border hover:border-luma-violet/50 shadow-xl'
                    : 'bg-surface-card border border-surface-border hover:border-surface-border/80 shadow-xl'
                }`}
              >
                {/* Badge */}
                {isTrial ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Primary Highlighted Offer</span>
                  </div>
                ) : isExclusive ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-surface-muted border border-surface-border text-muted-light text-xs font-medium uppercase tracking-wider">
                    Enthusiast Tier
                  </div>
                ) : null}

                <div>
                  {/* Tier Title & Price */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <span className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md border ${
                      isTrial
                        ? 'bg-luma-blue/15 border-luma-blue/40 text-luma-blue font-semibold'
                        : 'bg-surface border-surface-border text-muted-light'
                    }`}>
                      {isTrial ? '7-Day Free' : 'Planned Launch Price'}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-dark font-mono uppercase">
                      / {tier.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 min-h-[40px]">
                    {tier.headline}
                  </p>

                  {/* Delay notice callout if present on card */}
                  {tier.delayNotice && (
                    <div className="mb-6 p-3 rounded-xl bg-luma-blue/10 border border-luma-blue/20 text-xs text-sky-200 leading-snug">
                      <span className="font-semibold block text-white mb-0.5">Delay Protection:</span>
                      {tier.delayNotice}
                    </div>
                  )}

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-muted-dark">
                      What's Included:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                          isTrial ? 'text-luma-blue' : isExclusive ? 'text-luma-violet' : 'text-sky-400'
                        }`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-muted-light leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to action & Transparency Notice */}
                <div className="space-y-3 pt-6 border-t border-surface-border">
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 group ${
                      isTrial
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-glow-md'
                        : isExclusive
                        ? 'bg-surface hover:bg-surface-hover border border-luma-violet/40 hover:border-luma-violet text-white'
                        : 'bg-surface hover:bg-surface-hover border border-surface-border hover:border-luma-blue/40 text-white'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-muted-dark">
                      {isTrial 
                        ? 'No credit card required • Full 7 days upon activation' 
                        : 'One-time purchase • No recurring subscription'}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Honest Disclosure Box */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-surface-card/60 border border-surface-border p-5 text-xs text-muted leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-luma-blue shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-white font-medium">Trial &amp; Launch Status:</p>
            <p>
              The 7-Day Free Trial gives you full access to all Luma features without payment. If your build access is staged, your trial timer will not start until your installation is validated and ready to run.
            </p>
            <p className="text-muted-dark pt-1">
              Permanent Lifetime ($4.99) and Exclusive ($9.99) licenses will be available for direct checkout upon public release via Lemon Squeezy. Project Luma is currently in active Windows beta testing; checkout is not yet live. You can request 7-day evaluation access or join the waitlist above.
            </p>
            <p className="text-muted-dark pt-1 border-t border-surface-border/50 text-[11px]">
              <strong className="text-white">Product Delivery:</strong> Digital software for Windows 10/11. Upon public release, purchased license keys and installer download links will be delivered immediately on-screen at checkout and sent to your email.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
