import React from 'react';
import { SocialPlatform } from '../../types';
import { Instagram, Linkedin, Twitter, Facebook, Video, Youtube } from 'lucide-react';

interface PlatformSelectorProps {
  selectedPlatform: SocialPlatform;
  onChange: (platform: SocialPlatform) => void;
}

interface PlatformOption {
  value: SocialPlatform;
  label: string;
  icon: React.ReactNode;
}

export function PlatformSelector({ selectedPlatform, onChange }: PlatformSelectorProps) {
  const platforms: PlatformOption[] = [
    { 
      value: 'instagram', 
      label: 'Instagram', 
      icon: <Instagram className="h-5 w-5" /> 
    },
    { 
      value: 'linkedin', 
      label: 'LinkedIn', 
      icon: <Linkedin className="h-5 w-5" /> 
    },
    { 
      value: 'twitter', 
      label: 'Twitter/X', 
      icon: <Twitter className="h-5 w-5" /> 
    },
    { 
      value: 'facebook', 
      label: 'Facebook', 
      icon: <Facebook className="h-5 w-5" /> 
    },
    { 
      value: 'tiktok', 
      label: 'TikTok', 
      icon: <Video className="h-5 w-5" /> 
    },
    { 
      value: 'youtube', 
      label: 'YouTube', 
      icon: <Youtube className="h-5 w-5" /> 
    },
  ];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Select Platform
      </label>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        {platforms.map((platform) => (
          <button
            key={platform.value}
            type="button"
            onClick={() => onChange(platform.value)}
            className={`flex items-center justify-center gap-2 rounded-lg border p-3 transition-all ${
              selectedPlatform === platform.value
                ? 'border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-400 dark:bg-gray-800 dark:text-primary-400'
                : 'border-gray-200 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'
            }`}
          >
            {platform.icon}
            <span className="text-sm font-medium">{platform.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}