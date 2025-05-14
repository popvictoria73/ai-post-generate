import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Layout, MessageSquare, Share, Sparkles, Zap } from 'lucide-react';
import { PostGenerator } from '../components/generator/PostGenerator';

export function Home() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Generator Section */}
      <section className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Create <span className="text-primary-600 dark:text-primary-500">perfect</span> social posts in seconds
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Generate high-quality social media content for any platform with one click. Say goodbye to writer's block and hello to engagement.
            </p>
          </div>
          
          <PostGenerator />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Why content creators love PostChef
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our AI-powered platform understands what performs on each social network
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Layout className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Multi-Platform</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimized post formats for Instagram, LinkedIn, Twitter, Facebook, TikTok and YouTube.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Smart Captions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-generated text and hashtags tailored to your brand voice and post objectives.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">1-Click Generation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create multiple post variants with a single click for easy A/B testing.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Brand Consistency</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Save your brand's tone, colors, and style preferences for consistent content.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Share className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Easy Sharing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Export your posts or schedule them directly to your favorite platforms.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Visual Generation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Curated image selection based on your content for eye-catching posts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary-600 dark:bg-primary-900">
        <div className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to transform your social media?
            </h2>
            <p className="mb-8 text-primary-100">
              Create a free account today and get 10 free post generations to test our platform.
            </p>
            <Link to="/about" className="btn bg-white text-primary-700 hover:bg-primary-50 dark:bg-white dark:text-primary-800">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}