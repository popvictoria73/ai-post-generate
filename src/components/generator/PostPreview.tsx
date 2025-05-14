import React from 'react';
import { PostVariant, SocialPlatform } from '../../types';
import { Heart, MessageCircle, Repeat, ArrowUpRightFromCircle, ThumbsUp, BookmarkPlus } from 'lucide-react';

interface PostPreviewProps {
  variant: PostVariant;
  platform: SocialPlatform;
  onSelect: () => void;
  isSelected?: boolean;
}

export function PostPreview({ variant, platform, onSelect, isSelected }: PostPreviewProps) {
  // Custom UI elements for different platforms
  const renderPlatformUI = () => {
    switch (platform) {
      case 'instagram':
        return (
          <div className="mt-3 flex justify-between text-gray-500">
            <div className="flex space-x-4">
              <button className="flex items-center gap-1">
                <Heart className="h-5 w-5" />
                <span className="text-xs">2.4k</span>
              </button>
              <button className="flex items-center gap-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">184</span>
              </button>
              <button className="flex items-center gap-1">
                <BookmarkPlus className="h-5 w-5" />
              </button>
            </div>
          </div>
        );
      
      case 'twitter':
        return (
          <div className="mt-3 flex justify-between text-gray-500">
            <div className="flex space-x-4">
              <button className="flex items-center gap-1">
                <Heart className="h-5 w-5" />
                <span className="text-xs">348</span>
              </button>
              <button className="flex items-center gap-1">
                <Repeat className="h-5 w-5" />
                <span className="text-xs">92</span>
              </button>
              <button className="flex items-center gap-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">57</span>
              </button>
            </div>
          </div>
        );
      
      case 'linkedin':
        return (
          <div className="mt-3 flex justify-between text-gray-500">
            <div className="flex space-x-4">
              <button className="flex items-center gap-1">
                <ThumbsUp className="h-5 w-5" />
                <span className="text-xs">428</span>
              </button>
              <button className="flex items-center gap-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">65</span>
              </button>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="mt-3 flex justify-between text-gray-500">
            <div className="flex space-x-4">
              <button className="flex items-center gap-1">
                <ThumbsUp className="h-5 w-5" />
                <span className="text-xs">245</span>
              </button>
              <button className="flex items-center gap-1">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs">48</span>
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`card overflow-hidden transition-all ${
        isSelected 
          ? 'ring-2 ring-primary-500 ring-offset-2 dark:ring-primary-400 dark:ring-offset-gray-900' 
          : 'hover:border-primary-500'
      }`}
    >
      <div className="relative">
        <img 
          src={variant.imageUrl} 
          alt="Post visual" 
          className="h-48 w-full object-cover" 
        />
        <div className="absolute right-2 top-2">
          <button
            onClick={onSelect}
            className={`btn rounded-full py-1 px-4 text-xs ${
              isSelected 
                ? 'btn-primary' 
                : 'bg-white/90 text-gray-700 hover:bg-white dark:bg-gray-900/90 dark:text-gray-200'
            }`}
          >
            {isSelected ? 'Selected' : 'Select'}
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <p className="text-sm text-gray-800 dark:text-gray-200">{variant.caption}</p>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {variant.hashtags.map((hashtag, index) => (
            <span 
              key={index}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              {hashtag}
            </span>
          ))}
        </div>
        
        {renderPlatformUI()}
      </div>
    </div>
  );
}