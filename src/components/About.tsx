
import React from 'react';
import { Card } from '@/components/ui/card';
import BhavanaImage from './Bhavana_Developer_Kruti-AI-generated-image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Vertical Line Background */}
      <div className="absolute inset-0 bg-[url('/pattern-stripes-diagonal.svg')] opacity-5 bg-repeat z-0"></div>
      {/* <div className="absolute inset-0 bg-[url('/gear-spinner.svg')] opacity-5 bg-repeat z-0"></div> */}
      {/* <div className="absolute inset-0 bg-[url('/infinite-spinner.svg')] opacity-5 bg-repeat z-0"></div> */}

      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                My journey in software development began with a curiosity about how things work behind the scenes, 
                and has evolved into a deep love for creating digital experiences that make a difference.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently pursuing my degree in Computer Science, I've been actively building projects 
                that showcase my skills in both frontend and backend development. I believe in writing 
                clean, efficient code and staying up-to-date with the latest industry trends.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Who I am ?</h3>
                <p className="text-gray-700">
                  {/* <strong>Bachelor's in Computer Science</strong><br /> */}
                  {/* Focused on software engineering principles, data structures, and modern web development practices.
                  Always eager to learn new technologies and apply them to real-world problems. */}
                  LLM Full-stack Dev | Ambitious girl | Continuous Learner | Techie | Studious | Public Speaker | Fitness Freak 
                </p>
              </div>
            </Card>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                // src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&crop=face"
                src={BhavanaImage}
                alt="About me"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* Vertical Line Background */}
      {/* <div className="absolute inset-0 bg-[url('/pattern-stripes-diagonal.svg')] opacity-5 bg-repeat z-0"></div> */}

    </section>
  );
};

export default About;
