
import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bhavana Muthyam Pidugu
            </h3>
            {/* <p className="text-gray-400 leading-relaxed">
            • Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code.
            </p> */}
            <p>
            • Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
            <p>• Also efficient in AI&ML Technologies and LLMs Integration and Prompt Engineering.
              Now, I'm working on a Research Paper Publication which including Cutting-edge Tech stack like AI&ML, Cyber Security and Quantun Computing.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a> */}
              <a
                            href="https://linkedin.com/in/bhavanamuthyam-27nbk08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
                          >
                            <Linkedin className="w-6 h-6 text-blue-600" />
                          </a>
                          <a
                            href="https://github.com/BhavanaMuthyamPidugu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
                          >
                            <Github className="w-6 h-6 text-gray-800" />
                          </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                // className="p-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition-colors"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"

              >
                <Twitter className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            {/* Made with <Heart className="w-4 h-4 mx-2 text-red-500" />  */}
            By Bhavana Muthyam Pidugu © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
