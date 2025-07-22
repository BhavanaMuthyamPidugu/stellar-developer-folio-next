import React from 'react';
// import BhavanaIcon from '../../public/currency-bitcoin.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* <h1 className="text-lg font-bold text-purple-700">{BhavanaIcon}Bhavana</h1> */}

        <h1 className="text-lg font-bold text-purple-700">Bhavana</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#internships" className="hover:text-purple-600">Internships</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
          
          <li><a href="#achievements" className="hover:text-purple-600">Achievements</a></li>
          <li><a href="#education" className="hover:text-purple-600">Education</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
