import React from "react";
import awardAnimation from "@/components/award_winning_gif1.gif"; // Your GIF path

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 bg-gradient-to-br from-purple-100 via-white to-blue-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Award Animation */}
        {/* <div className="flex justify-center items-center">
          <img
            src={awardAnimation}
            alt="Award Animation"
            className="w-full max-w-md rounded-2xl shadow-2xl opacity-95 animate-fade-in"
          />
        </div> */}

        {/* Right - Achievements Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-typing whitespace-nowrap overflow-hidden border-r-4 border-purple-500 pr-2">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 mx-auto md:mx-0"></div>
          <p className="text-lg text-gray-600 mb-8">
            These moments reflect how my hard work and creativity paid off, boosting my confidence and inspiring me to keep learning.
          </p>

          <ul className="space-y-6">
            <li className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">🏆 2nd Prize - AI National Level 24Hr Hackathon</h3>
              <p className="text-gray-700 mt-2">
                Achieved 2nd place among 150 teams under the theme "AI Innovations Unlimited", hosted by Siddhartha College of Engineering, Vijayawada.
              </p>
            </li>

            <li className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">🌟 4th Prize - Prayatna 2.0 ACM 36Hr Hackathon</h3>
              <p className="text-gray-700 mt-2">
                Won 4th place and Women Empowerment Token in AI & ML theme out of 100+ teams at Acropolis Institute of Technology & Research, Indore.
              </p>
            </li>

            <li className="bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-700">🎤 Host - IEEE Conference 2024</h3>
              <p className="text-gray-700 mt-2">
                Successfully hosted IEEE Conference at SITE-Tadepalligudem, showcasing public speaking and event presentation skills.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={awardAnimation}
            alt="Award Animation"
            // className="w-full max-w-md rounded-2xl shadow-2xl opacity-95 animate-fade-in"
            className="w-full max-w-md rounded-2xl opacity-95 animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;


















// import React from "react";
// // import Lottie from "lottie-react";
// import awardAnimation from "@/components/award_winning_gif1.gif"; // Replace with your own Lottie JSON path

// const Achievements = () =>{
//     return(
//         <section id="achievements" className="py-16 px-4 bg-white/30 relative overflow-hidden">
//             {/* <div className="absolute inset-0 bg-[url('/badge-12.svg')] opacity-10 z-0"></div> */}
//             {/* <div className="relative z-10"> */}
//                 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-10">

//                     {/* Left Side - Text Content */}
//                     <div className="md:w-1/2 mb-10 md:mb-0">
//                         <div className="text-center md:text-left mb-10">
//                             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-typing whitespace-nowrap overflow-hidden border-r-4 border-purple-500 pr-2">
//                                 Achievements
//                             </h2>
//                             <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
//                             <p className="text-xl text-gray-600 max-w-2xl">
//                                 {/* These are things where my hard work and talent has been paid off that made me boost more confidence and eagerness to learn more. */}
//                                 These are things where my hard work and talent has been paid off that made me to boost more confidence and chance to learn more.
//                             </p>
//                         </div>
//                         <ul className="space-y-4">
//                             <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400">
//                                 <h3 className="text-xl font-semibold text-gray-800">2nd Prize-AI National Level 24Hr Hackathon</h3>
//                                 <p className="text-gray-600">Secured 2nd place competing against 150 teams under the theme "AI Innovations Unlimited which was held at Siddhartha College of Engineering, Vijayawada.</p>
//                             </li>
//                             <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400">
//                                 <h3 className="text-xl font-semibold text-gray-800">4th Prize-Prayatna 2.0 36Hr Hackathon, ACM Chapter National Level</h3>
//                                 <p className="text-gray-600">Secured 4th place in a 36Hr hackathon in the AI\&ML theme, competing against 100+ teams, won the Women-Empowerment Recognition Token which was held at Acropolis Institute of Technology and Research, Indore.</p>
//                             </li>
//                             <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400">
//                                 <h3 className="text-xl font-semibold text-gray-800">Host-IEEE Conference 2024, SITE-Tadepalligudem</h3>
//                                 <p className="text-gray-600">Demonstrated strong public speaking and presentation skills in a professional setting and proven my chance of getting the opportunity.</p>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Right Side - Lottie Animation */}
//                     {/* <div className="md:w-1/2 flex justify-center"> */}
//                         {/* <Lottie animationData={awardAnimation} loop={true} className="w-80 h-80" /> */}
//                         {/* <img src={awardAnimation} className="w-1000 h-1200" /> */}
//                     {/* </div> */}

