import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Zap } from 'lucide-react';

export function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleOpenModal = (content: string) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary-600 dark:text-primary-400">
              <Zap className="h-6 w-6" />
              <span>PostChef</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Create perfect social media posts with just one click. Powered by AI, optimized for engagement.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">About</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">Testimonials</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <button
                  onClick={() => handleOpenModal('By using our service, you agree to generate content responsibly and not misuse the platform. We provide content "as-is" and are not liable for how it is used. We reserve the right to modify or suspend the service at any time.')}
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenModal('We collect minimal usage data to improve your experience. Your data is never sold and is only shared with trusted partners for analytics or service delivery.')}
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenModal('We use cookies to enhance site performance and track usage. Some cookies are essential, while others help us understand how the site is used. You can manage your cookie preferences in your browser settings')}
                  className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PostChef. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Details</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{modalContent}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}