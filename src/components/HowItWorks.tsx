import React from 'react';
import { PlayCircle, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Play music on your Windows PC',
      description:
        'Keep listening through Spotify desktop, YouTube in Chrome/Edge, or your favorite local player. Luma does not require you to switch apps or change how you listen.',
      icon: PlayCircle,
      detail: 'Supports any media session broadcasting via Windows GSMTC.',
      accent: 'text-sky-400',
      border: 'border-sky-500/30'
    },
    {
      number: '02',
      title: 'Instant, private on-device analysis',
      description:
        'Luma captures system audio metrics via low-latency WASAPI loopback and extracts color palettes from track artwork. Audio is converted into frequency values in memory and immediately discarded.',
      icon: Cpu,
      detail: 'No microphones, no sound recording, and 0 telemetry sent to any server.',
      accent: 'text-indigo-400',
      border: 'border-indigo-500/30'
    },
    {
      number: '03',
      title: 'Experience music transformed into light',
      description:
        'A seamless transparent overlay casts reactive lighting onto your monitor edges, synchronized lyrics guide every verse, and 8 immersive visual worlds respond to the beat.',
      icon: Sparkles,
      detail: 'Press Ctrl+Shift+F anytime to toggle full-screen visual worlds.',
      accent: 'text-emerald-400',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#080B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-muted-light font-mono uppercase tracking-wider">
            <span>Seamless Integration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How Luma works with your setup.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Zero complicated routing. No virtual audio cables. Just instant, hardware-accelerated immersion.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 -translate-y-8 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 rounded-2xl bg-surface-card border border-surface-border p-8 flex flex-col justify-between hover:border-surface-border/80 transition-all duration-300 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-muted-dark group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-surface border ${step.border} flex items-center justify-center ${step.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border/60 flex items-start gap-2 text-xs text-muted-dark">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture & Performance Note */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-card/60 border border-surface-border text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-muted">
            <span className="text-white font-medium">Performance First:</span> Built natively for Windows with Rust and lightweight WebView2. Consumes minimal CPU/GPU overhead so your games and workflows run with zero stutter.
          </p>
        </div>

      </div>
    </section>
  );
};
