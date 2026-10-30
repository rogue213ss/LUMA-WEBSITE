import React from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, Key, Mail, Clock } from 'lucide-react';

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

      <div className="space-y-8 text-muted text-sm sm:text-base leading-relaxed">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-xs font-mono text-muted-dark">
            Last Updated: October 2026 • Version 1.0
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            1. Nature of Our Software &amp; Commitment
          </h2>
          <p>
            Project Luma is a native digital desktop software application for 64-bit Windows 10 and Windows 11. Licenses are sold on a perpetual one-time purchase basis (with no recurring subscription fees).
          </p>
          <p>
            When public purchasing launches, order processing, billing, and transactions are managed by our Merchant of Record, <strong className="text-white">Lemon Squeezy</strong>. We want every customer to have a dependable, high-quality audio visualizer experience on their PC.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Clock className="w-5 h-5 text-luma-blue" />
            <span>2. 48-Hour Refund Window</span>
          </h2>
          <p>
            If Project Luma does not function properly on your compatible Windows 10 or Windows 11 computer, or if you encounter persistent technical issues that our support team cannot resolve, you are eligible to request a refund within <strong className="text-white">48 hours from the time of purchase</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Eligible For Refund Consideration</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-light">
                <li>Audio loopback capture failure on verified Windows 10/11 hardware unresolved by support.</li>
                <li>Persistent crash or fatal application launch error that cannot be resolved.</li>
                <li>Accidental duplicate license purchase.</li>
                <li>Unresolved license activation failures on compatible systems.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-white font-medium">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Ineligible Conditions</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-light">
                <li>Refund requests submitted after 48 hours from the time of purchase have elapsed.</li>
                <li>Attempting to run Luma on unsupported non-Windows platforms (macOS, Linux, Android, iOS).</li>
                <li>License keys revoked due to terms-of-service violations or public key distribution.</li>
                <li>Change of mind after software has been successfully activated and used beyond 48 hours.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Key className="w-5 h-5 text-sky-400" />
            <span>3. What Happens If a License Cannot Be Activated</span>
          </h2>
          <p>
            If you purchase a license and experience an activation issue (for example, network connectivity errors, credential storage restrictions, or system errors):
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-muted-light">
            <li>Our support team will assist you in diagnosing the activation failure, verifying your device ID record, or resetting the activation slot if necessary.</li>
            <li>If technical resolution is not achievable on your Windows machine within the refund window, a refund will be submitted for processing via Lemon Squeezy.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            4. License Deactivation Upon Refund
          </h2>
          <p>
            When a refund is approved and issued through Lemon Squeezy, your associated license key will be automatically revoked in our activation registry. Any active installations bound to that license key will return to an inactive status.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Mail className="w-5 h-5 text-luma-blue" />
            <span>5. How to Request a Refund Through Lemon Squeezy</span>
          </h2>
          <p>
            To submit a refund request within the 48-hour purchase window, please follow these steps:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-muted-light text-xs sm:text-sm">
            <li>
              <strong>Direct Support Email:</strong> Send an email to our team at{' '}
              <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue font-mono underline">
                lumaplayer.support@gmail.com
              </a>{' '}
              with your Lemon Squeezy order number or receipt, the email address used during checkout, and a brief description of the technical issue.
            </li>
            <li>
              <strong>Lemon Squeezy Order Receipt:</strong> Alternatively, you can open your original Lemon Squeezy email receipt, click <em>"View Order"</em> to access your receipt page, and use Lemon Squeezy's customer inquiry tools.
            </li>
            <li>
              <strong>Review &amp; Settlement:</strong> Refund requests are reviewed by our engineering team to verify technical eligibility. Refunds are not instantaneous or automatic; once submitted to Lemon Squeezy, settlement to your original payment method typically takes 3 to 5 business days depending on your financial institution.
            </li>
          </ol>
          <div className="pt-3">
            <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1 text-xs sm:text-sm">
              <span className="text-muted-dark font-mono uppercase tracking-wider block text-xs">Official Support &amp; Refund Email</span>
              <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue font-mono font-medium hover:underline text-sm sm:text-base">
                lumaplayer.support@gmail.com
              </a>
              <p className="text-xs text-muted-light pt-1">
                We review all requests personally and respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
