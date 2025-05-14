import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Hero Section */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have questions about PostChef? Want to share feedback or request a feature? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="container">
        <div className="grid gap-12 rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Send us a message
            </h2>
            
            {isSubmitted ? (
              <div className="rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
                <h3 className="mb-2 text-lg font-medium text-green-800 dark:text-green-400">
                  Thank you for your message!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  We've received your inquiry and will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="select w-full"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="input w-full"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:support@PostChef.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                        support@PostChef.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+12345678901" className="hover:text-primary-600 dark:hover:text-primary-400">
                        +1 (234) 567-8901
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Innovation Way<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Support Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9am - 5pm PST<br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg bg-primary-50 p-6 dark:bg-primary-900/20">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                Looking for help?
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Check out our comprehensive knowledge base for tutorials, guides, and frequently asked questions.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Visit help center
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-12 text-gray-600 dark:text-gray-400">
              Quick answers to common questions about our platform.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-4xl gap-6">
            <div className="card p-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                How does the AI create content specific to my brand?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You can create your brand profile with specific tones, colors, and preferences. Our AI learns from your selections and edits over time to better match your unique style.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                Can I schedule posts directly from the platform?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently, you can export your generated posts to scheduling tools like Buffer, Hootsuite, and Later. Direct scheduling is coming in our next major update.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                Is there a limit to how many posts I can generate?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Free accounts can generate up to 10 posts per month. Our paid plans offer 100, 500, or unlimited generations depending on your subscription level.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                Do I own the content created through PostChef?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, all content generated through our platform belongs entirely to you and can be used as you wish for your social media and marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}