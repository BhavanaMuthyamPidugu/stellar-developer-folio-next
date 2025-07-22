import React from "react";
import { motion } from "framer-motion";

const Internships = () => {
  return (
    <section id="internships" className="py-16 px-4 bg-white/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading + GIF side-by-side */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-16 gap-6">
          {/* Animated GIF */}
          <motion.img
            src="/girl_working_chair.gif"
            alt="Internship Work"
            className="w-44 md:w-56 rounded-xl shadow-xl border-4 border-blue-300 bg-white/60 backdrop-blur-xl p-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* Heading Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Internships
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto md:mx-0 rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 max-w-xl">
              Here are my real-world problems solved for an organisation to enhance my skills and gain hands-on experience to tackle with industry-related technologies and skills.
            </p>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
            <h3 className="text-xl font-semibold">
              Enterprise Application Developer Intern - Koyya Enterprises Pvt. Limited, Bangalore
            </h3>
            <p className="text-gray-700 text-sm">March 2025 – June 2025 (Remote)</p>
            <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
              <li>Developed back-end components for enterprise web applications</li>
              <li>Developed administration-panel dashboard for enterprise applications</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
            <h3 className="text-xl font-semibold">
              Transaction Chatbot Developer Intern - BagNDash, USA
            </h3>
            <p className="text-gray-700 text-sm">Feb 2025 – May 2025 (Remote)</p>
            <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
              <li>Developed Transaction chatbot feature for the BagNDash Company</li>
              <li>Integrated MERN, Kafka, ClickHouse, GO-Lang and Gemini 2.o flash for the features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;

















// import React from "react";
// // import workingGirlGif from "../components/girl_working_chair.gif"; // Adjust the path as needed
// import workingGirlGif from "../components/Recent_Grad_portfolio1.gif"; // Adjust the path as needed

// const Internships = () => {
//     return (
//         <section id="internships" className="py-16 px-4 bg-white/30 relative overflow-hidden">
//             <div className="max-w-5xl mx-auto">
//                 <div className="text-center mb-10">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                         Internships
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
//                     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                         Here are my real-world problems solved for an organisation to enhance my skills and gain hands-on experience to tackle with industry-related technologies and skills
//                     </p>

//                     {/* 👇 Animated GIF goes here */}
//                     <div className="mt-8 mb-6 flex justify-center">
//                         <img
//                             src={workingGirlGif}
//                             alt="Girl working on laptop"
//                             className="w-[300px] md:w-[400px] rounded-xl shadow-md"
//                         />
//                     </div>
//                 </div>

//                 {/* Internship Cards */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                     <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
//                         <h3 className="text-xl font-semibold">Enterprise Application Developer Intern - Koyya Enterprises Pvt. Limited, Bangalore</h3>
//                         <p className="text-gray-700 text-sm">March 2025 – June 2025 (Remote)</p>
//                         <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
//                             <li>Developed back-end components for enterprise web applications</li>
//                             <li>Developed administration-panel dashboard for enterprise applications</li>
//                         </ul>
//                     </div>
//                     <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
//                         <h3 className="text-xl font-semibold">Transaction Chatbot Developer Intern - BagNDash, USA</h3>
//                         <p className="text-gray-700 text-sm">Feb 2025 – May 2025 (Remote)</p>
//                         <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
//                             <li>Developed Transaction chatbot feature for the BagNDash Company</li>
//                             <li>Linked MERN, Kafka, ClickHouse, GO-Lang and Gemini 2.o flash for the features</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Internships;

















// import React from "react";

// const Internships = () =>{
//     return(
//         <section id="internships" className="py-16 px-4 bg-white/30 relative overflow-hidden">
//             {/* <section id="internships" className="py-16 px-4 bg-white"> */}
//                 <div className="max-w-5xl mx-auto">
//                     {/* <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Internships</h2> */}
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                             Internships
//                         </h2>
//                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             Here are my real-world problems solved for an organisation to enhance my skills and gain hands-on experience to tackle with industry-related technologies and skills
//                         </p>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-6">
//                         <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
//                             <h3 className="text-xl font-semibold">Enterprise Application Developer Intern - Koyya Enterprises Pvt. Limited, Bangalore</h3>
//                             <p className="text-gray-700 text-sm">March 2025 – June 2025 (Remote)</p>
//                             <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
//                                 <li>Developed back-end components for enterprise web applications</li>
//                                 <li>Developed administration-panel dashboard for enterprise applications</li>
//                             </ul>
//                         </div>
//                         <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
//                             <h3 className="text-xl font-semibold">Transaction Chatbot Developer Intern - BagNDash, USA</h3>
//                             <p className="text-gray-700 text-sm">Feb 2025 – May 2025 (Remote)</p>
//                             <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
//                                 <li>Developed Transaction chatbot feature for the BagNDash Company</li>
//                                 <li>Linked MERN, Kafka, ClickHouse, GO-Lang and Gemini 2.o flash for the features</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             {/* </section> */}

//         </section>
//     );
// }

// export default Internships;