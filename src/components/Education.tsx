import React from 'react';
import educationGif from '@/components/education_gif1.gif'; // Adjust path accordingly

const Education = () => {
    return (
        <section id="education" className="py-16 px-4 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-10">

                {/* Left - GIF */}
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img 
                        src={educationGif} 
                        alt="Education GIF"
                        // className="w-full h-full object-contain opacity-90 rounded-xl shadow-xl"
                        className="w-full h-full object-contain opacity-95 rounded-xl"
                    />
                </div>

                {/* Right - Education Content */}
                <div className="md:w-1/2">
                    <div className="text-center md:text-left mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Education</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
                    </div>

                    <ul className="space-y-4">
                        <li className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science & Engineering</h3>
                            <p className="text-gray-600">Sasi Institute of Technology and Engineering | 2022 - 2026 | Tadepalligudem</p>
                            <p className="text-gray-600"><b>CGPA</b>: 8.97</p>
                        </li>
                        <li className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800">Intermediate in M.P.C stream</h3>
                            <p className="text-gray-600">Sasi Junior College | Tanuku | 2020 - 2022</p>
                            <p className="text-gray-600"><b>IPE-Board</b>: 976 | <b>EAPCET Rank</b>: 3625 | <b>JEE-Mains</b>: 93.33%</p>
                        </li>
                        <li className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300">
                            <h3 className="text-xl font-semibold text-gray-800">SSC 10th State Board</h3>
                            <p className="text-gray-600">Sasi E.M. High School | Tanuku | 2019 - 2020</p>
                            <p className='text-gray-600'><b>Score</b>: 600</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;


















// import React from 'react';

// const Education = () =>{
//     return (
//         <section id="education" className="py-16 px-4 bg-white/30 relative overflow-hidden">
//             <div className="max-w-5xl mx-auto">
//                 {/* <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">Education</h2> */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                         Education
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
//                     {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                         Here is my education backgorund ... 
//                     </p> */}
//                 </div>
//                 <ul className="space-y-4">
//                 {/* <li className="bg-white p-6 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science & Engineering</h3>
//                     <p className="text-gray-600">Sasi Institute of Technology and Engineering | 2022 - 2026</p>
//                 </li> */}
//                 {/* Add more if needed */}
//                 {/* <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400"> */}
//                 <li className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg">
//                     <h3 className="text-xl font-semibold text-gray-800">B.Tech in Computer Science & Engineering</h3>
//                     <p className="text-gray-600">Sasi Institute of Technology and Engineering | 2022 - 2026 | Tadepalligudem</p>
//                     <p className="text-gray-600"><b>CGPA</b> : 8.97</p>
//                 </li>
//                 {/* <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400"> */}
//                 <li className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg">
//                     <h3 className="text-xl font-semibold text-gray-800">Intermediate in M.P.C stream</h3>
//                     <p className="text-gray-600">Sasi Junior College | Tanuku | 2020 - 2022</p>
//                     <p className="text-gray-600"><b>IPE-Board</b> : 976 | <b>EAPCET Rank</b> : 3625 | <b>JEE-Mains</b> : 93.33%</p>
//                 </li>
//                 {/* <li className="bg-white p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-blue-200 to-purple-400"> */}
//                 <li className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg">
//                     <h3 className="text-xl font-semibold text-gray-800">SSC 10th State Board</h3>
//                     <p className="text-gray-600">Sasi E.M. High School | Tanuku | 2019 - 2020</p>
//                     <p className='text-gray-600'><b>Score</b> : 600</p>
//                 </li>
//                 </ul>
//             </div>
//             {/* Decorative background orbs */}
//             <div className="absolute -top-8 -left-10 w-36 h-36 bg-gradient-to-br from-blue-700 to-purple-700 opacity-20 rounded-full blur-2xl animate-pulse"></div>
//             <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-600 to-purple-600 opacity-25 rounded-full blur-3xl animate-spin-slow"></div>
//             {/* Decorative background orbs */}
//             <div className="absolute -top-8 -right-10 w-36 h-36 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-pink-400 to-purple-600 opacity-25 rounded-full blur-3xl animate-spin-slow"></div>

//         </section>

//     );
// };

// export default Education;