import React from 'react';
import { PostGenerator } from '../components/generator/PostGenerator';

export function Generator() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Generate Your Post
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Try it now! Enter your topic and customize settings to generate your perfect post.
          </p>
        </div>
        
        <PostGenerator />
      </div>
    </div>
  );
}