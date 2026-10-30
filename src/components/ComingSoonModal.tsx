import React, { useState } from 'react';
import { X, Check, Bell, Shield, ArrowRight, Clock, Sparkles, Key, AlertCircle } from 'lucide-react';
import { PRICING_TIERS } from '../data/mockData';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: 'trial' | 'lifetime' | 'exclusive';
}

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  onClose,
  selectedTierId = 'trial'
}) => {
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<'trial' | 'lifetime' | 'exclusive'>(selectedTierId);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [showHaveCodeHelp, setShowHaveCodeHelp] = useState(false);

  // Sync selected tier if opened with specific prop
  React.useEffect(() => {
    if (selectedTierId) {
      setTier(selectedTierId);
    }
    setFormError(null);
    setSubmitError(null);
  }, [selectedTierId]);

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS.find(t => t.id === tier) || PRICING_TIERS[0];
  const isTrial = tier === 'trial';

  const validateEmail = (val: string) => {
    const trimmed = val.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(trimmed);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      setFormError('Please enter your email address.');
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setFormError('Please enter a valid email address (e.g., name@domain.com).');
      return;
    }

    setFormError(null);
    setSubmitError(null);
    setIsSubmitting(true);

    const apiBase = (import.meta.env.VITE_LUMA_AUTH_API as string) || 'https://luma-tester-auth-api.garia2955.workers.dev';

    try {
      const response = await fetch(`${apiBase}/api/tester/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          tier,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please wait a few minutes before trying again.');
        }
        throw new Error(data.error || 'Unable to submit your request right now. Please try again later.');
      }

      setServerMessage(data.message || 'Your request has been received. Beta invitations are sent manually, so please wait for an email.');
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'Unable to connect to the authorization server. Please check your network and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#0B0F17] border border-surface-border p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle atmospheric glow inside modal */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-luma-blue/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-surface text-muted-dark hover:text-white hover:bg-surface-card transition-colors z-20"
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
              Request Received
            </h3>

            <p className="text-sm text-muted max-w-sm mx-auto leading-relaxed">
              {serverMessage ? (
                <span>{serverMessage}</span>
              ) : (
                <>
                  We've registered your beta request for <span className="text-white font-medium">{email}</span>. Beta invitations are reviewed and sent manually, so please wait for an invitation email.
                </>
              )}
            </p>

            {/* Trial access delay reassurance in success screen */}
            {isTrial && (
              <div className="p-4 rounded-xl bg-surface-card border border-luma-blue/30 text-xs text-left text-muted-light space-y-2">
                <div className="flex items-center gap-1.5 text-luma-blue font-semibold">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Next steps &amp; trial guarantee:</span>
                </div>
                <ul className="space-y-1.5 text-[11px] list-disc list-inside text-muted-light">
                  <li><strong>Manual Review:</strong> Invitations with your activation code (<code className="text-sky-300">LUMA-TEST-XXXX-XXXX</code>) and download instructions are sent manually.</li>
                  <li><strong>7 Full Days Guaranteed:</strong> Your 7-day evaluation window does not begin today. It starts strictly when you enter your code and activate the Windows app.</li>
                  <li><strong>No Payment Required:</strong> No credit card or billing details are required for the trial.</li>
                </ul>
              </div>
            )}

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-surface-card border border-surface-border text-white text-sm font-medium hover:bg-surface transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        ) : (
          /* Subscription & Launch Notice */
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-luma-blue">
                {isTrial ? 'Early Access • 7-Day Free Trial' : 'Phase 1 Preview • Public Launch Coming Soon'}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {isTrial ? 'Try Luma Free for 7 Days' : `Get notified for ${currentTier.name}`}
              </h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                {isTrial 
                  ? 'Request your 7-day evaluation build for Windows. Test all 8 visual worlds, reactive edge lighting, and synchronized lyrics with zero upfront cost.'
                  : 'Project Luma is in final Windows testing. Payment processing and automated license keys will be powered by Lemon Squeezy upon public release.'}
              </p>
            </div>

            {/* Trial Delay Policy Reassurance Box inside modal */}
            {isTrial && (
              <div className="p-3.5 rounded-xl bg-luma-blue/10 border border-luma-blue/25 text-xs text-sky-200 leading-snug space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <Clock className="w-4 h-4 text-luma-blue shrink-0" />
                  <span>Trial Access Delay Guarantee:</span>
                </div>
                <p className="text-[11px] text-muted-light">
                  “If your access isn't ready yet, don't worry. Your trial will be extended so you get the full 7 days to enjoy Luma once access is available.”
                </p>
                <p className="text-[10px] text-muted-dark">
                  Waiting for access will never eat into your 7 days. Your trial begins strictly upon build delivery and PC activation.
                </p>
              </div>
            )}

            {/* Tier Switcher inside modal - 3 Options */}
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-surface border border-surface-border text-center">
              <button
                type="button"
                onClick={() => { setTier('trial'); setFormError(null); }}
                className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
                  tier === 'trial'
                    ? 'bg-surface-card text-white border border-luma-blue/50 shadow-sm'
                    : 'text-muted-dark hover:text-muted'
                }`}
              >
                7-Day Trial (Free)
              </button>
              <button
                type="button"
                onClick={() => { setTier('lifetime'); setFormError(null); }}
                className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
                  tier === 'lifetime'
                    ? 'bg-surface-card text-white border border-luma-blue/40 shadow-sm'
                    : 'text-muted-dark hover:text-muted'
                }`}
              >
                Lifetime ($4.99)
              </button>
              <button
                type="button"
                onClick={() => { setTier('exclusive'); setFormError(null); }}
                className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
                  tier === 'exclusive'
                    ? 'bg-surface-card text-white border border-luma-violet/40 shadow-sm'
                    : 'text-muted-dark hover:text-muted'
                }`}
              >
                Exclusive ($9.99)
              </button>
            </div>

            {/* Tier Details Summary */}
            <div className="p-3.5 rounded-xl bg-surface-card border border-surface-border text-xs space-y-1.5">
              <div className="flex justify-between items-center text-muted-light">
                <span className="font-medium text-white">{currentTier.name}</span>
                <span className="font-mono text-luma-blue font-semibold">
                  {isTrial ? 'Free for 7 Days' : `${currentTier.price} one-time`}
                </span>
              </div>
              <p className="text-muted text-[11px] leading-tight">
                {currentTier.headline}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-medium text-muted-light mb-1.5">
                  Email Address for Windows Access
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (formError) setFormError(null);
                  }}
                  placeholder="you@domain.com"
                  className={`w-full px-4 py-3 rounded-xl bg-surface border text-white text-sm outline-none transition-colors placeholder:text-muted-dark ${
                    formError ? 'border-rose-500/80 focus:border-rose-400' : 'border-surface-border focus:border-luma-blue'
                  }`}
                />
                {formError && (
                  <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
              </div>

              {submitError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p>{submitError}</p>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-[11px] text-white underline font-semibold hover:text-rose-200"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    {isTrial ? <Sparkles className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
                    <span>{isTrial ? 'Request 7-Day Beta Access' : 'Request Launch Notification'}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>

            {/* Already have code prompt */}
            <div className="pt-1 text-center">
              <button
                type="button"
                onClick={() => setShowHaveCodeHelp(!showHaveCodeHelp)}
                className="text-xs text-muted-dark hover:text-luma-blue transition-colors inline-flex items-center gap-1 font-mono"
              >
                <Key className="w-3 h-3" />
                <span>{showHaveCodeHelp ? "Hide activation help" : "Already have an activation code?"}</span>
              </button>

              {showHaveCodeHelp && (
                <div className="mt-2.5 p-3 rounded-xl bg-surface-card border border-surface-border text-left text-xs text-muted-light space-y-1.5 animate-in fade-in duration-150">
                  <p className="font-medium text-white">How to activate your tester build:</p>
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-muted">
                    <li>Launch the Luma desktop app on your Windows 10/11 PC.</li>
                    <li>Enter your invitation code (format: <code className="text-sky-300 font-mono">LUMA-TEST-XXXX-XXXX</code>).</li>
                    <li>Click <strong>Activate Luma</strong>. Your device will bind securely and unlock the full experience.</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Privacy Promise */}
            <div className="flex items-center gap-2 text-[11px] text-muted-dark justify-center pt-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {isTrial ? 'No credit card required. Full 7 days guaranteed upon activation.' : 'Zero spam. No credit card required. Strictly one-time release notice.'}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
