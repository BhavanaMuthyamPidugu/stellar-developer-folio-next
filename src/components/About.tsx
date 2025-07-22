
import React from 'react';
import { Card } from '@/components/ui/card';
import BhavanaImage from './Bhavana_Developer_Kruti-AI-generated-image.jpg';

const About = () => {
  return (
    <section id="about" className="py-2 px-1 bg-white relative overflow-hidden">
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

        <div className="grid md:grid-cols-2 gap-1 items-center">
          <div className="order-2 md:order-1">
            <Card className="p-4 bg-white/70 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-2">
              I’m Bhavana Muthyam from Tanuku, a final-year B.Tech student specializing in Computer Science and Engineering at SITE, Tadepalligudem.
              Currently, I'm working on publishing a research paper on Quantum Machine Learning (QML) for Intrusion Detection Systems, integrating cutting-edge technologies to strengthen modern cybersecurity solutions.
              Professionally, I’ve worked as an Enterprise Application Developer Intern(Remote) at Koyya Enterprises Pvt. Ltd., Bangalore, and as a Transaction Chatbot Developer at BagNDash, USA (remote).
              I’ve developed several impactful projects, including:
              ExamEval.ai – an LLM-based answer script evaluation platform.
              Voice-Enabled Interaction Extension – a speech-powered module enhancing website accessibility.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">                
              I'm passionate about LLM-based full-stack development and continuously explore emerging tech stacks.
              Beyond academics, I’ve earned notable achievements:
              Secured 2nd Prize at SAHE – AI Innovations Unlimited Hackathon (National Level).
              Received Women Empowerment Token Recognition at Prayatna 2.0, ACM Chapter (AITR, Indore).
              My strengths include a strong work ethic, commitment, and grounded confidence. I enjoy practicing yoga, dancing, reading self-help books, and engaging in artistic work.
              My goal is to become a financially independent, ambitious woman who uplifts her family, supports her nation, and drives technological change.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
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
            <div className="relative shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
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
