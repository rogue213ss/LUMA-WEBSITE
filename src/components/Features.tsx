import React from 'react';
import { 
  Sun, AlignLeft, Sparkles, Palette, 
  Layers, Cpu
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#080B10] relative">
      {/* Background Decorative Ambient Radial */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-luma-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-luma-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-luma-blue font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Windows Audiophiles &amp; Setups</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed around how you actually listen.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Luma doesn't replace your favorite streaming apps—it elevates them. Every beat, album palette, and lyric line becomes an immersive physical presence on your desk.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Feature 1: Music-Reactive Lighting */}
          <div className="lg:col-span-2 rounded-2xl bg-surface-card border border-surface-border p-7 sm:p-9 relative overflow-hidden group hover:border-luma-blue/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-luma-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-luma-blue/15 transition-all" />
            
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-luma-blue/15 border border-luma-blue/30 flex items-center justify-center text-luma-blue">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-luma-blue">
                Screen Edge Ambient Engine
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Music-Reactive Lighting Spilling From All 4 Edges
            </h3>
            
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              A transparent, click-through overlay casts soft, living light along the perimeter of your display. Bass swells create deep breathing blooms, while mid and high frequencies generate subtle harmonic shifts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border text-xs">
                <div className="text-white font-medium mb-1">WASAPI Loopback</div>
                <div className="text-muted-dark">Direct Windows audio capture without virtual cables or mic setup.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border text-xs">
                <div className="text-white font-medium mb-1">Zero-Strobe Smoothing</div>
                <div className="text-muted-dark">Carefully bounded damping prevents aggressive, jarring flicker.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border text-xs">
                <div className="text-white font-medium mb-1">Still Glow Mode</div>
                <div className="text-muted-dark">Switch to steady ambient light whenever you desire calm illumination.</div>
              </div>
            </div>
          </div>

          {/* Feature 2: Cinematic Synchronized Lyrics */}
          <div className="rounded-2xl bg-surface-card border border-surface-border p-7 sm:p-9 relative overflow-hidden group hover:border-luma-violet/30 transition-all duration-300 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-luma-violet/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-luma-violet/15 border border-luma-violet/30 flex items-center justify-center text-luma-violet">
                  <AlignLeft className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-luma-violet">
                  Lyrics Cinema
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Cinematic Synchronized Lyrics
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                Watch lines illuminate in real time with high-legibility typography and smooth tracking. Lyrics are queried automatically or loaded directly from your personal <code className="text-xs text-muted-light font-mono bg-surface-muted px-1 py-0.5 rounded">.lrc</code> / <code className="text-xs text-muted-light font-mono bg-surface-muted px-1 py-0.5 rounded">.txt</code> files.
              </p>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-surface-muted/80 border border-surface-border/70 text-xs font-mono text-muted-light flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>LRCLIB + Local File Fallback</span>
            </div>
          </div>

          {/* Feature 3: Immersive Visual Worlds */}
          <div className="rounded-2xl bg-surface-card border border-surface-border p-7 sm:p-9 relative overflow-hidden group hover:border-luma-blue/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                  8 Display Modes
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Immersive Visual Worlds
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                Full-window experiences tailored to your mood. The artwork dictates the palette; the mode dictates the geometry, motion, and intensity.
              </p>

              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-muted">
                {['Cinematic', 'Immersion', 'Flow', 'Inferno', 'Spectrum', 'Midnight'].map((mode) => (
                  <span key={mode} className="px-2 py-0.5 rounded bg-surface border border-surface-border">
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 text-xs text-muted-dark">
              Press <kbd className="px-1.5 py-0.5 rounded bg-surface border border-surface-border font-mono text-white">Ctrl+Shift+F</kbd> anytime to immerse.
            </div>
          </div>

          {/* Feature 4: Album-Art-Inspired Colors */}
          <div className="rounded-2xl bg-surface-card border border-surface-border p-7 sm:p-9 relative overflow-hidden group hover:border-luma-blue/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Dynamic Palette
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Album-Art-Inspired Colors
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                Luma locally analyzes each song's artwork and isolates dominant and complementary colors. You can customize primary/secondary color splits (default 60/40) or rely on curated fallback grades like Midnight and Crimson.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div className="h-2 flex-1 rounded-l-full bg-sky-500" />
              <div className="h-2 flex-1 rounded-r-full bg-indigo-500" />
              <span className="text-[10px] font-mono text-muted-dark">60/40 Split</span>
            </div>
          </div>

          {/* Feature 5: Persistent, Convenient Companion */}
          <div className="rounded-2xl bg-surface-card border border-surface-border p-7 sm:p-9 relative overflow-hidden group hover:border-luma-blue/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  Native Windows Performance
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                Persistent &amp; Convenient
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-4">
                Compact desktop playback bar docks neatly alongside your work. Integrates with Windows Media Sessions (GSMTC) for instant transport control across Spotify, browser audio, and local media.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-muted-dark pt-3 border-t border-surface-border">
              <span>Auto / Low / High Tiers</span>
              <span className="text-emerald-400 font-mono">0 Telemetry</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
