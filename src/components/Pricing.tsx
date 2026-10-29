import React from 'react';
import { PRICING_TIERS } from '../data/mockData';
import { Check, Sparkles, Info } from 'lucide-react';

interface PricingProps {
  onSelectTier: (tierId: 'lifetime' | 'exclusive') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#06090E] border-t border-surface-border/50 relative">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-luma-blue/10 via-transparent to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-luma-blue font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest One-Time Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pay once. Keep it forever.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            No recurring monthly subscriptions. No hidden upkeep fees. Both tiers include lifetime personal usage on up to 3 Windows PCs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {PRICING_TIERS.map((tier) => {
            const isExclusive = tier.id === 'exclusive';
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isExclusive
                    ? 'bg-gradient-to-b from-surface-card via-surface-card to-[#0e1422] border-2 border-luma-violet/50 shadow-glow-violet'
                    : 'bg-surface-card border border-surface-border hover:border-luma-blue/40 shadow-xl'
                }`}
              >
                {/* Badge if Exclusive */}
                {isExclusive && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-luma-violet to-indigo-500 text-white text-xs font-semibold uppercase tracking-wider shadow-md">
                    Enthusiast &amp; Early Access
                  </div>
                )}

                <div>
                  {/* Tier Title & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-surface border border-surface-border text-muted-light">
                      One-time
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-dark font-mono uppercase">
                      / single payment
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {tier.headline}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-dark">
                      What's Included:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isExclusive ? 'text-luma-violet' : 'text-luma-blue'}`}>
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
                    className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 group ${
                      isExclusive
                        ? 'bg-gradient-to-r from-luma-violet to-indigo-600 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-glow-violet'
                        : 'bg-surface hover:bg-surface-hover border border-luma-blue/40 hover:border-luma-blue text-white shadow-glow-sm'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-muted-dark">
                      Proposed offering • One-time purchase • No subscription
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
            <p className="text-white font-medium">Transparent Launch Status:</p>
            <p>
              These prices and entitlements represent our proposed product offerings. Checkout and license activation will be enabled at public launch via Lemon Squeezy. No payment processing is active on this site right now, and clicking a pricing tier will allow you to join the priority launch notification list.
            </p>
            <p className="text-muted-dark pt-1">
              * Note on feature requests: Luma Exclusive grants priority consideration for community requests, but does not promise guaranteed implementation or custom development.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
