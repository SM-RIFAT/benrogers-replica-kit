
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:rifat@example.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by S M Golam Rifat</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 S M Golam Rifat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
