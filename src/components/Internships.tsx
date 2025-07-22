import React from "react";

const Internships = () =>{
    return(
        <section id="internships" className="py-16 px-4 bg-white/30 relative overflow-hidden">
            {/* <section id="internships" className="py-16 px-4 bg-white"> */}
                <div className="max-w-5xl mx-auto">
                    {/* <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Internships</h2> */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Internships
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Here are my real-world problems solved for an organisation to enhance my skills and gain hands-on experience to tackle with industry-related technologies and skills
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold">Enterprise Application Developer Intern - Koyya Enterprises Pvt. Limited, Bangalore</h3>
                            <p className="text-gray-700 text-sm">March 2025 – June 2025 (Remote)</p>
                            <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
                                <li>Developed back-end components for enterprise web applications</li>
                                <li>Developed administration-panel dashboard for enterprise applications</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold">Transaction Chatbot Developer Intern - BagNDash, USA</h3>
                            <p className="text-gray-700 text-sm">Feb 2025 – May 2025 (Remote)</p>
                            <ul className="list-disc ml-4 text-gray-600 text-sm mt-2">
                                <li>Developed Transaction chatbot feature for the BagNDash Company</li>
                                <li>Linked MERN, Kafka, ClickHouse, GO-Lang and Gemini 2.o flash for the features</li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* </section> */}

        </section>
    );
}

export default Internships;