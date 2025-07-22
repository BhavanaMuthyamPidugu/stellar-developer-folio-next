import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzcW6CSDd02NyvQhkgcH-IcLT9tr9wuJjt5-k1K_CkERjz5inejNZAl_et8ygl2lQXSLA/exec', // replace if needed
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const result = await response.json();
      if (result.result === 'success') {
        toast({
          title: 'Message Sent!',
          description: "Thank you for your message. I'll get back to you soon!"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error occurred!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50/60 to-cyan-50/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 drop-shadow-lg neon-text-cyber">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl rounded-2xl hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 shadow-lg hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden border-0">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-800 font-medium">bhavana.pidugu@sasi.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="text-gray-800 font-medium">+91 91214 79192</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800 font-medium">Tanuku, West-Godavari Dist., A.P. - 534 211</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

        {/* <div className="grid lg:grid-cols-2 gap-12"> */}
          {/* Contact Info */}
          {/* <div className="space-y-8">
            <Card className="p-8 bg-white/70 border border-purple-300 shadow-2xl rounded-2xl backdrop-blur-lg transition-transform hover:scale-[1.01]">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-800 font-medium">bhavana.pidugu@sasi.ac.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="text-gray-800 font-medium">+91 91214 79192</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800 font-medium">Tanuku, West-Godavari Dist., A.P. - 534 211</p>
                  </div>
                </div>
              </div>
            </Card>
          </div> */}

          {/* Contact Form */}
          <Card className="p-8 bg-white/80 border border-blue-300 shadow-xl rounded-2xl backdrop-blur-xl hover:shadow-purple-300 transition duration-300 transform hover:-translate-y-2 overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-purple-400 shadow-inner rounded-xl"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-purple-400 shadow-inner rounded-xl"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-purple-400 shadow-inner rounded-xl"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white py-3 rounded-xl shadow-lg neon-border transition duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

















// import React, { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, MapPin, Phone, Send } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import connectSVG from '@/components/send4.svg';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    

//     // const data = {
//     //   name,
//     //   email,
//     //   message,
//     // };
  
//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwe_OiP8TuzLlvGCHdxRFAuvbjIg5j0AS74kTLE4O-t7Cat0H08FSdOwatoZajdaZLjXw/exec", // Replace with your actual deployed Apps Script URL
//         {
//           method: "POST",
//           body: JSON.stringify(formData),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       const result = await response.json();
//       if (result.result === "success") {
//         // alert("Form submitted successfully!");
//         // setName("");
//         // setEmail("");
//         // setMessage("");
//             // Simulate form submission
//         toast({
//           title: "Message Sent!",
//           description: "Thank you for your message. I'll get back to you soon!",
//         });
        
//         // Reset form
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         alert("Form submission failed!");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Error occurred!");
//     }

    
//     // // Simulate form submission
//     // toast({
//     //   title: "Message Sent!",
//     //   description: "Thank you for your message. I'll get back to you soon!",
//     // });
    
//     // // Reset form
//     // setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 px-4 bg-white/30">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Let's Work Together
//             {/* <svg width="7" height="7"></svg> */}
//             {/* <img src={connectSVG} alt="ConnectLogo" /> */}
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
//           </p>
//         </div>

        // <div className="grid lg:grid-cols-2 gap-12">
        //   {/* Contact Info */}
        //   <div className="space-y-8">
        //     <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl rounded-2xl">
        //       <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
        //       <div className="space-y-6">
        //         <div className="flex items-center space-x-4">
        //           <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        //             <Mail className="w-6 h-6 text-white" />
        //           </div>
        //           <div>
        //             <p className="text-gray-600">Email</p>
        //             <p className="text-gray-800 font-medium">bhavana.pidugu@sasi.ac.in</p>
        //           </div>
        //         </div>
                
        //         <div className="flex items-center space-x-4">
        //           <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
        //             <Phone className="w-6 h-6 text-white" />
        //           </div>
        //           <div>
        //             <p className="text-gray-600">Phone</p>
        //             <p className="text-gray-800 font-medium">+91 91214 79192</p>
        //           </div>
        //         </div>
                
        //         <div className="flex items-center space-x-4">
        //           <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
        //             <MapPin className="w-6 h-6 text-white" />
        //           </div>
        //           <div>
        //             <p className="text-gray-600">Location</p>
        //             <p className="text-gray-800 font-medium">Tanuku, West-Godavari Dist., A.P. - 534 211</p>
        //           </div>
        //         </div>
        //       </div>
        //     </Card>
        //   </div>

//           {/* Contact Form */}
//           <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <Input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="Your full name"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="your.email@example.com"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
//                   placeholder="Tell me about your project or just say hello!"
//                 />
//               </div>
              
//               <Button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
