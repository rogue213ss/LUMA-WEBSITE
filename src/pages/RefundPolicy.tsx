import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

interface RefundProps {
  onBack: () => void;
}

export const RefundPolicy: React.FC<RefundProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Project Luma</span>
      </button>

      {/* Draft Disclaimer Notice */}
      <div className="p-4 rounded-xl bg-surface-card border border-amber-500/30 text-amber-300 text-xs mb-8 flex items-start gap-3">
        <span className="font-mono font-bold uppercase shrink-0 px-2 py-0.5 rounded bg-amber-500/20">
          Editable Draft
        </span>
        <p>
          This document is a pre-release draft for Project Luma. Brackets such as <code className="text-white bg-black/40 px-1 py-0.5 rounded font-mono">[Legal Entity Name]</code> indicate placeholders to be customized prior to public distribution.
        </p>
      </div>

      <div className="space-y-8 text-muted text-sm sm:text-base leading-relaxed">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs font-mono text-muted-dark">
            Last Updated: October 2026 • Version 1.0 (Draft)
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            1. Our Commitment
          </h2>
          <p>
            We want you to love your experience with Project Luma. Because Luma is a digital software download designed specifically for Windows 10/11, we maintain a straightforward and honest refund policy operated via our Merchant of Record, Lemon Squeezy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-luma-blue" />
            <span>2. 14-Day Refund Window</span>
          </h2>
          <p>
            If Project Luma does not function properly on your compatible Windows 10 or Windows 11 PC, or if you are unsatisfied with the companion experience, you may request a full refund within <strong className="text-white">14 days</strong> of your initial purchase date.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Eligible For Refund</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-light">
                <li>System audio loopback incompatibility unresolved by support.</li>
                <li>Persistent crash or failure on verified Windows 10/11 hardware.</li>
                <li>Accidental duplicate license purchase.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Ineligible Conditions</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-light">
                <li>Purchases made beyond the 14-day evaluation window.</li>
                <li>Attempting to run Luma on unsupported platforms (macOS/Linux).</li>
                <li>License keys revoked due to terms violation or public sharing.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            3. License Deactivation Upon Refund
          </h2>
          <p>
            When a refund is approved and issued, your license key will be automatically revoked in the activation registry. The desktop companion will revert to disconnected state on your registered personal devices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            4. How to Request a Refund
          </h2>
          <p>
            To submit a refund request, simply email our support team with:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-muted-light">
            <li>Your original order number or Lemon Squeezy receipt.</li>
            <li>The email address used during checkout.</li>
            <li>A brief description of why Luma did not meet your expectations.</li>
          </ol>
          <div className="pt-2">
            <p className="text-white font-mono text-xs">
              Support Email: <a href="mailto:refunds@lumaplayer.com" className="text-luma-blue underline">refunds@lumaplayer.com</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};
