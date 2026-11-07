import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Download, 
  Key, 
  ShieldCheck, 
  Monitor, 
  Sparkles, 
  ExternalLink, 
  HelpCircle,
  FolderDown,
  PlayCircle
} from 'lucide-react';
import { LUMA_LATEST_INSTALLER_URL, LUMA_RELEASES_PAGE_URL } from '../data/mockData';

interface PurchaseSuccessProps {
  onBack: () => void;
  onNavigate?: (route: string) => void;
}

export const PurchaseSuccess: React.FC<PurchaseSuccessProps> = ({ onBack, onNavigate }) => {
  const handleSupportClick = () => {
    if (onNavigate) {
      onNavigate('support');
    } else {
      window.location.hash = '#/support';
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-sky-500/10 via-luma-blue/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Return to Project Luma</span>
      </button>

      {/* Main Success Container */}
      <div className="space-y-10">
        
        {/* Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0F1829] via-surface-card to-[#090D15] border-2 border-luma-blue/60 p-8 sm:p-12 text-center shadow-glow-lg overflow-hidden">
          {/* Subtle Ambient Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luma-blue via-sky-400 to-indigo-500" />
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-glow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Your purchase was successful</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            You&apos;re all set. Welcome to Luma.
          </h1>

          {/* Subtitle */}
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Thank you for supporting Project Luma. Your desktop music companion is ready to download and run on your Windows PC.
          </p>

          {/* Primary CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href={LUMA_LATEST_INSTALLER_URL}
              className="w-full sm:w-auto flex-1 py-4 px-8 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-base sm:text-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-glow-md hover:shadow-glow-lg group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Luma for Windows</span>
            </a>
          </div>

          {/* Download Metadata */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-dark font-mono">
            <span>Standalone Installer (<code className="text-muted-light">Luma-Setup.exe</code>)</span>
            <span>•</span>
            <span>Windows 10 &amp; 11 (64-bit)</span>
            <span>•</span>
            <a 
              href={LUMA_RELEASES_PAGE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-luma-blue hover:text-white underline inline-flex items-center gap-1"
            >
              <span>GitHub Releases</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* License Delivery Supporting Text */}
          <div className="mt-8 pt-6 border-t border-surface-border/60 max-w-xl mx-auto text-xs sm:text-sm text-muted-light flex items-center justify-center gap-2">
            <Key className="w-4 h-4 text-luma-blue shrink-0" />
            <span>
              <strong className="text-white">License Key Notice:</strong> Your license key will be delivered separately through Polar.
            </span>
          </div>
        </div>

        {/* Universal Installer Notice (Lifetime & Exclusive) */}
        <div className="rounded-2xl bg-surface-card border border-surface-border p-6 sm:p-7 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-luma-blue/10 border border-luma-blue/30 text-luma-blue shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white tracking-tight">
                  One Unified Installer for Both Lifetime &amp; Exclusive
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  The same installer works for both Lifetime and Exclusive customers. There is no need to download separate packages—your license key automatically activates your specific tier entitlements, preview builds, and Supporter badges inside the app.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Step Installation Guide */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <FolderDown className="w-5 h-5 text-luma-blue" />
              <span>Getting Started in 3 Steps</span>
            </h2>
            <span className="text-xs font-mono text-muted-dark">Fast • No Bloatware</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="rounded-2xl bg-surface-card/80 border border-surface-border p-6 space-y-3 relative group hover:border-luma-blue/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface border border-surface-border text-luma-blue font-mono font-bold text-sm flex items-center justify-center shadow-inner">
                  01
                </span>
                <span className="text-[11px] font-mono text-muted-dark uppercase tracking-wider">Download</span>
              </div>
              <h3 className="text-sm font-bold text-white">Download the Installer</h3>
              <p className="text-xs text-muted leading-relaxed">
                Click the download button to save <code className="text-muted-light font-mono">Luma-Setup.exe</code> to your PC from our official release distribution.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-surface-card/80 border border-surface-border p-6 space-y-3 relative group hover:border-luma-blue/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface border border-surface-border text-sky-400 font-mono font-bold text-sm flex items-center justify-center shadow-inner">
                  02
                </span>
                <span className="text-[11px] font-mono text-muted-dark uppercase tracking-wider">Install</span>
              </div>
              <h3 className="text-sm font-bold text-white">Run the Installer</h3>
              <p className="text-xs text-muted leading-relaxed">
                Launch <code className="text-muted-light font-mono">Luma-Setup.exe</code>. The lightweight native Rust installer sets up Luma directly in your user profile without admin hassles.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-surface-card/80 border border-surface-border p-6 space-y-3 relative group hover:border-luma-blue/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-lg bg-surface border border-surface-border text-emerald-400 font-mono font-bold text-sm flex items-center justify-center shadow-inner">
                  03
                </span>
                <span className="text-[11px] font-mono text-muted-dark uppercase tracking-wider">Activate</span>
              </div>
              <h3 className="text-sm font-bold text-white">Activate Your License</h3>
              <p className="text-xs text-muted leading-relaxed">
                Open Luma, enter your unique key (<code className="text-muted-light font-mono">LUMA-XXXX-...</code>) received from Polar, and enjoy ambient lighting and synced lyrics!
              </p>
            </div>
          </div>
        </div>

        {/* Security & Entitlements Transparency */}
        <div className="rounded-2xl bg-surface/50 border border-surface-border/70 p-6 space-y-4 text-xs text-muted leading-relaxed">
          <div className="flex items-center gap-2 text-white font-medium text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Important Activation &amp; Security Notes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="p-3.5 rounded-xl bg-surface-card/60 border border-surface-border/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Key className="w-3.5 h-3.5 text-luma-blue" />
                <span>Polar Email Delivery</span>
              </div>
              <p className="text-muted-dark text-[11px] leading-relaxed">
                Your license key is generated securely by Polar and shown on the Polar receipt screen as well as sent to your purchase email address. Keys are never embedded in web URLs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-card/60 border border-surface-border/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <Monitor className="w-3.5 h-3.5 text-sky-400" />
                <span>3 Devices &amp; Offline Grace</span>
              </div>
              <p className="text-muted-dark text-[11px] leading-relaxed">
                You can activate Luma on up to 3 personal Windows 10/11 machines at the same time. After initial activation, Luma works offline for up to 14 days without internet access.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-card/60 border border-surface-border/50 space-y-1.5">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <PlayCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>Universal Audio Reactive</span>
              </div>
              <p className="text-muted-dark text-[11px] leading-relaxed">
                Luma listens directly to Windows audio loopback via WASAPI. Works with Spotify desktop, YouTube in any browser, and local media players with zero audio telemetry.
              </p>
            </div>
          </div>
        </div>

        {/* Support Help Banner */}
        <div className="rounded-2xl bg-surface-card/70 border border-surface-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <HelpCircle className="w-4 h-4 text-luma-blue" />
              <span>Need help or didn&apos;t receive your license email?</span>
            </div>
            <p className="text-xs text-muted max-w-xl">
              Check your spam folder for your receipt from Polar, visit the Support hub for troubleshooting, or email our team directly at <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue underline font-mono">lumaplayer.support@gmail.com</a>.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleSupportClick}
              className="py-2.5 px-4 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-white text-xs font-semibold transition-colors"
            >
              Support Hub
            </button>
            <button
              onClick={onBack}
              className="py-2.5 px-4 rounded-xl bg-luma-blue/10 hover:bg-luma-blue/20 border border-luma-blue/30 text-luma-blue text-xs font-semibold transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
