import { Track, VisualModeInfo, FAQItem, PricingTier } from '../types';

export const DEMO_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Midnight Horizon',
    artist: 'Luma Sounds',
    album: 'Atmospheres Vol. 1',
    coverGradient: 'from-cyan-500 via-sky-600 to-indigo-900',
    primaryColor: '#38BDF8',
    secondaryColor: '#6366F1',
    duration: 218,
    lyrics: [
      { time: 0, text: 'Neon lights reflecting through the dark' },
      { time: 4, text: 'A gentle rhythm pulsing through the room' },
      { time: 9, text: 'Colors shifting on the monitor glass' },
      { time: 14, text: 'Sound and light converging in the haze' },
      { time: 19, text: 'Don\'t just listen to the music—feel it breathe' },
      { time: 24, text: 'Every transient becomes a living glow' },
      { time: 30, text: 'Floating in the silence of the night' },
    ]
  },
  {
    id: '2',
    title: 'Crimson Reverie',
    artist: 'Velvet Echo',
    album: 'Immersion Grade',
    coverGradient: 'from-rose-600 via-red-800 to-black',
    primaryColor: '#F43F5E',
    secondaryColor: '#991B1B',
    duration: 184,
    lyrics: [
      { time: 0, text: 'Shadows dancing on the studio wall' },
      { time: 5, text: 'Deep crimson hue warming up the edges' },
      { time: 11, text: 'Analog warmth flowing through the wire' },
      { time: 17, text: 'Lost inside the frequency of dreams' },
      { time: 23, text: 'A sanctuary in the midnight glow' },
    ]
  },
  {
    id: '3',
    title: 'Cyber Drift',
    artist: 'Aura Protocol',
    album: 'Synth City 2099',
    coverGradient: 'from-emerald-400 via-teal-600 to-slate-900',
    primaryColor: '#10B981',
    secondaryColor: '#0EA5E9',
    duration: 242,
    lyrics: [
      { time: 0, text: 'Engines humming in the quiet sector' },
      { time: 6, text: 'Sub-bass vibrations resonating clean' },
      { time: 12, text: 'Emerald trails chasing down the beat' },
      { time: 18, text: 'Edge lights reactive to the high-hat sweep' },
      { time: 25, text: 'Pure presence without distraction' },
    ]
  }
];

