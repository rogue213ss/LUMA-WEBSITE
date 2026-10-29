import React, { useState } from 'react';
import { VISUAL_MODES } from '../data/mockData';
import { VisualModeInfo } from '../types';
import { Sparkles, Music, Radio } from 'lucide-react';

export const VisualShowcase: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<VisualModeInfo>(VISUAL_MODES[0]);

  return (
    <section id="showcase" className="py-24 bg-[#06090E] border-y border-surface-border/50 relative overflow-hidden">
      {/* Dynamic Background Glow matching selected mode */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: selectedMode.accentColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-luma-blue font-mono uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5" />
            <span>Interactive Visualizer Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Eight Distinct Visual Worlds.
          </h2>
          <p className="text-muted text-base sm:text-lg mt-3">
            Switch between full-screen atmospheres tailored to every genre, setup mood, and listening state. The artwork dictates the color; the world dictates the motion.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {VISUAL_MODES.map((mode) => {
            const isSelected = selectedMode.name === mode.name;
            return (
              <button
                key={mode.name}
                onClick={() => setSelectedMode(mode)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-surface-card text-white border-luma-blue/50 shadow-glow-sm'
                    : 'bg-surface/60 text-muted hover:text-white border-surface-border hover:border-surface-border/80'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ 
                    backgroundColor: mode.accentColor,
                    boxShadow: isSelected ? `0 0 8px ${mode.accentColor}` : 'none'
                  }} 
                />
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Mode Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl bg-surface-card/90 border border-surface-border p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Left Column: Mode Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-dark mb-2">
                <span>Display Mode</span>
                <span>•</span>
                <span style={{ color: selectedMode.accentColor }}>{selectedMode.name}</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-2">
                {selectedMode.name}
              </h3>
              
              <p className="text-sm font-medium text-luma-blue mb-4">
                "{selectedMode.tagline}"
              </p>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {selectedMode.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-surface-border/80 text-xs sm:text-sm">
              <div>
                <span className="text-muted-dark font-mono uppercase tracking-wider block text-xs mb-1">
                  Visual Characteristics
                </span>
                <p className="text-muted-light font-medium">
                  {selectedMode.visualCharacteristics}
                </p>
              </div>

              <div>
                <span className="text-muted-dark font-mono uppercase tracking-wider block text-xs mb-1">
                  Best Suited For
                </span>
                <p className="text-muted-light">
                  {selectedMode.bestFor}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 text-xs text-muted-dark font-mono">
                <span>Adaptive: Low &amp; High Tiers</span>
                <span>•</span>
                <span>Ctrl+Shift+F</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visualizer Canvas Simulator */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center rounded-2xl bg-[#04060A] border border-surface-border/80 p-6 sm:p-10 relative overflow-hidden min-h-[340px]">
            
            {/* Visualizer Background Atmosphere */}
            <div 
              className="absolute inset-0 opacity-25 transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${selectedMode.accentColor} 0%, transparent 70%)`
              }}
            />

            {/* Mode-Specific Articulated Visualization */}
            {selectedMode.name === 'Cinematic' && (
              <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                <div 
                  className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-1 shadow-2xl relative flex items-center justify-center animate-pulse"
                  style={{ boxShadow: `0 0 50px ${selectedMode.accentColor}40` }}
                >
                  <Music className="w-10 h-10 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Cinematic Widescreen</div>
                  <div className="text-xs text-muted-dark font-mono mt-1">Soft Camera Drift • 60 FPS Breathing Atmosphere</div>
                </div>
              </div>
            )}

            {selectedMode.name === 'Lyrics Cinema' && (
              <div className="relative z-10 w-full max-w-md space-y-3 text-center">
                <div className="text-[11px] font-mono text-muted-dark tracking-widest uppercase mb-3">
                  LRCLIB TIMED SYNCHRONIZATION
                </div>
                <div className="text-xs text-muted-dark">The city lights reflect in silent glass</div>
                <div className="text-xl sm:text-2xl font-bold text-white scale-105 drop-shadow-[0_0_15px_rgba(129,140,248,0.6)]">
                  Don't just listen to the music—feel it breathe
                </div>
                <div className="text-xs text-muted-dark">Every transient becomes a living glow</div>
              </div>
            )}

            {selectedMode.name === 'Immersion' && (
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-xl border border-rose-900/50 bg-gradient-to-b from-rose-950 via-black to-red-950 p-4 flex flex-col justify-between shadow-[0_0_60px_rgba(244,63,94,0.35)]">
                  <span className="text-[10px] font-mono text-rose-400">IMMERSION CR-01</span>
                  <div className="my-auto">
                    <span className="text-base font-semibold text-rose-100">Deep Crimson Grade</span>
                  </div>
                  <span className="text-[9px] font-mono text-rose-500 text-right">LUMINANCE MULTIPLY</span>
                </div>
              </div>
            )}

            {selectedMode.name === 'Spectrum' && (
              <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
                <div className="flex items-end gap-1.5 h-32 w-full justify-center">
                  {[20, 45, 75, 90, 65, 80, 55, 95, 85, 60, 40, 70, 50, 30, 65, 85, 40].map((val, idx) => (
                    <div
                      key={idx}
                      className="w-2.5 rounded-t-sm transition-all duration-200"
                      style={{
                        height: `${val}%`,
                        backgroundColor: selectedMode.accentColor,
                        boxShadow: `0 0 10px ${selectedMode.accentColor}80`
                      }}
                    />
                  ))}
                </div>
                <div className="text-xs font-mono text-muted-dark mt-4">
                  17-Band Low-Latency Frequency Distribution
                </div>
              </div>
            )}

            {selectedMode.name === 'Flow' && (
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-36 h-36 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-cyan-500/20 blur-md" />
                </div>
                <div className="text-xs font-mono text-cyan-300 mt-4">Harmonic Velocity Fields</div>
              </div>
            )}

            {selectedMode.name === 'Inferno' && (
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 shadow-[0_0_50px_rgba(251,146,60,0.6)] flex items-center justify-center animate-bounce">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="text-xs font-mono text-orange-400 mt-4">High Transient Kick Reaction</div>
              </div>
            )}

            {selectedMode.name === 'Midnight' && (
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full border border-slate-700/60 bg-gradient-to-b from-slate-900 to-black flex items-center justify-center shadow-inner">
                  <span className="text-xs font-mono text-slate-400">Night Vision Safe</span>
                </div>
                <div className="text-xs font-mono text-muted-dark mt-3">Low-Luminance Desk Glow</div>
              </div>
            )}

            {selectedMode.name === 'Afterparty' && (
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-2">
                  <div className="w-12 h-24 rounded-lg bg-pink-500 shadow-[0_0_20px_#ec4899]" />
                  <div className="w-12 h-32 rounded-lg bg-purple-500 shadow-[0_0_20px_#a855f7]" />
                  <div className="w-12 h-28 rounded-lg bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                </div>
                <div className="text-xs font-mono text-pink-300 mt-4">Dynamic Color Energy Shifts</div>
              </div>
            )}

            {/* Sub-label */}
            <div className="absolute bottom-3 right-4 text-[10px] font-mono text-muted-dark">
              Simulation • Project Luma Render Pipeline
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
