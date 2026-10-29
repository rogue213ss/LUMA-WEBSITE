import React, { useState } from 'react';
import { ArrowLeft, Monitor, HelpCircle, Send, CheckCircle2, Key, Cpu, Volume2, ShieldCheck, Mail } from 'lucide-react';

interface SupportProps {
  onBack: () => void;
}

export const SupportPage: React.FC<SupportProps> = ({ onBack }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketEmail || !ticketMessage) return;
    setFormSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Project Luma</span>
      </button>

      {/* Tester Program Notice */}
      <div className="p-4 rounded-xl bg-surface-card border border-luma-blue/30 text-xs mb-8 flex items-start gap-3">
        <span className="font-mono font-bold uppercase shrink-0 px-2 py-0.5 rounded bg-luma-blue/15 text-luma-blue">
          Early Access &amp; Testers
        </span>
        <p className="text-muted-light">
          Welcome to the Project Luma tester hub. If you received a <code className="text-white bg-black/40 px-1 py-0.5 rounded font-mono">LUMA-TEST</code> invitation code, refer to the diagnostic guide below or reach our team directly at <a href="mailto:support@lumaplayer.com" className="text-luma-blue underline">support@lumaplayer.com</a>.
        </p>
      </div>

      <div className="space-y-12">
        
        {/* Title */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Support &amp; Documentation Hub
          </h1>
          <p className="text-muted text-base">
            Troubleshooting guides, hardware requirements, keyboard shortcuts, and direct assistance for Project Luma on Windows.
          </p>
        </div>

        {/* System Requirements Grid */}
        <section className="rounded-2xl bg-surface-card border border-surface-border p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 text-luma-blue" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Windows System Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border space-y-1">
              <span className="text-muted-dark block">OPERATING SYSTEM</span>
              <span className="text-white font-medium">Windows 10 / 11 (64-bit)</span>
              <span className="text-[10px] text-muted-dark block">v1903 or later</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border space-y-1">
              <span className="text-muted-dark block">AUDIO SUBSYSTEM</span>
              <span className="text-emerald-400 font-medium">WASAPI Loopback</span>
              <span className="text-[10px] text-muted-dark block">Default Output Device</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border space-y-1">
              <span className="text-muted-dark block">UI RUNTIME</span>
              <span className="text-white font-medium">WebView2 Runtime</span>
              <span className="text-[10px] text-muted-dark block">Standard on Win 10/11</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border space-y-1">
              <span className="text-muted-dark block">MEMORY &amp; CPU</span>
              <span className="text-white font-medium">4 GB RAM (8 GB Rec.)</span>
              <span className="text-[10px] text-muted-dark block">Low Power Tier Included</span>
            </div>
          </div>
        </section>

        {/* Common Troubleshooting Guide */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-luma-blue" />
            <span>Common Diagnostic Solutions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Tester Activation Code Guide */}
            <div className="p-5 rounded-xl bg-surface-card border border-luma-blue/30 space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-luma-blue" />
                <span>Tester Code Activation Help</span>
              </h3>
              <p className="text-muted leading-relaxed">
                1. <strong>Code Format:</strong> Codes follow the format <code className="text-white font-mono bg-surface px-1 py-0.5 rounded">LUMA-TEST-XXXX-XXXX</code>. Ensure no extra spaces are copied.
                <br />
                2. <strong>Device Binding:</strong> Each code locks to your specific Windows PC on first activation. Re-installing on the same PC will automatically re-authorize.
                <br />
                3. <strong>Offline Grace:</strong> After online activation, Luma operates offline for up to 14 days before needing a background refresh.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Lighting doesn't react to music</span>
              </h3>
              <p className="text-muted leading-relaxed">
                1. Verify that your sound is playing through Windows Default Output Device.
                <br />
                2. Check <strong className="text-white">Settings &gt; Ambient Lighting</strong> and ensure <strong className="text-white">"Follow Music"</strong> is selected (not "Still Glow").
                <br />
                3. Check if Windows "Reduced Motion" is enabled in system settings, which turns reactive motion off.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Monitor className="w-4 h-4 text-sky-400" />
                <span>"No Media Session" message</span>
              </h3>
              <p className="text-muted leading-relaxed">
                1. Make sure Spotify, YouTube, or your desktop music player is actively playing audio.
                <br />
                2. In web browsers (Chrome/Edge), ensure hardware media keys are enabled in browser flags.
                <br />
                3. Some browser incognito tabs do not publish GSMTC sessions to Windows.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Adaptive Low-Performance Tier</span>
              </h3>
              <p className="text-muted leading-relaxed">
                If running on battery or lightweight laptops (e.g. 8 GB RAM / integrated graphics), Luma automatically adapts to <strong className="text-white">Low Performance Tier</strong> (24 FPS canvas, ~480p lightweight loops, 55% pixel fill reduction).
              </p>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts Reference */}
        <section className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-3">
          <h3 className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Keyboard Shortcuts Quick Reference</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-muted-light pt-1">
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border">
              <kbd className="px-1.5 py-0.5 rounded bg-surface-card border border-surface-border text-white mr-1.5">Ctrl+Shift+F</kbd>
              <span>Toggle Fullscreen Worlds</span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border">
              <kbd className="px-1.5 py-0.5 rounded bg-surface-card border border-surface-border text-white mr-1.5">M / Shift+M</kbd>
              <span>Cycle Visual Modes</span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border">
              <kbd className="px-1.5 py-0.5 rounded bg-surface-card border border-surface-border text-white mr-1.5">Esc</kbd>
              <span>Return to Desktop Bar</span>
            </div>
          </div>
        </section>

        {/* Contact Support Team */}
        <section className="rounded-2xl bg-surface-card border border-surface-border p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-luma-blue" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Contact Support Team
            </h2>
          </div>
          <p className="text-sm text-muted mb-6">
            Have a tester question or compatibility issue? You can reach us directly at <a href="mailto:support@lumaplayer.com" className="text-white underline font-mono">support@lumaplayer.com</a> or send a note below.
          </p>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Support Request Logged</h3>
              <p className="text-xs text-muted max-w-md mx-auto">
                Thank you for your feedback. Our team will review your report and reply to <strong className="text-white">{ticketEmail}</strong> promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleTicketSubmit} className="space-y-4 max-w-xl">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-dark mb-1">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={ticketEmail}
                  onChange={(e) => setTicketEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-white text-sm outline-none focus:border-luma-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-dark mb-1">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="e.g., Windows Audio device loopback or tester code issue"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-white text-sm outline-none focus:border-luma-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-dark mb-1">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  placeholder="Describe your Windows version, audio setup, and the issue or question..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-surface-border text-white text-sm outline-none focus:border-luma-blue"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-surface hover:bg-surface-hover border border-luma-blue/50 text-white text-sm font-semibold flex items-center gap-2 transition-all shadow-glow-sm"
              >
                <Send className="w-4 h-4 text-luma-blue" />
                <span>Send Message to Support</span>
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};
