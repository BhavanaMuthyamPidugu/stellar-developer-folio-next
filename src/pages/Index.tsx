
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Internships from '@/components/Internships';
import Achievements from '@/components/Achievements';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <About />
      <Internships />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
