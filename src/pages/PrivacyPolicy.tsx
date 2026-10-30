import React from 'react';
import { ArrowLeft, EyeOff, Cpu, Key, ShieldCheck, Mail } from 'lucide-react';

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

      <div className="space-y-8 text-muted text-sm sm:text-base leading-relaxed">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-muted-dark">
            Last Updated: October 2026 • Version 1.0
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            1. Core Privacy Philosophy
          </h2>
          <p>
            Project Luma (<strong className="text-white">"Luma"</strong>, <strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong>), operated by <span className="text-white font-medium">Project Luma Team</span>, is designed around an unwavering commitment to personal privacy: <span className="text-white font-medium">what you listen to and do on your Windows PC is strictly your own business</span>.
          </p>
          <p>
            Luma is desktop software designed to process audio and visual data locally. We do not sell your personal data, we do not profile your listening habits, and we do not maintain invasive telemetry or activity tracking.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-luma-blue" />
            <span>2. Local Audio Processing (WASAPI Loopback)</span>
          </h2>
          <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-2 text-xs sm:text-sm">
            <p className="text-white font-medium">How Music-Reactive Processing Operates:</p>
            <ul className="list-disc list-inside space-y-1.5 text-muted-light">
              <li>Luma taps into your Windows default audio output endpoint using native WASAPI (Windows Audio Session API) loopback capture.</li>
              <li>The audio stream is analyzed directly in volatile PC memory approximately 30 times per second using fast Fourier transforms (FFT) into immediate frequency energy bands (sub, low-mids, high-mids, highs).</li>
              <li><strong className="text-white">Immediate Discard:</strong> Raw PCM audio buffers are analyzed in RAM and immediately discarded. Audio is never written to disk, buffered to persistent storage, or transmitted across any local network or the internet.</li>
              <li>Switching to "Still Glow" mode or pausing audio playback immediately idles or terminates the audio analysis loop.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-emerald-400" />
            <span>3. Media Sessions &amp; Artwork Extraction</span>
          </h2>
          <p>
            Luma reads playing track information (song title, artist, album name, and album cover art) using the Windows Global System Media Transport Controls (GSMTC) session manager. This communication takes place entirely locally within your Windows operating system.
          </p>
          <p>
            Dominant and secondary colors are extracted from the album artwork on-device using a local HTML5 canvas palette extraction routine. Neither your playback history nor your album artwork files are uploaded to any external server.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            4. Lyrics Lookups &amp; Network Requests
          </h2>
          <p>
            To provide cinematic synchronized lyrics, Luma performs an automated outbound HTTPS request containing strictly the song title, artist name, and track duration to the open lyrics service LRCLIB (<code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">lrclib.net</code>) or fallback lyrics databases.
          </p>
          <p>
            These requests do not include user accounts, personal identities, or telemetry identifiers. If you prefer completely offline operation, you can supply your own local <code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">.lrc</code> or <code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">.txt</code> files alongside your audio files.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            5. Optional Spotify Account Connection
          </h2>
          <p>
            Luma provides an optional integration with the Spotify Web API using the industry-standard OAuth 2.0 PKCE (Proof Key for Code Exchange) flow. If you choose to connect your Spotify account:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-muted-light">
            <li>Authentication occurs directly between your browser and Spotify's official servers.</li>
            <li>Received access and refresh tokens are stored securely in your native <strong className="text-white">Windows Credential Manager</strong> using operating-system-level encryption.</li>
            <li>No client secrets or Spotify account passwords are stored on our servers.</li>
            <li>You can revoke Luma's access at any time from within Luma settings or via your Spotify account settings at <code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">spotify.com/account/apps</code>.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Key className="w-5 h-5 text-sky-400" />
            <span>6. License Activation &amp; Device Identifiers</span>
          </h2>
          <p>
            To activate and verify your license or beta evaluation access, Luma communicates with our secure licensing backend:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-muted-light">
            <li><strong className="text-white">Anonymous Device Identifier:</strong> Upon initial setup, Luma generates a random 16-byte pseudo-random hexadecimal string (<code className="text-xs font-mono text-muted-light bg-surface px-1 py-0.5 rounded">luma_inst_...</code>) using the operating system's cryptographic random number generator. This identifier is stored in your Windows Credential Manager and local application directory.</li>
            <li><strong className="text-white">Device Limit Enforcement:</strong> When activating a code, the software transmits the license code, the random installation ID, and the device computer name. This is used solely to verify that your single license is active on no more than your permitted three (3) personal Windows devices.</li>
            <li><strong className="text-white">No Hardware Fingerprinting:</strong> We do not collect MAC addresses, CPU serial numbers, motherboard IDs, or personal telemetry.</li>
            <li><strong className="text-white">Offline Grace:</strong> Once verified, Luma operates offline for up to 14 days before requiring a periodic background check, with built-in clock verification to ensure uninterrupted desktop use.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight">
            7. Payment Processing &amp; Merchant of Record
          </h2>
          <p>
            When public purchasing launches, orders and payments will be conducted securely by our Merchant of Record, <strong className="text-white">Lemon Squeezy</strong>. Lemon Squeezy handles order processing, sales tax collection, and payment security on their PCI-DSS Level 1 compliant infrastructure.
          </p>
          <p>
            Project Luma never collects, processes, or stores your credit card numbers, billing addresses, or payment credentials. When Lemon Squeezy completes a transaction, we receive only the necessary confirmation to issue your license key and manage your device activation allowance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>8. Zero Telemetry Commitment</span>
          </h2>
          <p>
            The Project Luma desktop application contains zero third-party analytics trackers, zero advertising SDKs, and zero behavioral monitoring tools. We do not track how long you listen, which genres you play, or which applications you run.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Mail className="w-5 h-5 text-luma-blue" />
            <span>9. Contact &amp; Inquiries</span>
          </h2>
          <p>
            If you have questions, feedback, or requests regarding this Privacy Policy or your data practices, please reach out to us directly:
          </p>
          <div className="p-4 rounded-xl bg-surface-card border border-surface-border space-y-1 text-xs sm:text-sm">
            <div>
              <span className="text-muted-dark font-mono uppercase tracking-wider block text-xs">Support &amp; Privacy Contact</span>
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
