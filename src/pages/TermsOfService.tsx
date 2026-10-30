import React from 'react';
import { ArrowLeft, Monitor, Key, Shield, Mail, AlertTriangle, Clock } from 'lucide-react';

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

      <div className="space-y-8 text-muted text-sm sm:text-base leading-relaxed">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-muted-dark">
            Last Updated: October 2026 • Version 1.0
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Monitor className="w-5 h-5 text-luma-blue" />
            <span>1. Agreement to Terms</span>
          </h2>
          <p>
            By downloading, installing, evaluating, or purchasing a license to Project Luma (<strong className="text-white">"Software"</strong>, <strong className="text-white">"Application"</strong>), you enter into a binding agreement with <span className="text-white font-medium">Project Luma Team</span> (<strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong>). If you do not agree to these Terms, do not install or use the Software.
          </p>
          <p>
            Project Luma is a standalone desktop companion application developed specifically for 64-bit Windows 10 and Windows 11 operating systems.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Key className="w-5 h-5 text-sky-400" />
            <span>2. License Grant &amp; Permitted Device Limit</span>
          </h2>
          <p>
            Upon acquiring a valid license (such as <strong className="text-white">Luma Lifetime</strong> or <strong className="text-white">Luma Exclusive</strong>), you are granted a perpetual, personal, non-transferable, non-exclusive license to install and run Project Luma on up to <strong className="text-white">three (3) personal Windows devices</strong> owned and operated exclusively by you.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-muted-light">
            <li><strong className="text-white">Device Management:</strong> You may migrate your installation between your personal computers. Activating a replacement PC within your 3-device limit is supported.</li>
            <li><strong className="text-white">Key Protection:</strong> Each license code is confidential to the purchaser. Sharing, distributing, or publishing license keys publicly is strictly prohibited and constitutes grounds for immediate license revocation without refund.</li>
            <li><strong className="text-white">Individual Use:</strong> Commercial redistribution, public performance display, or re-packaging of Luma binaries requires explicit written authorization.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            3. Pricing Model &amp; Evaluation Offers
          </h2>
          <p>
            Project Luma operates strictly on a <strong className="text-white">single one-time payment</strong> model with zero recurring monthly subscription charges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-luma-blue font-semibold block">
                7-Day Free Trial (Active Beta)
              </span>
              <p className="text-xs text-muted-light leading-relaxed">
                Prospective users can evaluate Luma with full feature access at zero cost. If access is queued during staged rollout waves, your 7-day period begins strictly when your build is delivered and activated.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold block">
                Planned Launch Pricing
              </span>
              <p className="text-xs text-muted-light leading-relaxed">
                When public purchasing goes live via our Merchant of Record, <strong className="text-white">Lemon Squeezy</strong>, permanent ownership will be offered at <strong className="text-white">$4.99</strong> (Lifetime) and <strong className="text-white">$9.99</strong> (Exclusive). Direct checkout is currently upcoming as pre-release testing completes.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-luma-blue" />
            <span>4. Refund Policy &amp; 48-Hour Request Window</span>
          </h2>
          <p>
            Because Project Luma is downloadable digital desktop software for Windows, licenses purchased through our Merchant of Record, <strong className="text-white">Lemon Squeezy</strong>, are subject to our <a href="#/refunds" className="text-luma-blue underline font-medium">Refund Policy</a>:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-muted-light">
            <li><strong className="text-white">48-Hour Window:</strong> Customers may submit a refund request within <strong className="text-white">forty-eight (48) hours from the time of purchase</strong> if they encounter persistent technical failure, audio loopback capture failure, or unresolved license activation issues on verified Windows 10/11 systems.</li>
            <li><strong className="text-white">Evaluation Procedure:</strong> Refund requests are reviewed by our support team and processed through Lemon Squeezy if verified. Refunds are not instantaneous or automatic, and bank processing times apply.</li>
            <li><strong className="text-white">License Revocation:</strong> Upon refund approval, the issued license code is revoked in our activation registry and associated PC installations return to an unactivated state.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>5. Beta &amp; Pre-Release Software Notice</span>
          </h2>
          <p>
            Project Luma is currently in active pre-release / beta testing. By using preview builds, you acknowledge and agree that:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-muted-light">
            <li>Pre-release builds may exhibit unforeseen visual glitches, performance discrepancies across varying PC hardware, or temporary audio driver incompatibilities.</li>
            <li>We actively test updates to ensure stability and compatibility, and we welcome issue reports submitted to our support team.</li>
            <li>Features, visual modes, and UI elements may evolve or be refined during the beta period to improve overall stability and user experience.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            6. Exclusive Tier &amp; Community Feedback Policy
          </h2>
          <p>
            The planned <strong className="text-white">Luma Exclusive ($9.99)</strong> tier provides early access to experimental visual worlds and priority triage when feedback and community requests are reviewed.
          </p>
          <p className="p-3.5 rounded-xl bg-surface-card border border-surface-border text-xs sm:text-sm text-muted-light">
            <strong className="text-white">Clarification:</strong> Priority consideration indicates that feedback from Exclusive supporters is reviewed first during roadmap planning. It does not constitute a custom engineering contract or guarantee that any specific requested feature will be implemented.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span>7. Intellectual Property &amp; Acceptable Use</span>
          </h2>
          <p>
            All intellectual property rights in Project Luma, including software code, custom shaders, visual assets, documentation, and website content, remain the exclusive property of Project Luma Team.
          </p>
          <p>
            You agree not to reverse-engineer, decompile, disassemble, attempt to derive source code from, modify, or create derivative works of the desktop application, except to the extent permitted by applicable mandatory law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            8. Third-Party Integrations &amp; Trademarks
          </h2>
          <p>
            Project Luma integrates with standard Windows operating system features (GSMTC, WASAPI) and third-party web services (LRCLIB, Spotify Web API).
          </p>
          <p>
            Spotify is a registered trademark of Spotify AB. Project Luma is an independent software application and is not endorsed by, sponsored by, or affiliated with Spotify AB, Microsoft Corporation, or Google LLC.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            9. Updates, Maintenance &amp; Support
          </h2>
          <p>
            We strive to provide regular compatibility and stability updates as Windows and external media services evolve. Support is provided by our core development team on a best-effort basis via email. We do not provide guaranteed service level agreements (SLAs) or 24/7 real-time telephone assistance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            10. Disclaimer of Warranties &amp; Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, Project Luma is provided on an <strong className="text-white">"AS IS"</strong> and <strong className="text-white">"AS AVAILABLE"</strong> basis without warranties of any kind, whether express, statutory, or implied.
          </p>
          <p>
            In no event shall Project Luma Team be liable for any indirect, incidental, special, consequential, or punitive damages arising from the installation, use, or inability to use the Software.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Mail className="w-5 h-5 text-luma-blue" />
            <span>11. Contact Information</span>
          </h2>
          <p>
            For questions regarding these Terms of Service or your license, please contact:
          </p>
          <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1 text-xs sm:text-sm">
            <div>
              <span className="text-muted-dark font-mono uppercase tracking-wider block text-xs">Official Support Email</span>
              <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue font-mono font-medium hover:underline text-sm sm:text-base">
                lumaplayer.support@gmail.com
              </a>
            </div>
            <div className="text-xs text-muted-light pt-1">
              Project Luma Team • Windows Desktop Audio Software
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
