import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsProps> = ({ onBack }) => {
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
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-muted-dark">
            Last Updated: October 2026 • Version 1.0 (Draft)
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            1. Agreement to Terms
          </h2>
          <p>
            By downloading, installing, or purchasing a license to Project Luma (<strong className="text-white">"Software"</strong>, <strong className="text-white">"Service"</strong>), you agree to be bound by these Terms of Service between you and <span className="text-white font-medium">Project Luma Team</span>. If you do not agree, do not install or use the Software.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            2. License Grant &amp; Permitted Devices
          </h2>
          <p>
            Upon purchase of either <strong className="text-white">Luma Lifetime ($5.99)</strong> or <strong className="text-white">Luma Exclusive ($9.99)</strong>, you receive a perpetual, personal, non-transferable, non-exclusive license to run Project Luma on up to <strong className="text-white">three (3) personal Windows devices</strong> owned and operated by you.
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-light">
            <li>You may deactivate devices to transfer your license to a replacement computer.</li>
            <li>Sharing or publicly posting your license key is strictly prohibited and will result in key invalidation.</li>
            <li>Commercial broadcasting, public performance display, or re-packaging requires separate commercial licensing.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            3. Free Trial Evaluation &amp; One-Time Payment Model
          </h2>
          <p>
            Prospective users may evaluate Project Luma under our <strong className="text-white">7-Day Free Trial</strong>. If your access is queued or delayed during rollout waves, your trial will be extended so that you receive seven full days of usable access starting only once access is delivered and activated. Following the trial, permanent ownership requires a single, one-time payment ($5.99 for Lifetime or $9.99 for Exclusive). There are no recurring subscriptions or hidden upkeep fees.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            4. Luma Exclusive &amp; Feature Requests Policy
          </h2>
          <p>
            The <strong className="text-white">Luma Exclusive ($9.99)</strong> tier provides early access to beta visual worlds, experimental features, and priority consideration when community requests are triaged.
          </p>
          <p className="p-3.5 rounded-xl bg-surface-card border border-surface-border text-xs sm:text-sm text-muted-light">
            <strong className="text-white">Important Clarification:</strong> Priority consideration does not constitute a contract for custom engineering, nor does it guarantee that any specific requested feature will be developed or incorporated into production releases.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            5. Third-Party Services Disclaimer
          </h2>
          <p>
            Project Luma interfaces with third-party software including Windows Media Sessions (GSMTC), the Spotify Web API, and online lyrics services (such as LRCLIB). Spotify is a registered trademark of Spotify AB. Project Luma is an independent software application and is not endorsed by, affiliated with, or sponsored by Spotify AB, Google, or Microsoft Corporation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            6. Disclaimer of Warranties &amp; Limitation of Liability
          </h2>
          <p>
            The Software is provided on an "AS IS" and "AS AVAILABLE" basis. While rigorously tested, to the maximum extent permitted by applicable law, <span className="text-white font-medium">Project Luma Team</span> disclaims all warranties, express or implied.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            7. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable consumer protection and digital software laws, without regard to conflict of law principles.
          </p>
        </section>

      </div>
    </div>
  );
};
