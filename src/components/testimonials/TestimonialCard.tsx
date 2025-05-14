import React from 'react';

interface TestimonialCardProps {
  name: string;
  company: string;
  image: string;
  quote: string;
}

export function TestimonialCard({ name, company, image, quote }: TestimonialCardProps) {
  return (
    <div className="card flex h-full flex-col p-6 transition-all hover:shadow-md">
      <div className="mb-6 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
      </div>
      
      <blockquote className="mb-4 flex-1 text-gray-700 dark:text-gray-300">
        <p>"{quote}"</p>
      </blockquote>
      
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="h-5 w-5 text-warning-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}