import React, { useState } from 'react';
import { ArrowLeft, Monitor, HelpCircle, Send, CheckCircle2, Key, Cpu, Volume2, ShieldCheck, Mail, ExternalLink } from 'lucide-react';

interface SupportProps {
  onBack: () => void;
}

export const SupportPage: React.FC<SupportProps> = ({ onBack }) => {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketEmail, setTicketEmail] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [emailClientOpened, setEmailClientOpened] = useState(false);

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketMessage.trim()) return;

    const subject = encodeURIComponent(
      ticketSubject.trim() ? `[Project Luma Support] ${ticketSubject.trim()}` : '[Project Luma Support] Assistance Request'
    );
    const bodyContent = `Hello Project Luma Team,\n\nSender Email: ${ticketEmail.trim() || 'Not specified'}\n\nMessage Details:\n${ticketMessage.trim()}\n\n---\nSystem: Windows 10/11 x64`;
    const body = encodeURIComponent(bodyContent);

    const mailtoUrl = `mailto:lumaplayer.support@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setEmailClientOpened(true);
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
          Welcome to the Project Luma tester hub. If you received a <code className="text-white bg-black/40 px-1 py-0.5 rounded font-mono">LUMA-TEST</code> invitation code, refer to the diagnostic guide below or reach our team directly at <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue underline font-mono">lumaplayer.support@gmail.com</a>.
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
              <span className="text-[10px] text-muted-dark block">Default Output (Shared)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border space-y-1">
              <span className="text-muted-dark block">UI RUNTIME</span>
              <span className="text-white font-medium">WebView2 Runtime</span>
              <span className="text-[10px] text-muted-dark block">Standard on Win 10/11</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-surface-border space-y-1">
              <span className="text-muted-dark block">MEMORY &amp; CPU</span>
              <span className="text-white font-medium">6 GB RAM (8 GB Rec.)</span>
              <span className="text-[10px] text-muted-dark block">Adaptive Low Tier Enabled</span>
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
                2. <strong>Device Binding:</strong> Each code securely registers to your Windows PC upon initial activation. Up to 3 personal devices are supported per license.
                <br />
                3. <strong>Offline Grace:</strong> After initial online activation, Luma operates offline for up to 14 days before needing a background refresh.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>Lighting doesn't react to music</span>
              </h3>
              <p className="text-muted leading-relaxed">
                1. Verify that your sound is playing through the Windows Default Output Device in Shared mode.
                <br />
                2. Check <strong className="text-white">Settings &gt; Ambient Lighting</strong> and ensure <strong className="text-white">"Follow Music"</strong> is selected (not "Still Glow").
                <br />
                3. Check if Windows "Reduced Motion" is enabled in Windows Settings, which suspends active motion effects.
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
                3. Note that private or incognito browser windows often do not broadcast GSMTC sessions to Windows.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-surface-card border border-surface-border space-y-2">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Adaptive Low-Performance Tier</span>
              </h3>
              <p className="text-muted leading-relaxed">
                Systems with 6 GB RAM, $\le$ 4 CPU threads, or integrated graphics automatically engage Luma's <strong className="text-white">Adaptive Low-Performance Tier</strong> (480p lightweight video loops, lyrics &amp; immersion modes, and simplified canvas rendering) to protect desktop responsiveness.
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
            Have a question, feedback, or compatibility report? You can reach our engineering team directly at{' '}
            <a href="mailto:lumaplayer.support@gmail.com" className="text-luma-blue underline font-mono font-medium">
              lumaplayer.support@gmail.com
            </a>
            . We typically respond within 24 hours.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Email Card */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-surface border border-surface-border space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-muted-dark block">
                  Direct Email Channel
                </span>
                <p className="text-xs text-muted-light leading-relaxed">
                  For bug reports, logs, or licensing inquiries, emailing us directly is the fastest method.
                </p>
              </div>

              <a
                href="mailto:lumaplayer.support@gmail.com"
                className="w-full py-3 px-4 rounded-xl bg-luma-blue/15 hover:bg-luma-blue/25 border border-luma-blue/40 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-glow-sm"
              >
                <Mail className="w-4 h-4 text-luma-blue" />
                <span>Open Mail to Support</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-light" />
              </a>

              <div className="pt-2 border-t border-surface-border/60 text-[11px] text-muted-dark font-mono space-y-1">
                <div>Support Email: lumaplayer.support@gmail.com</div>
                <div>Hours: Monday – Saturday</div>
                <div>Average Response: &lt; 24 Hours</div>
              </div>
            </div>

            {/* Compose in Email Client Form */}
            <div className="lg:col-span-7">
              {emailClientOpened ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Email Client Triggered</h3>
                  <p className="text-xs text-muted max-w-md mx-auto leading-relaxed">
                    Your pre-formatted support message has been prepared for <strong className="text-white font-mono">lumaplayer.support@gmail.com</strong>.
                  </p>
                  <p className="text-[11px] text-muted-dark">
                    If your email application did not launch automatically, send your message directly to <strong className="text-luma-blue font-mono">lumaplayer.support@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setEmailClientOpened(false)}
                    className="px-4 py-2 rounded-lg bg-surface border border-surface-border text-xs text-muted-light hover:text-white"
                  >
                    Edit Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTicketSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-muted-dark mb-1">
                      Your Email Address (Optional)
                    </label>
                    <input
                      type="email"
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
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      placeholder="e.g., Audio loopback or tester code inquiry"
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
                    className="w-full py-3 rounded-xl bg-surface hover:bg-surface-hover border border-luma-blue/50 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-glow-sm"
                  >
                    <Send className="w-4 h-4 text-luma-blue" />
                    <span>Open in Email App &amp; Send to Support</span>
                  </button>
                  <span className="block text-[11px] text-muted-dark text-center">
                    Uses your system's default email client to send directly to lumaplayer.support@gmail.com
                  </span>
                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
