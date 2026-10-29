import React from 'react';
import { ArrowLeft, EyeOff, Cpu } from 'lucide-react';

interface PolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PolicyProps> = ({ onBack }) => {
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
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-muted-dark">
            Last Updated: October 2026 • Version 1.0 (Draft)
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            1. Core Privacy Philosophy
          </h2>
          <p>
            Project Luma (<strong className="text-white">"Luma"</strong>, <strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong>), operated by <span className="text-white font-medium">Project Luma Team</span>, is designed with a fundamental commitment to privacy: <span className="text-white font-medium">what you listen to on your personal computer is entirely your own business</span>.
          </p>
          <p>
            Luma does not include telemetry trackers, does not sell your data, does not profile listening habits, and does not record audio.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-luma-blue" />
            <span>2. Audio Processing (WASAPI Loopback)</span>
          </h2>
          <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-2 text-xs sm:text-sm">
            <p className="text-white font-medium">How Audio Reactivity Actually Works:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-light">
              <li>Luma connects to the Windows default playback endpoint using WASAPI (Windows Audio Session API) loopback.</li>
              <li>The audio stream is analyzed directly in volatile PC memory approximately 30 times per second into four mathematical frequency metrics (bass, low-mids, high-mids, highs).</li>
              <li><strong className="text-white">Immediate Discard:</strong> The raw audio waveform is never saved, never written to disk, and never transmitted over the internet or any network.</li>
              <li>Turning off lighting or enabling "Still Glow" immediately terminates the audio analysis loop.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-emerald-400" />
            <span>3. Media Sessions &amp; Artwork Extraction</span>
          </h2>
          <p>
            Luma reads track metadata (song title, artist, album name, and album artwork) via Windows Global System Media Transport Controls (GSMTC). This communication occurs entirely locally between Windows and Luma.
          </p>
          <p>
            Dominant colors are extracted from the album artwork on-device using a local canvas routine to power the ambient edge lighting. Artwork files are never uploaded or shared.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            4. Lyrics Lookups &amp; Network Activity
          </h2>
          <p>
            To provide synchronized lyrics, Luma performs an automated web request containing the song title, artist name, and track duration to the open LRCLIB database (<code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">lrclib.net</code>) or fallback lyrics providers.
          </p>
          <p>
            No user identifier, IP tracking, or account information is attached to lyrics requests. You can disable automated lyrics lookup in Settings &gt; Privacy at any time or supply local <code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">.lrc</code> files instead.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            5. Optional Spotify Account Connection
          </h2>
          <p>
            Luma offers an optional Spotify connection via the official Spotify Web API using PKCE (Proof Key for Code Exchange). If enabled:
          </p>
          <ul className="list-disc list-inside space-y-1 text-muted-light">
            <li>Tokens are stored securely in the native Windows Credential Manager.</li>
            <li>No client secrets or login credentials are accessible to third parties.</li>
            <li>You can disconnect at any time from Luma Settings or at <code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">spotify.com/account/apps</code>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            6. Purchases &amp; License Keys (Future Integration)
          </h2>
          <p>
            When checkout is enabled in Phase 2 via Lemon Squeezy (our Merchant of Record), payment processing will be handled directly on Lemon Squeezy's secure, PCI-compliant infrastructure. Luma will store only the validated license key and device activation record necessary to honor your 3-device personal license.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            7. Contact &amp; Inquiries
          </h2>
          <p>
            For privacy inquiries, please contact:
            <br />
            <span className="text-white font-mono text-xs">
              Email: <a href="mailto:privacy@lumaplayer.com" className="text-luma-blue underline">privacy@lumaplayer.com</a>
            </span>
            <br />
            <span className="text-muted-light font-mono text-xs">
              Entity: Project Luma Team
            </span>
          </p>
        </section>

      </div>
    </div>
  );
};
