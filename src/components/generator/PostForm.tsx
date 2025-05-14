import React, { useState } from 'react';
import { BrandVoice, PostGoal, PostSettings, SocialPlatform } from '../../types';
import { PlatformSelector } from './PlatformSelector';
import { Sparkles } from 'lucide-react';

interface PostFormProps {
  onGenerate: (settings: PostSettings) => void;
  isGenerating: boolean;
}

export function PostForm({ onGenerate, isGenerating }: PostFormProps) {
  const [settings, setSettings] = useState<PostSettings>({
    platform: 'instagram',
    brandVoice: 'professional',
    goal: 'engagement',
    keywords: '',
  });

  const handlePlatformChange = (platform: SocialPlatform) => {
    setSettings({ ...settings, platform });
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, brandVoice: e.target.value as BrandVoice });
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, goal: e.target.value as PostGoal });
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, keywords: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(settings);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="space-y-4">
        <PlatformSelector 
          selectedPlatform={settings.platform} 
          onChange={handlePlatformChange} 
        />
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="brandVoice" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Brand Voice
            </label>
            <select
              id="brandVoice"
              value={settings.brandVoice}
              onChange={handleVoiceChange}
              className="select w-full"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="funny">Funny</option>
              <option value="inspirational">Inspirational</option>
              <option value="educational">Educational</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="postGoal" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Post Goal
            </label>
            <select
              id="postGoal"
              value={settings.goal}
              onChange={handleGoalChange}
              className="select w-full"
            >
              <option value="engagement">Engagement</option>
              <option value="sales">Sales</option>
              <option value="awareness">Brand Awareness</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="keywords" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Topic or Keywords
          </label>
          <input
            id="keywords"
            type="text"
            value={settings.keywords}
            onChange={handleKeywordsChange}
            placeholder="e.g., new product launch, remote work tips, summer collection"
            className="input w-full"
            required
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={isGenerating || !settings.keywords.trim()}
        className="btn btn-primary w-full"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        {isGenerating ? 'Generating...' : 'Generate Post'}
      </button>
    </form>
  );
}