export const VISUAL_MODES: VisualModeInfo[] = [
  {
    name: 'Cinematic',
    tagline: 'Expansive atmospheric ambiance',
    description: 'Blends deep album-reactive lighting with subtle camera drift and soft ambient motion. Ideal for late-night desk listening.',
    visualCharacteristics: 'Soft atmospheric gradients, widescreen framing, smooth breathing glow.',
    bestFor: 'Ambient, lo-fi, film scores, long coding and work sessions.',
    accentColor: '#38BDF8'
  },
  {
    name: 'Lyrics Cinema',
    tagline: 'Synchronized lyrics in the spotlight',
    description: 'Strikes all extraneous UI and puts the poetry front and center. Synchronized line-by-line glow with smooth typographic tracking.',
    visualCharacteristics: 'Clean typography, active-line ambient glow, subtle background artwork blur.',
    bestFor: 'Sing-alongs, lyrical indie, rap, introspective listening.',
    accentColor: '#818CF8'
  },
  {
    name: 'Immersion',
    tagline: 'Deep crimson-and-black cinematic grade',
    description: 'Applies Luma\'s signature crimson treatment. Artwork luminance is extracted and graded across a moody dark palette.',
    visualCharacteristics: 'Monochrome luminance field, deep crimson multiplier, filmic density.',
    bestFor: 'Dark synth, cinematic drama, immersive desk setups.',
    accentColor: '#F43F5E'
  },
  {
    name: 'Flow',
    tagline: 'Liquid organic motion mapped to harmonics',
    description: 'Generative fluid fields that swirl and evolve with mid-frequency dynamics and harmonic transitions.',
    visualCharacteristics: 'Smooth velocity fields, harmonic-reactive wavelets, fluid motion.',
    bestFor: 'Electronic, house, neoclassical, dream pop.',
    accentColor: '#22D3EE'
  },
  {
    name: 'Spectrum',
    tagline: 'Precise real-time audio visualization',
    description: 'Studio-grade frequency distribution display that breaks down bass, mids, and treble with non-linear smoothing.',
    visualCharacteristics: 'Segmented audio bars, peak hold indicators, crisp geometric layout.',
    bestFor: 'Audiophiles, music production, complex electronic mixes.',
    accentColor: '#A78BFA'
  },
  {
    name: 'Inferno',
    tagline: 'High-energy kinetic reactivity',
    description: 'Punches hard on transient kick drums and snare strikes with dynamic edge expansion and warm embers.',
    visualCharacteristics: 'High transient kick response, warm flare bursts, dynamic edge bloom.',
    bestFor: 'Rock, metal, drum & bass, high-tempo gaming setups.',
    accentColor: '#FB923C'
  },
  {
    name: 'Midnight',
    tagline: 'Ultra-subtle, non-distracting night glow',
    description: 'Restrained, low-luminance lighting that protects night vision while keeping a serene desk atmosphere.',
    visualCharacteristics: 'Ultra-deep blacks, muted dark indigo and slate hues, minimal motion.',
    bestFor: 'Late-night gaming, sleeping, reading, deep focus.',
    accentColor: '#64748B'
  },
  {
    name: 'Afterparty',
    tagline: 'Vibrant chromatic energy and living color',
    description: 'Dynamic color transitions that shift with track progression, creating an upbeat, celebration-ready aesthetic.',
    visualCharacteristics: 'Multi-hue radial pulses, chromatic highlights, rhythmic energy.',
    bestFor: 'Pop, dance, party playlists, weekend vibes.',
    accentColor: '#EC4899'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'trial',
    name: '7-Day Free Trial',
    price: 'Free',
    period: '7 days full access',
    headline: 'Experience full music-reactive lighting, cinematic lyrics, and all 8 visual worlds on Windows with zero risk.',
    badge: 'Primary Offer • 7-Day Access',
    features: [
      'Full access to all 8 Visual Worlds',
      'Music-reactive 4-edge ambient screen glow',
      'Cinematic synchronized lyrics & local .lrc support',
      'Windows GSMTC & WASAPI audio loopback',
      'No credit card required to request trial access',
      'Full 7-day period begins only when your build is active',
      'Trial extended if access is delayed—you always get the full 7 days'
    ],
    highlighted: true,
    ctaText: 'Try Luma Free for 7 Days',
    delayNotice: "If your access isn't ready yet, don't worry. Your trial will be extended so you get the full 7 days to enjoy Luma once access is available."
  },
  {
    id: 'lifetime',
    name: 'Luma Lifetime',
    price: '$4.99',
    period: 'one-time purchase (planned launch price)',
    headline: 'Everything you need to transform your Windows desktop music experience.',
    features: [
      'Core Luma Windows companion experience',
      'Music-reactive screen-edge lighting (4 edges)',
      'Cinematic synchronized lyrics & local file (.lrc) support',
      'All 8 visual worlds (Cinematic, Immersion, Flow, etc.)',
      'Album-artwork palette extraction & custom splits',
      'Windows GSMTC support (Spotify, YouTube, browsers, players)',
      'Standard bug fixes and compatibility updates',
      'Install on up to 3 personal Windows devices',
      '100% private: local WASAPI audio loopback, zero telemetry',
      'No subscription or recurring charges ever'
    ],
    highlighted: false,
    ctaText: 'Choose Lifetime ($4.99)'
  },
  {
    id: 'exclusive',
    name: 'Luma Exclusive',
    price: '$9.99',
    period: 'one-time purchase (planned launch price)',
    headline: 'For power users and enthusiasts who want early builds and priority input.',
    badge: 'Enthusiast Tier',
    features: [
      'Everything included in Luma Lifetime',
      'Early access to new feature builds and experimental modes',
      'Priority consideration for feature requests and feedback',
      'Supporter badge in app about screen',
      'Direct input into upcoming visual presets and themes',
      'Standard bug fixes and compatibility updates',
      'Install on up to 3 personal Windows devices',
      '100% private: zero telemetry, on-device audio analysis',
      'One-time payment, no subscription'
    ],
    highlighted: false,
    ctaText: 'Choose Exclusive ($9.99)'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Licensing & Pricing',
    question: 'How does the 7-Day Free Trial work?',
    answer: 'The 7-day free trial gives you complete, unrestricted access to Project Luma on your Windows PC—including all 8 visual worlds, music-reactive 4-edge lighting, and synchronized lyrics. You can test Luma thoroughly with your existing music apps (Spotify, YouTube, local files) with zero upfront cost and no credit card required.'
  },
  {
    category: 'Licensing & Pricing',
    question: 'Does waiting for trial access eat into my 7 days?',
    answer: 'Not at all. If your access isn\'t ready yet, don\'t worry. Your trial will be extended so you get the full 7 days to enjoy Luma once access is available. The 7-day evaluation window begins strictly when your build is delivered and activated on your machine—never while you are waiting on the rollout list.'
  },
  {
    category: 'General',
    question: 'What is Luma?',
    answer: 'Project Luma is a Windows desktop music companion that transforms music playing on your PC into music-reactive lighting, cinematic synchronized lyrics, album artwork extraction, and immersive visual worlds. Your existing player (like Spotify or YouTube) continues handling audio playback, while Luma visualizes, controls, and illuminates your screen.'
  },
  {
    category: 'Compatibility',
    question: 'Which operating systems does Luma support?',
    answer: 'Luma is built specifically for Windows 10 and Windows 11 (64-bit). It integrates deeply with Windows Media Sessions (GSMTC) and the modern WebView2 runtime (pre-installed on Windows 10 and 11).'
  },
  {
    category: 'Compatibility',
    question: 'Does Luma work with music outside Spotify?',
    answer: 'Yes! Luma’s reactive edge lighting listens to the Windows system audio loopback (via WASAPI) and its playback controls connect to Windows Media Sessions. It works with Spotify desktop, YouTube in web browsers, local media players, and any Windows app that broadcasts audio.'
  },
  {
    category: 'Licensing & Pricing',
    question: 'Does Luma require a monthly subscription?',
    answer: 'No. Project Luma does not use recurring monthly subscriptions. You can start with our 7-Day Free Trial, and if you choose to keep Luma, permanent ownership is a simple one-time payment ($4.99 for Lifetime or $9.99 for Exclusive).'
  },
  {
    category: 'Licensing & Pricing',
    question: 'What is the difference between Lifetime and Exclusive?',
    answer: 'Luma Lifetime ($4.99) gives you the complete core Luma companion with all 8 visual worlds, reactive edge lighting, synchronized lyrics, and standard updates. Luma Exclusive ($9.99) includes everything in Lifetime plus early access to preview builds and priority consideration when community feature requests are reviewed. (Note: Exclusive does not guarantee custom development or guaranteed implementation of individual requests).'
  },
  {
    category: 'Licensing & Pricing',
    question: 'How will purchases and license activation work?',
    answer: 'When public checkout goes live via Lemon Squeezy, each purchase will deliver an instant license key valid for activation on up to 3 personal Windows devices, along with seamless device management. Currently during active beta testing, evaluation access and invitation codes (LUMA-TEST) are distributed via the 7-Day Free Trial request form.'
  },
  {
    category: 'Licensing & Pricing',
    question: 'What is Project Luma\'s refund policy?',
    answer: 'We offer a 48-hour refund request window from the time of purchase for licenses bought via Lemon Squeezy. If you experience persistent technical incompatibilities or unresolved activation issues on compatible Windows 10/11 hardware, email lumaplayer.support@gmail.com with your Lemon Squeezy order receipt within 48 hours. Approved refunds are processed via Lemon Squeezy back to your original payment method.'
  },
  {
    category: 'Privacy & Audio',
    question: 'Does Luma record my audio or track my listening habits?',
    answer: 'Never. Luma operates strictly locally on your PC. Its audio loopback analyzes audio frequencies in memory approximately 30 times a second to drive lighting values and immediately discards the data. No audio is ever recorded, stored on disk, or uploaded anywhere. There is zero telemetry and no tracking.'
  },
  {
    category: 'General',
    question: 'Where can customers get support?',
    answer: 'Customer support is available directly via email at lumaplayer.support@gmail.com and through our Support & Documentation Hub. We also provide built-in documentation and troubleshooting guides for Windows audio settings.'
  }
];
