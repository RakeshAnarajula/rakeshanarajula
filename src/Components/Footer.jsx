import React from 'react';
import {Instagram, GithubIcon, Twitter,Linkedin,} from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="border- border-gray-900 pt-6">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-gray-700 p-2 rounded-full shadow-lg hover:shadow-xl">
              <GithubIcon className="w-5 h-5 text-white" />
            </div>
          </a>
          <a href="https://linkedin.com/uas/login" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-blue-700 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
          </a>
          <a href="https://www.instagram.com/accounts/login/" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-pink-600 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-black p-2 rounded-full shadow-lg hover:shadow-xl">
              <Twitter className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>
        <div className="text-center mb-2">
          <p className="text-white">© 2024 Rakesh Anarajula. All Rights Reserved.</p>
        </div>
          <div className="flex justify-center space-x-3 text-sm text-white">
            <a href="/privacy" className="hover:text-blue-300 transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-blue-300 transition-colors duration-200">Terms of Service</a>
            <span>|</span>
            <a href="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
