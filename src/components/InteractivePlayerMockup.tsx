import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, SkipForward, SkipBack, Volume2, 
  Sparkles, Sliders, 
  Layers, Music2, SunDim
} from 'lucide-react';
import { DEMO_TRACKS } from '../data/mockData';
import { VisualMode } from '../types';

export const InteractivePlayerMockup: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(6);
  const [activeMode, setActiveMode] = useState<VisualMode>('Lyrics Cinema');
  const [lightingIntensity, setLightingIntensity] = useState(85);
  const [lightingWidth, setLightingWidth] = useState(60);
  const [lightingBehavior, setLightingBehavior] = useState<'follow' | 'still'>('follow');
  const [isMuted, setIsMuted] = useState(false);

  const track = DEMO_TRACKS[currentTrackIndex];

  // Simulated playback timer for lyrics sync and scrubber
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev >= track.duration) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, track.duration]);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Find active lyric line based on time
  const currentLyricIndex = track.lyrics.findIndex((lyric, idx) => {
    const nextLyric = track.lyrics[idx + 1];
    if (!nextLyric) return true;
    return currentTime >= lyric.time && currentTime < nextLyric.time;
  });

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % DEMO_TRACKS.length);
    setCurrentTime(0);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + DEMO_TRACKS.length) % DEMO_TRACKS.length);
    setCurrentTime(0);
  };

  // Computed ambient edge glow style
  const edgeGlowStyle = {
    boxShadow: `
      0 -${Math.round(lightingWidth * 0.4)}px ${Math.round(lightingIntensity * 0.8)}px -10px ${track.primaryColor}40,
      0 ${Math.round(lightingWidth * 0.4)}px ${Math.round(lightingIntensity * 0.8)}px -10px ${track.secondaryColor}40,
      -${Math.round(lightingWidth * 0.4)}px 0 ${Math.round(lightingIntensity * 0.8)}px -10px ${track.primaryColor}40,
      ${Math.round(lightingWidth * 0.4)}px 0 ${Math.round(lightingIntensity * 0.8)}px -10px ${track.secondaryColor}40
    `,
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      {/* Ambient Lighting Overlay Simulation on Monitor Screen */}
      <div 
        className="relative rounded-2xl p-1 sm:p-2 bg-[#05070A] border border-surface-border transition-all duration-700 shadow-2xl"
        style={edgeGlowStyle}
      >
        {/* Screen Edge Ambient Spills (Top, Bottom, Left, Right) */}
        <div 
          className="absolute -top-6 left-12 right-12 h-6 blur-xl pointer-events-none transition-all duration-700"
          style={{ 
            backgroundColor: track.primaryColor,
            opacity: isPlaying ? (lightingBehavior === 'follow' ? lightingIntensity / 110 : lightingIntensity / 160) : 0.15
          }}
        />
        <div 
          className="absolute -bottom-6 left-12 right-12 h-6 blur-xl pointer-events-none transition-all duration-700"
          style={{ 
            backgroundColor: track.secondaryColor,
            opacity: isPlaying ? (lightingBehavior === 'follow' ? lightingIntensity / 120 : lightingIntensity / 170) : 0.15
          }}
        />
        <div 
          className="absolute top-12 bottom-12 -left-6 w-6 blur-xl pointer-events-none transition-all duration-700"
          style={{ 
            backgroundColor: track.primaryColor,
            opacity: isPlaying ? (lightingBehavior === 'follow' ? lightingIntensity / 130 : lightingIntensity / 180) : 0.15
          }}
        />
        <div 
          className="absolute top-12 bottom-12 -right-6 w-6 blur-xl pointer-events-none transition-all duration-700"
          style={{ 
            backgroundColor: track.secondaryColor,
            opacity: isPlaying ? (lightingBehavior === 'follow' ? lightingIntensity / 130 : lightingIntensity / 180) : 0.15
          }}
        />

        {/* Windows App Container Frame */}
        <div className="relative rounded-xl overflow-hidden bg-[#0A0E17] border border-surface-border/80 flex flex-col h-[520px] sm:h-[580px]">
          
          {/* Windows Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#080C14] border-b border-surface-border/60 select-none text-xs text-muted">
            <div className="flex items-center gap-2">
              <img src="/icon.png" alt="" className="w-4 h-4 object-contain" />
              <span className="font-medium text-white/90">Project Luma</span>
              <span className="text-[11px] text-muted-dark font-mono">v0.2.1 • Windows GSMTC</span>
            </div>
            
            {/* Quick Status & Mode Tag */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-muted border border-surface-border text-[11px] text-muted-light font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                WASAPI 30Hz Loopback
              </span>
              <span className="px-2 py-0.5 rounded-md bg-surface-card border border-surface-border text-[11px] text-luma-blue font-mono">
                Mode: {activeMode}
              </span>
            </div>

            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-surface-muted hover:bg-surface-border cursor-pointer" />
              <div className="w-3 h-3 rounded-sm bg-surface-muted hover:bg-surface-border cursor-pointer" />
              <div className="w-3 h-3 rounded-sm bg-surface-muted hover:bg-rose-500/80 cursor-pointer" />
            </div>
          </div>

          {/* Main App Workspace */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* Sidebar (Desktop Companion) */}
            <div className="hidden md:flex flex-col w-48 bg-[#090D15]/90 border-r border-surface-border/60 p-3 space-y-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-dark px-2 mb-1.5">
                  Navigation
                </div>
                <div className="space-y-1 text-xs">
                  <div className="px-2.5 py-1.5 rounded-md bg-surface-card text-white font-medium flex items-center gap-2">
                    <Music2 className="w-3.5 h-3.5 text-luma-blue" />
                    <span>Now Playing</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-md text-muted hover:text-white hover:bg-surface-card/50 flex items-center gap-2 cursor-pointer transition-colors">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Visual Worlds</span>
                  </div>
                  <div className="px-2.5 py-1.5 rounded-md text-muted hover:text-white hover:bg-surface-card/50 flex items-center gap-2 cursor-pointer transition-colors">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Ambient Light</span>
                  </div>
                </div>
              </div>

              {/* Visual Modes Switcher */}
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-dark px-2 mb-1.5 flex items-center justify-between">
                  <span>Display Mode</span>
                  <span className="text-[9px] text-muted-dark">Ctrl+Shift+F</span>
                </div>
                <div className="space-y-0.5 text-[11px]">
                  {(['Lyrics Cinema', 'Cinematic', 'Immersion', 'Flow'] as VisualMode[]).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setActiveMode(mode)}
                      className={`w-full text-left px-2 py-1 rounded transition-colors flex items-center justify-between ${
                        activeMode === mode
                          ? 'bg-luma-blue/15 text-luma-blue font-medium'
                          : 'text-muted-dark hover:text-muted-light'
                      }`}
                    >
                      <span>{mode}</span>
                      {activeMode === mode && <span className="w-1 h-1 rounded-full bg-luma-blue" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Palette Extraction Box */}
              <div className="mt-auto p-2.5 rounded-lg bg-surface-card border border-surface-border text-[11px]">
                <div className="text-muted-dark font-mono text-[10px] mb-1.5">EXTRACTED PALETTE</div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded border border-white/20 shadow-sm"
                    style={{ backgroundColor: track.primaryColor }}
                    title={`Primary: ${track.primaryColor}`}
                  />
                  <div 
                    className="w-5 h-5 rounded border border-white/20 shadow-sm"
                    style={{ backgroundColor: track.secondaryColor }}
                    title={`Secondary: ${track.secondaryColor}`}
                  />
                  <span className="text-[10px] text-muted-dark font-mono">60/40 Split</span>
                </div>
              </div>
            </div>

            {/* Center Stage: Dynamic View according to Active Mode */}
            <div className="flex-1 relative flex flex-col overflow-hidden bg-gradient-to-b from-[#090D16] to-[#06080E]">
              
              {/* Top View Mode Bar (Mobile & Quick Mode Selector) */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-surface-border/40 text-xs">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <span className="text-muted-dark text-[11px] mr-1 hidden sm:inline">World:</span>
                  {(['Lyrics Cinema', 'Cinematic', 'Immersion', 'Flow'] as VisualMode[]).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setActiveMode(mode)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                        activeMode === mode
                          ? 'bg-luma-blue/20 text-luma-blue border border-luma-blue/30 shadow-sm'
                          : 'text-muted-dark hover:text-muted hover:bg-surface-card'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>

                {/* Track Selector Demo Dropdown */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-dark hidden sm:inline">Preset:</span>
                  <select
                    value={currentTrackIndex}
                    onChange={(e) => {
                      setCurrentTrackIndex(Number(e.target.value));
                      setCurrentTime(0);
                    }}
                    className="bg-surface-card border border-surface-border text-white text-xs rounded px-2 py-1 outline-none cursor-pointer hover:border-luma-blue/40"
                  >
                    {DEMO_TRACKS.map((t, idx) => (
                      <option key={t.id} value={idx}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dynamic Mode Visualizer Stage */}
              <div className="flex-1 relative flex flex-col justify-center items-center p-4 sm:p-6 text-center overflow-hidden">
                
                {/* Background Ambient Gradient reflecting active track */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${track.primaryColor} 0%, transparent 65%)`
                  }}
                />

                {/* Mode: Lyrics Cinema */}
                {activeMode === 'Lyrics Cinema' && (
                  <div className="relative z-10 w-full max-w-lg space-y-3 py-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-luma-blue mb-2 flex items-center justify-center gap-1.5">
                      <Sparkles className="w-3 h-3 animate-spin" />
                      <span>CINEMATIC SYNCHRONIZED LYRICS (LRCLIB SYNC)</span>
                    </div>

                    <div className="space-y-2.5 text-center transition-all duration-300">
                      {track.lyrics.map((lyric, idx) => {
                        const isActive = idx === (currentLyricIndex === -1 ? 0 : currentLyricIndex);
                        const isPast = idx < (currentLyricIndex === -1 ? 0 : currentLyricIndex);
                        return (
                          <p
                            key={idx}
                            className={`transition-all duration-500 leading-snug cursor-pointer hover:text-white ${
                              isActive
                                ? 'text-lg sm:text-xl font-bold text-white scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]'
                                : isPast
                                ? 'text-xs sm:text-sm text-muted-dark opacity-60'
                                : 'text-xs sm:text-sm text-muted-dark opacity-40'
                            }`}
                            onClick={() => setCurrentTime(lyric.time)}
                          >
                            {lyric.text}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Mode: Cinematic */}
                {activeMode === 'Cinematic' && (
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <div 
                      className={`w-36 h-36 sm:w-44 sm:h-44 rounded-xl bg-gradient-to-br ${track.coverGradient} p-1 shadow-2xl relative group overflow-hidden border border-white/10`}
                    >
                      <div className="w-full h-full rounded-lg bg-black/30 backdrop-blur-xs flex items-center justify-center p-3">
                        <Music2 className="w-12 h-12 text-white/70" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{track.title}</h4>
                      <p className="text-sm text-muted">{track.artist} — {track.album}</p>
                    </div>
                    {/* Simulated Cinematic Audio Waves */}
                    <div className="flex items-end gap-1.5 h-10 pt-2">
                      {[35, 60, 85, 45, 95, 70, 40, 80, 55, 90, 65, 50, 75, 40].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 rounded-full transition-all duration-150"
                          style={{
                            height: isPlaying ? `${Math.min(100, h * (lightingIntensity / 100))}%` : '6px',
                            backgroundColor: i % 2 === 0 ? track.primaryColor : track.secondaryColor,
                            opacity: isPlaying ? 0.9 : 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Mode: Immersion */}
                {activeMode === 'Immersion' && (
                  <div className="relative z-10 flex flex-col items-center max-w-md">
                    <div className="w-48 h-48 rounded-lg border border-red-900/60 bg-gradient-to-b from-red-950/80 via-black to-red-950/40 p-4 flex flex-col justify-between shadow-[0_0_50px_rgba(153,27,27,0.3)]">
                      <div className="text-[10px] font-mono text-red-400 tracking-wider">IMMERSION GRADE</div>
                      <div className="text-center">
                        <div className="text-sm font-semibold text-red-100">{track.title}</div>
                        <div className="text-xs text-red-300/70">{track.artist}</div>
                      </div>
                      <div className="text-[9px] font-mono text-red-500/80 text-right">CRIMSON MULTIPLY</div>
                    </div>
                    <p className="text-xs text-muted-dark mt-4 max-w-xs text-center font-mono">
                      Luminance extraction multiplied by crimson baseline field. Clean, focused grade.
                    </p>
                  </div>
                )}

                {/* Mode: Flow */}
                {activeMode === 'Flow' && (
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <div 
                        className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse"
                        style={{ backgroundColor: track.primaryColor }}
                      />
                      <div 
                        className="w-32 h-32 rounded-full border-2 border-dashed border-luma-blue/40 animate-spin"
                        style={{ animationDuration: '20s' }}
                      />
                      <div className="absolute text-center">
                        <div className="text-xs font-mono text-luma-blue">FLOW HARMONICS</div>
                        <div className="text-xs text-white font-medium mt-1">Mid-band Reactive</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-dark mt-2 font-mono">
                      Continuous fluid motion driven by real-time audio velocity fields
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Bottom Persistent Playback Bar (True to Luma's desktop design) */}
          <div className="bg-[#070A11] border-t border-surface-border px-3 sm:px-4 py-3 select-none">
            
            {/* Scrubber Progress Bar */}
            <div className="mb-2.5">
              <div 
                className="relative w-full h-1.5 bg-surface-muted rounded-full cursor-pointer group"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                  setCurrentTime(Math.round(ratio * track.duration));
                }}
              >
                <div 
                  className="h-full rounded-full transition-all duration-100 group-hover:h-2"
                  style={{ 
                    width: `${(currentTime / track.duration) * 100}%`,
                    background: `linear-gradient(90deg, ${track.primaryColor}, ${track.secondaryColor})`
                  }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-muted-dark font-mono mt-1">
                <span>{formatTime(currentTime)}</span>
                <span className="text-[11px] text-muted font-sans font-medium text-white/80 truncate max-w-[200px] sm:max-w-xs">
                  {track.title} • {track.artist}
                </span>
                <span>{formatTime(track.duration)}</span>
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-2">
              
              {/* Media Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={prevTrack}
                  className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-surface-card transition-colors"
                  aria-label="Previous Track"
                >
                  <SkipBack className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-white text-black hover:bg-luma-blue hover:text-black transition-colors shadow-sm"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <button
                  onClick={nextTrack}
                  className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-surface-card transition-colors"
                  aria-label="Next Track"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Edge Lighting Sliders (Live Controls) */}
              <div className="hidden sm:flex items-center gap-4 bg-surface-card/60 px-3 py-1.5 rounded-lg border border-surface-border/50 text-xs">
                
                {/* Intensity */}
                <div className="flex items-center gap-2">
                  <SunDim className="w-3.5 h-3.5 text-luma-blue" />
                  <span className="text-[11px] text-muted-dark">Intensity:</span>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={lightingIntensity}
                    onChange={(e) => setLightingIntensity(Number(e.target.value))}
                    className="w-16 accent-luma-blue h-1 cursor-pointer bg-surface-border rounded-lg"
                    title={`Lighting Intensity: ${lightingIntensity}%`}
                  />
                  <span className="text-[10px] font-mono text-muted-light">{lightingIntensity}%</span>
                </div>

                {/* Edge Width */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-dark">Width:</span>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={lightingWidth}
                    onChange={(e) => setLightingWidth(Number(e.target.value))}
                    className="w-16 accent-luma-blue h-1 cursor-pointer bg-surface-border rounded-lg"
                    title={`Edge Width: ${lightingWidth}%`}
                  />
                </div>

                {/* Behavior Switch: Follow Music vs Still Glow */}
                <button
                  onClick={() => setLightingBehavior(lightingBehavior === 'follow' ? 'still' : 'follow')}
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border transition-colors ${
                    lightingBehavior === 'follow'
                      ? 'bg-luma-blue/15 border-luma-blue/40 text-luma-blue'
                      : 'bg-surface border-surface-border text-muted-dark'
                  }`}
                  title="Switch between dynamic music-following reaction and steady still glow"
                >
                  {lightingBehavior === 'follow' ? '● Follow Music' : '○ Still Glow'}
                </button>
              </div>

              {/* Volume / Audio Indicator */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded text-muted hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  <Volume2 className={`w-4 h-4 ${isMuted ? 'text-rose-400' : 'text-muted'}`} />
                </button>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-mono text-muted-dark hidden md:inline">WASAPI Ready</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Honest Caption */}
      <div className="mt-3 text-center">
        <p className="text-xs text-muted-dark">
          <span className="text-muted-light font-medium">Interactive Product Preview:</span> Experience Luma's desktop layout, screen-edge lighting halo, and real-time synchronized lyrics engine. Try switching modes or dragging the intensity sliders above.
        </p>
      </div>
    </div>
  );
};
