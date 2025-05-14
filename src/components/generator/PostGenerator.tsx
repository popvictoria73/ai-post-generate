import React, { useState } from 'react';
import { PostForm } from './PostForm';
import { PostPreview } from './PostPreview';
import { PostSettings, PostVariant } from '../../types';
import { generatePostVariants } from '../../utils/mockData';
import { ClipboardCopy, Download, Share2 } from 'lucide-react';
import toast from 'react-hot-toast';

export function PostGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [postVariants, setPostVariants] = useState<PostVariant[]>([]);
  const [selectedPost, setSelectedPost] = useState<PostVariant | null>(null);
  const [currentPlatform, setCurrentPlatform] = useState<PostSettings['platform']>('instagram');

  const handleGenerate = (settings: PostSettings) => {
    setIsGenerating(true);
    setCurrentPlatform(settings.platform);
    setSelectedPost(null);
    
    // Simulate API call delay
    setTimeout(() => {
      const variants = generatePostVariants(
        settings.platform,
        settings.brandVoice,
        settings.keywords
      );
      
      setPostVariants(variants);
      setIsGenerating(false);
    }, 1500);
  };

  const handleSelectPost = (post: PostVariant) => {
    setSelectedPost(post);
  };

  const handleCopyToClipboard = () => {
    if (!selectedPost) return;
    
    const textToCopy = `${selectedPost.caption}\n\n${selectedPost.hashtags.join(' ')}`;
    navigator.clipboard.writeText(textToCopy);
    
    toast.success('Post copied to clipboard!', {
      duration: 2000,
      style: {
        background: '#10B981',
        color: '#fff',
      },
    });
  };

  const handleSaveImage = async () => {
    if (!selectedPost) return;

    try {
      const response = await fetch(selectedPost.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `post-image-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Image downloaded successfully!', {
        duration: 2000,
        style: {
          background: '#10B981',
          color: '#fff',
        },
      });
    } catch (error) {
      toast.error('Failed to download image', {
        duration: 2000,
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
    }
  };

  const handleShare = async () => {
    if (!selectedPost) return;

    const shareData = {
      title: 'Check out my social media post!',
      text: `${selectedPost.caption}\n\n${selectedPost.hashtags.join(' ')}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast.success('Share link created, Use it to Share!', {
          duration: 2000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      if (error instanceof Error && error.message === 'Web Share API not supported') {
        handleCopyToClipboard();
        toast.success('Content copied to clipboard for sharing!', {
          duration: 2000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
      } else {
        toast.error('Failed to share content', {
          duration: 2000,
          style: {
            background: '#EF4444',
            color: '#fff',
          },
        });
      }
    }
  };

  return (
    <div className="space-y-8">
      <PostForm 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating} 
      />
      
      {isGenerating && (
        <div className="flex justify-center py-12">
          <div className="animate-pulse-slow flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary-500/20 p-3">
              <div className="h-full w-full rounded-full bg-primary-500/40"></div>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Generating your posts...
            </p>
          </div>
        </div>
      )}
      
      {!isGenerating && postVariants.length > 0 && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Your Post Variants</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Select your favorite</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {postVariants.map((variant) => (
              <PostPreview
                key={variant.id}
                variant={variant}
                platform={currentPlatform}
                isSelected={selectedPost?.id === variant.id}
                onSelect={() => handleSelectPost(variant)}
              />
            ))}
          </div>
        </div>
      )}
      
      {selectedPost && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-900/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-medium text-green-800 dark:text-green-400">Post Selected!</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Ready to share or schedule.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={handleCopyToClipboard}
                className="btn btn-outline inline-flex items-center gap-1 text-xs"
              >
                <ClipboardCopy className="h-4 w-4" />
                <span>Copy</span>
              </button>
              
              <button 
                onClick={handleSaveImage}
                className="btn btn-outline inline-flex items-center gap-1 text-xs"
              >
                <Download className="h-4 w-4" />
                <span>Save Image</span>
              </button>
              
              <button 
                onClick={handleShare}
                className="btn btn-primary inline-flex items-center gap-1 text-xs"
              >
                <Share2 className="h-4 w-4" />
                <span>Share Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}