//                     {/* Right Side - Animation */}
//                     {/* <div className="md:w-1/2 flex justify-center items-center"> */}
//                     <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
//                         <img 
//                             src={awardAnimation} 
//                             // className="w-96 h-auto object-contain opacity-95 rounded-xl" 
//                             className="w-full h-full object-contain opacity-90 rounded-xl shadow-xl"
//                             alt="Award Gif" 
//                         />
//                     </div>

//                 </div>
                
//             {/* </div> */}
//         </section>
//     );
// }

// export default Achievements;























// import React from "react";

// const Achievements = () =>{
//     return(
//         <section id="achievements" className="py-16 px-4 bg-white/30 relative overflow-hidden">
//             {/* Vertical Line Background */}
//             {/* <div className="absolute inset-0 bg-[url('/pattern-stripes-diagonal.svg')] opacity-5 bg-repeat z-0"></div> */}
//             <div className="absolute inset-0 bg-[url('/badge-12.svg')] opacity-10 z-0"></div>
//             {/* <div className="absolute inset-0 bg-[url('/gear-spinner.svg')] opacity-5 bg-repeat z-0"></div> */}


//             {/* <section id="achievements" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white"> */}
//             <div className="relative z-10">
//                 <div className="max-w-5xl mx-auto">
//                     {/* <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">Achievements</h2> */}
//                     <div className="text-center mb-16">
//                         {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-typing"> */}
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-typing">
//                             Achievements
//                         </h2>
//                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             These are things where my hard work and talent has been paid off that made me to boost more confidence and chance to learn more
//                         </p>
//                     </div>
//                     {/* <ul className="space-y-4 list-disc ml-6 text-gray-700">
//                         <li>2nd Prize-AI National Level 24Hr Hackathon</li>
//                         <li>4th Prize-Prayatna 2.0 36Hr Hackathon, ACM Chapter National Level</li>
//                         <li>Host-IEEE Conference 2024,SITE-Tadepalligudem</li>
//                     </ul> */}
//                     <ul className="space-y-4">
//                         {/* Add more if needed */}
//                         <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400">
//                             <h3 className="text-xl font-semibold text-gray-800">2nd Prize-AI National Level 24Hr Hackathon</h3>
//                             <p className="text-gray-600">Secured 2nd place competing against 150 teams under the theme "AI Innovations Unlimited which was held at Siddhartha College of Engineering, Vijayawada.</p>
//                             {/* <p className="text-gray-600"><b>CGPA</b> : 8.97</p> */}
//                         </li>
//                         <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400">
//                             <h3 className="text-xl font-semibold text-gray-800">4th Prize-Prayatna 2.0 36Hr Hackathon, ACM Chapter National Level</h3>
//                             <p className="text-gray-600">Secured 4th place in a 36Hr hackathon in the AI\&ML theme, competing against 100+ teams, won the Women-Empowerment Recognition Token which was held at Acropolis Institute of Technology and Research, Indore.</p>
//                             {/* <p className="text-gray-600"><b>IPE-Board</b> : 976 | <b>EAPCET Rank</b> : 3625 | <b>JEE-Mains</b> : 93.33%</p> */}
//                         </li>
//                         <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400">
//                             <h3 className="text-xl font-semibold text-gray-800">Host-IEEE Conference 2024, SITE-Tadepalligudem</h3>
//                             <p className="text-gray-600">Demonstrated strong public speaking and presentation skills in a professional setting and proven my chance of getting the opportunity.</p>
//                             {/* <p className='text-gray-600'><b>Score</b> : 600</p> */}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             {/* </section> */}

//         </section>
//     );
// }

// export default Achievements;