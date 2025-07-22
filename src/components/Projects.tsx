
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
// import voiceproImg from '@/components/Voice_Extension_Website_Img.jpeg';
// import examevalproImg from '@/components/ExamEvalAI_Img.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ExamEval.ai",
      description: "AI-Powered Handwritten Scripts Evaluation • Developed an AI-driven system to evaluate hand-written answer scripts using OCR and MachineLearning algorithm suiting and LLMs integration like OpenAI and Google-VisionAPI, improving accuracy and reducing manual effort and error",//•
      // July2024–Feb2025,
      // image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      image: "examevalproImg",
      techStack: ["MERN Stack", "Prompt Engineering", "LLMs(OpenAI,Gemini)", "Python", "API Integration"],
      githubUrl: "https://github.com/Exam-Eval",
      liveUrl: "https://demo.com"
      // ExanEval.ai
    //   AI-PoweredHandwrittenScriptsEvaluation
    //   July2024–Feb2025
    //   •DevelopedanAI-drivensystemtoevaluatehand-writtenanswerscriptsusing
    //   OCRandMachineLearningalgorithmsuitingandLLMsintegrationlikeOpe
    //  nAIandGoogle-VisionAPI, improvingaccuracyandreducingmanualeffort
    //   anderror.
    //   •Designedascalableprocessingpipelineandanintuitiveuserinterfaceforre
    //  sultvisualizationandfeedback.
    },
    {
      id: 2,
      title: "Voice-Based Interaction Website Extension",
      description: "Hands-Free Interaction for User with voice commands • Built a hands-free web navigation extension using speech recognition, enhancing hands-free accessibility and user experience.",
      // image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      image: "voiceproImg",
      techStack: ["Python", "Node", "API Integration", "Browser Interactions","Browser Extensions", "WhisperLLM"],
      githubUrl: "https://github.com/BhavanaMuthyamPidugu/Voice-Activated_WebExtension",
      liveUrl: "https://demo.com"
    },
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "A responsive weather application with location-based forecasts, interactive charts, and weather alerts using OpenWeatherMap API.",
    //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
    //   techStack: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    //   githubUrl: "https://github.com",
    //   liveUrl: "https://demo.com"
    // }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white/30 relative overflow-hidden">
      {/* Vertical Line Background */}
      {/* <div className="absolute inset-0 bg-[url('/pattern-stripes-diagonal.svg')] opacity-5 bg-repeat z-0"></div> */}
      {/* <div className="absolute inset-0 bg-[url('/gear-spinner.svg')] opacity-5 bg-repeat z-0"></div> */}
      {/* <div className="absolute inset-0 bg-[url('/infinite-spinner_slowv.svg')] opacity-5 bg-repeat z-0"></div> */}

      {/* <div className="relative z-10"> */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      {/* </div> */}
      {/* Decorative background orbs */}
      <div className="absolute -top-8 -left-10 w-36 h-36 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-600 opacity-25 rounded-full blur-3xl animate-spin-slow"></div>

    </section>
    // </motion.section>
  );
};

export default Projects;
