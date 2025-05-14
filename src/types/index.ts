export type SocialPlatform = 'instagram' | 'linkedin' | 'twitter' | 'facebook' | 'tiktok' | 'youtube';

export type BrandVoice = 'professional' | 'casual' | 'funny' | 'inspirational' | 'educational';

export type PostGoal = 'engagement' | 'sales' | 'awareness';

export interface PostSettings {
  platform: SocialPlatform;
  brandVoice: BrandVoice;
  goal: PostGoal;
  keywords: string;
}

export interface PostVariant {
  id: string;
  caption: string;
  hashtags: string[];
  imageUrl: string;
}

export interface BrandProfile {
  name: string;
  colors: {
    primary: string;
    secondary: string;
  };
  tone: BrandVoice;
  logo?: string;
}

export interface ThemeConfig {
  name: string;
  value: 'light' | 'dark';
}