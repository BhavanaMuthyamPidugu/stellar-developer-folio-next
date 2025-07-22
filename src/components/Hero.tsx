
import React from 'react';
import { Github, Linkedin, Twitter, Download, ChevronDown, CodeXml, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { CodeXml } from 'lucide-react';
import myimage from './bhavana-image.jpg';
import ImgDown from '/public/bouncing-squares.svg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <img
              // src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
              // src="https://unsplash.com/photos/person-using-macbook-pro-on-pink-and-white-floral-textile-73REk-BB7-Y"

              src={myimage}

              // src="https://drive.google.com/file/d/1iKsoCNpXfqtGemsMS7nB6Ns-6w2SIPA5/view?usp=sharing"
              // src="https://drive.google.com/uc?export=view&id=1iKsoCNpXfqtGemsMS7nB6Ns-6w2SIPA5"
              // src="https://www.google.com/imgres?q=software%20engineer%20portfolio%20images%20for%20engineering%20girl%20students&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fprogramming-software-website-application-development-260nw-1906683778.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgirl-web-developer&docid=Xk82Tw_Sb4wJXM&tbnid=RxmGiGLsWKb62M&vet=12ahUKEwjY-ZnQs7qOAxW9UGcHHVoNFbAQM3oECBgQAA..i&w=310&h=280&hcb=2&ved=2ahUKEwjY-ZnQs7qOAxW9UGcHHVoNFbAQM3oECBgQAA"

              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20"></div>
          </div>

          {/* <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        // onClick={() => scrollToSection('about')}
      >
        <ImgDown/>
      </div> */}
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Bhavana Muthyam Pidugu
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
            Aspiring LLM Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and bringing ideas to life through code. 
            Always eager to learn and tackle new challenges in the ever-evolving tech landscape.
          </p>
          {/* <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Eager to bring my strong foundation in programming and technical skills to the job role, aiming to enhance my professional and technical proficiency.
          </p> */}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
        <a
            // href='https://drive.google.com/file/d/1EmiMjUZS2XZVGQ21hS85NmE7zzF6wN94/view?usp=sharing'
            href='https://drive.google.com/file/d/15xED_FTzQhCntPwyJtEuvNG6JaLRnYBX/view?usp=sharing'
            target='_blank'>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          </a>
          
          <div className="flex space-x-4">
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
              href="https://leetcode.com/u/BhavanaMuthyamPidugu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
            >
              <CodeXml className="w-6 h-6 text-blue-400" />
            </a>
            <a
              href="https://www.codechef.com/users/bhavanamuthyam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <ChefHat className="w-6 h-6 text-gray-800" />
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>

      {/* Decorative background orbs */}
      <div className="absolute -top-8 -left-10 w-36 h-36 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-600 opacity-25 rounded-full blur-3xl animate-spin-slow"></div>

    </section>
  );
};

export default Hero;
