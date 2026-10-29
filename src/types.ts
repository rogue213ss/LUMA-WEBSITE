export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverGradient: string;
  primaryColor: string;
  secondaryColor: string;
  duration: number; // in seconds
  lyrics: { time: number; text: string }[];
}

export type VisualMode = 
  | 'Cinematic'
  | 'Lyrics Cinema'
  | 'Flow'
  | 'Inferno'
  | 'Spectrum'
  | 'Midnight'
  | 'Immersion'
  | 'Afterparty';

export interface VisualModeInfo {
  name: VisualMode;
  tagline: string;
  description: string;
  visualCharacteristics: string;
  bestFor: string;
  accentColor: string;
}

export interface PricingTier {
  id: 'lifetime' | 'exclusive';
  name: string;
  price: string;
  period: string;
  headline: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Compatibility' | 'Licensing & Pricing' | 'Privacy & Audio';
}
