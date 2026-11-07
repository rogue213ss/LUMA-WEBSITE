import React from 'react';
import { PRICING_TIERS, LUMA_LATEST_INSTALLER_URL } from '../data/mockData';
import { Check, Sparkles, Shield, Monitor, Key, ExternalLink, Info, Download } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingProps {
  onSelectTier: (tierId: 'lifetime' | 'exclusive') => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  const handleTierClick = (tier: PricingTier) => {
    if (tier.checkoutUrl) {
      window.open(tier.checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelectTier(tier.id as 'lifetime' | 'exclusive');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#06090E] border-t border-surface-border/50 relative">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-luma-blue/10 via-transparent to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-luma-blue/40 text-xs text-luma-blue font-mono uppercase tracking-wider shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-luma-blue animate-pulse" />
            <span>Lifetime Ownership • No Subscriptions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Simple, Transparent Pricing. Own It for Life.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            One-time purchase. No recurring fees. Use on up to 3 personal Windows devices with 100% private on-device audio analysis.
          </p>
        </div>

        {/* Pricing Cards Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {PRICING_TIERS.map((tier) => {
            const isLifetime = tier.id === 'lifetime';
            
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                  isLifetime
                    ? 'bg-gradient-to-b from-[#0F1829] via-surface-card to-[#0A0F1A] border-2 border-luma-blue shadow-glow-md lg:-translate-y-2'
                    : 'bg-surface-card border border-surface-border hover:border-luma-violet/50 shadow-xl'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md flex items-center gap-1.5 ${
                    isLifetime
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white'
                      : 'bg-surface-muted border border-luma-violet/40 text-luma-violet'
                  }`}>
                    {isLifetime && <Sparkles className="w-3 h-3" />}
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Price */}
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <span className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md border ${
                      isLifetime
                        ? 'bg-luma-blue/15 border-luma-blue/40 text-luma-blue font-semibold'
                        : 'bg-luma-violet/15 border-luma-violet/30 text-luma-violet font-semibold'
                    }`}>
                      {tier.period}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-dark font-mono uppercase">
                      USD / lifetime
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-6 min-h-[44px]">
                    {tier.headline}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-muted-dark">
                      {tier.id === 'exclusive' ? 'Everything in Lifetime, Plus:' : "What's Included:"}
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                          isLifetime ? 'text-luma-blue' : 'text-luma-violet'
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

                {/* Call to action & Guarantee Notice */}
                <div className="space-y-3 pt-6 border-t border-surface-border">
                  <button
                    onClick={() => handleTierClick(tier)}
                    className={`w-full py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 group ${
                      isLifetime
                        ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-glow-md hover:shadow-glow-lg'
                        : 'bg-surface hover:bg-surface-hover border border-luma-violet/40 hover:border-luma-violet text-white'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] text-muted-dark">
                      {isLifetime 
                        ? 'Instant Polar Checkout • 3 Personal PCs • No Subscriptions' 
                        : 'Instant Polar Checkout • Supporter Badge • Early Builds'}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Honest Disclosure & Trust Box */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl bg-surface-card/60 border border-surface-border p-6 text-xs text-muted leading-relaxed space-y-4">
          <div className="flex items-center gap-2 text-white font-medium text-sm">
            <Info className="w-4 h-4 text-luma-blue shrink-0" />
            <span>Customer Delivery &amp; Payment Transparency</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="space-y-1 p-3 rounded-xl bg-surface/50 border border-surface-border/60">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Key className="w-3.5 h-3.5 text-luma-blue" />
                <span>Instant License Delivery</span>
              </div>
              <p className="text-muted-dark text-[11px] leading-relaxed">
                Purchased license keys (<code className="text-white font-mono">LUMA-XXXX-...</code>) and installer links are displayed immediately on the Polar confirmation screen and emailed to you. You can also re-download <a href={LUMA_LATEST_INSTALLER_URL} className="text-luma-blue hover:text-white underline inline-flex items-center gap-0.5 font-medium"><Download className="w-2.5 h-2.5 inline" />Luma-Setup.exe</a> directly.
              </p>
            </div>

            <div className="space-y-1 p-3 rounded-xl bg-surface/50 border border-surface-border/60">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Monitor className="w-3.5 h-3.5 text-sky-400" />
                <span>3 Devices &amp; Offline Grace</span>
              </div>
              <p className="text-muted-dark text-[11px]">
                Activate on up to 3 personal Windows devices simultaneously. Validated licenses continue running offline for up to 14 days without network access.
              </p>
            </div>

            <div className="space-y-1 p-3 rounded-xl bg-surface/50 border border-surface-border/60">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>48-Hour Refund Guarantee</span>
              </div>
              <p className="text-muted-dark text-[11px]">
                If Luma encounters unresolved audio loopback or compatibility issues on your Windows PC, email <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue underline">lumaplayer.support@gmail.com</a> within 48 hours for a full refund.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
