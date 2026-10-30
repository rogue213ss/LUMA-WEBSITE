import React from 'react';
import { Monitor, Cpu, HardDrive, Volume2, ShieldCheck, Info } from 'lucide-react';

export const SystemRequirements: React.FC = () => {
  return (
    <section id="system-requirements" className="py-20 bg-[#06090E] border-t border-surface-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-luma-blue font-mono uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5" />
            <span>Windows Desktop Compatibility</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            System Requirements.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Engineered natively for 64-bit Windows with Rust and lightweight WebView2. Built to run quietly alongside your games and desktop workflows.
          </p>
        </div>

        {/* Specifications Cards: Minimum vs Recommended */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Minimum Card */}
          <div className="rounded-3xl bg-surface-card border border-surface-border p-7 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Minimum Specification
                </h3>
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-surface border border-surface-border text-muted-light">
                  Low Tier Profile
                </span>
              </div>
              <p className="text-xs text-muted mb-6 leading-relaxed">
                Ideal for lightweight laptops and everyday setups. Luma automatically engages its built-in Low-Performance Tier (480p loops, lyrics &amp; immersion modes, and simplified canvas rendering) to protect responsiveness.
              </p>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Monitor className="w-4 h-4 text-luma-blue" />
                    OS
                  </span>
                  <span className="text-right text-white font-medium">Windows 10 / 11 (64-bit, v1903+)</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Cpu className="w-4 h-4 text-luma-blue" />
                    Memory (RAM)
                  </span>
                  <span className="text-right text-white font-medium">6 GB RAM</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Cpu className="w-4 h-4 text-luma-blue" />
                    Processor (CPU)
                  </span>
                  <span className="text-right text-white font-medium">Dual-core x64 CPU (SSE4.2 &amp; AVX)</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <ShieldCheck className="w-4 h-4 text-luma-blue" />
                    Graphics (GPU)
                  </span>
                  <span className="text-right text-white font-medium">Integrated Graphics (DirectX 11 / WebGL 2.0)</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <HardDrive className="w-4 h-4 text-luma-blue" />
                    Disk Space
                  </span>
                  <span className="text-right text-white font-medium">250 MB free space</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Volume2 className="w-4 h-4 text-luma-blue" />
                    Audio Device
                  </span>
                  <span className="text-right text-emerald-400 font-medium">Default Audio Endpoint (Shared mode)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border/60 text-[11px] text-muted-dark">
              Microsoft Edge WebView2 Evergreen Runtime required (pre-installed on Windows 11 &amp; updated Windows 10).
            </div>
          </div>

          {/* Recommended Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#0F1829] via-surface-card to-[#0A0F1A] border-2 border-luma-blue/50 p-7 sm:p-8 flex flex-col justify-between shadow-glow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Recommended Specification
                </h3>
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-luma-blue/15 border border-luma-blue/40 text-luma-blue font-semibold">
                  High Tier Profile
                </span>
              </div>
              <p className="text-xs text-muted mb-6 leading-relaxed">
                Unlocks the complete Project Luma experience: all 8 visual worlds running at full 60 FPS, high-definition 720p/1080p loops, rich particle shards, and atmospheric shader effects.
              </p>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Monitor className="w-4 h-4 text-sky-400" />
                    OS
                  </span>
                  <span className="text-right text-white font-medium">Windows 11 (64-bit)</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Cpu className="w-4 h-4 text-sky-400" />
                    Memory (RAM)
                  </span>
                  <span className="text-right text-white font-medium">8 GB RAM or more</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Cpu className="w-4 h-4 text-sky-400" />
                    Processor (CPU)
                  </span>
                  <span className="text-right text-white font-medium">Quad-core x64 CPU (4+ cores / 8 threads)</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    Graphics (GPU)
                  </span>
                  <span className="text-right text-white font-medium">Dedicated GPU (GTX 1050 / RX 560 or newer)</span>
                </div>

                <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-surface-border/60">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <HardDrive className="w-4 h-4 text-sky-400" />
                    Disk Space
                  </span>
                  <span className="text-right text-white font-medium">500 MB free SSD space</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted-dark flex items-center gap-2 shrink-0">
                    <Volume2 className="w-4 h-4 text-sky-400" />
                    Audio Device
                  </span>
                  <span className="text-right text-emerald-400 font-medium">Speakers, Headphones, or USB DAC</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border/60 text-[11px] text-muted-dark">
              Full hardware acceleration with automatic background throttling when gaming or working.
            </div>
          </div>

        </div>

        {/* Technical Transparency Callout */}
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-surface-card/60 border border-surface-border p-4 sm:p-5 text-xs text-muted leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-luma-blue shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Hardware Compatibility Note:</strong> These system requirements are verified against our real desktop client architecture and test suites. Luma automatically assesses system memory and thread count at runtime, dynamically tailoring visual complexity to your PC's capabilities without manual configuration.
          </p>
        </div>

      </div>
    </section>
  );
};
