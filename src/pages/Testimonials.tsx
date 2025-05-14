import React from 'react';
import { testimonials } from '../utils/mockData';
import { TestimonialCard } from '../components/testimonials/TestimonialCard';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export function Testimonials() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            What Our Users Say
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Don't just take our word for it. See how PostChef is transforming social media workflows for creators and businesses of all sizes.
          </p>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              company={testimonial.company}
              image={testimonial.image}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              PostChef by the Numbers
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">10,000+</p>
              <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">Active Users</p>
            </div>
            
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">1.2M+</p>
              <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">Posts Generated</p>
            </div>
            
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">35%</p>
              <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">Avg. Engagement Increase</p>
            </div>
            
            <div className="card p-6 text-center">
              <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">6hrs+</p>
              <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">Weekly Time Saved</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Preview */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Featured Success Stories
          </h2>
          <p className="mb-12 text-gray-600 dark:text-gray-400">
            Learn how these organizations transformed their social media strategy using PostChef.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Marketing agency team"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Digital First Agency</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                How a marketing agency scaled content creation for 15+ clients without adding headcount.
              </p>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg"
              alt="E-commerce product"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">SustainableShop</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                This eco-friendly store increased social traffic by 78% with platform-specific content.
              </p>
              {/* <p className="font-medium text-primary-600 dark:text-primary-400">
                Read case study →
              </p> */}
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <img
              src="https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg"
              alt="Fitness influencer"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">FitnessPro Influencer</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                How this fitness creator doubled their content output while maintaining authentic voice.
              </p>
              {/* <p className="font-medium text-primary-600 dark:text-primary-400">
                Read case study →
              </p> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Submit Testimonial */}
      <section className="bg-primary-600 dark:bg-primary-900">
        <div className="container py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Share Your Success Story
            </h2>
            <p className="mb-8 text-primary-100">
              Are you a PostChef user with great results? We'd love to feature your success story.
            </p>
            <Link to="/contact" className="btn inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 dark:bg-white dark:text-primary-800">
              <MessageSquare className="h-4 w-4" />
              Submit Your Testimonial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}