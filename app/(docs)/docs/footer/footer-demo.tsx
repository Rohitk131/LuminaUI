import React from "react";
import { Twitter, Facebook, Instagram, Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col h-2/3 text-gray-300 overflow-hidden relative">
      {/* Main Content (Placeholder for Page Content) */}
     

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-900 text-gray-300 py-16">
        
        {/* Radial Glow */}
        <div
          className="absolute inset-x-0 bottom-0 h-[950px] w-[1450px] mx-auto rounded-full bg-gradient-to-t from-blue-600/60 via-blue-400/40 to-transparent blur-3xl"
          style={{ transform: "translateY(50%)" }}
          aria-hidden="true"
        ></div>
   
        <div className="mb-8 h-[1px] w-screen mx-auto rounded-full bg-gradient-to-r from-blue-400 via-sky-500 to-blue-600" />
        <div className="container mx-auto px-6 lg:px-16 relative">
          {/* Upper Section */}
          <div className="flex flex-wrap justify-between gap-12">
            {/* Company Info */}
            <div className="w-full lg:w-1/4">
              <div className="flex items-center space-x-3 mb-6">
                <svg id="logo-86" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="ccustom" fillRule="evenodd" clipRule="evenodd" d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z" fill="#007DFC"></path><path className="ccustom" fillRule="evenodd" clipRule="evenodd" d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z" fill="#007DFC"></path></svg>
                <span className="text-white text-2xl font-semibold">
                  FinanceFlow
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering your financial journey with intelligent tools and insights. 
                Navigate your finances with confidence and ease.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="w-full lg:w-2/4 flex flex-wrap justify-between gap-8">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Explore</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Blog Articles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Financial Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                  Get Started
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Create Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Log In
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full lg:w-1/4 flex flex-col space-y-6">
              <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <Youtube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 border-t border-gray-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-white font-semibold text-xl mb-3">
                  Stay Informed with FinanceFlow
                </h3>
                <p className="text-gray-400 text-sm max-w-md">
                  Get weekly financial tips, market insights, and exclusive offers. 
                  Join our community of savvy investors and financial enthusiasts.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto px-4 py-2 pl-10 rounded-md text-gray-300 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Email for newsletter"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors duration-200 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              By subscribing, you agree to receive FinanceFlow's newsletter and accept our{" "}
              <a href="#" className="text-gray-400 underline hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              . You can unsubscribe at any time.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FinanceFlow. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

