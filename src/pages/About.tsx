import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Clock, LightbulbIcon, Palette, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            About PostChef
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We're building the future of social media content creation. Our AI-powered platform helps creators, marketers, and businesses generate high-quality social posts in seconds.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/7709086/pexels-photo-7709086.jpeg"
                alt="Team working together"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                Our Story
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Founded in 2024, PostChef was created to simplify and accelerate social media content creation for everyone.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our team of marketing professionals and AI specialists set out to empower users to craft amazing posts effortlessly, without requiring advanced skills.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, we support thousands of users in saving time and enhancing their social media presence with our intelligent content creation tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Our Mission & Values
          </h2>
          <p className="mb-12 text-xl text-gray-600 dark:text-gray-400">
            We believe in empowering creators with tools that amplify their voice and save precious time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Time Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're obsessed with saving you time. Our tools turn hours of work into minutes, without sacrificing quality.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <LightbulbIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Creative Assistance</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We don't replace human creativity—we enhance it by eliminating blocks and inspiring new ideas.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Brand Authenticity</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We help you maintain a consistent and authentic brand voice across all platforms and content.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Accessibility</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Great content shouldn't be limited to those with big budgets. We make professional tools accessible to all.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Data-Driven</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our recommendations are based on real engagement data and platform-specific best practices.
            </p>
          </div>

          <div className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Continuous Innovation</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're constantly improving our AI models and adding features based on user feedback.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              How PostChef Works
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-400">
              Our advanced AI combines platform knowledge, trending content analysis, and your specific brand voice to create perfect posts.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-primary-200 dark:bg-primary-800/50 md:block"></div>

              <div className="space-y-12">
                <div className="relative md:ml-[50%] md:pl-8">
                  <div className="absolute top-0 left-0 -ml-3.5 h-7 w-7 rounded-full border-4 border-white bg-primary-500 dark:border-gray-900 md:left-[-35px]"></div>
                  <div className="card p-6">
                    <h3 className="mb-2 text-xl font-semibold">1. Input Your Topic</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Simply enter what you want to post about—a new product, industry news, event announcement, or any topic relevant to your audience.
                    </p>
                  </div>
                </div>

                <div className="relative md:mr-[50%] md:pr-8">
                  <div className="absolute top-0 left-0 -ml-3.5 h-7 w-7 rounded-full border-4 border-white bg-primary-500 dark:border-gray-900 md:left-[calc(100%+12px)]"></div>
                  <div className="card p-6">
                    <h3 className="mb-2 text-xl font-semibold">2. Customize Settings</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Select your target platform, preferred brand voice, and campaign goal to tailor the output to your specific needs.
                    </p>
                  </div>
                </div>

                <div className="relative md:ml-[50%] md:pl-8">
                  <div className="absolute top-0 left-0 -ml-3.5 h-7 w-7 rounded-full border-4 border-white bg-primary-500 dark:border-gray-900 md:left-[-35px]"></div>
                  <div className="card p-6">
                    <h3 className="mb-2 text-xl font-semibold">3. Generate & Choose</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      With one click, our AI produces multiple post variations complete with caption, hashtags, and suggested visuals for you to choose from.
                    </p>
                  </div>
                </div>

                <div className="relative md:mr-[50%] md:pr-8">
                  <div className="absolute top-0 left-0 -ml-3.5 h-7 w-7 rounded-full border-4 border-white bg-primary-500 dark:border-gray-900 md:left-[calc(100%+12px)]"></div>
                  <div className="card p-6">
                    <h3 className="mb-2 text-xl font-semibold">4. Publish & Share</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Once you've selected your favorite post variant, export it directly to your social media scheduler or copy it for immediate use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <div className="rounded-2xl bg-primary-50 p-8 dark:bg-primary-900/20 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Ready to revolutionize your social media?
            </h2>
            <p className="mb-6 text-xl text-gray-700 dark:text-gray-300">
              Join thousands of creators who are saving time and boosting engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#generator" className="btn btn-primary">
                Try it now
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}