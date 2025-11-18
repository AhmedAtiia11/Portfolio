import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profileImage from '../assets/aatiia.ico';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-gray-600 overflow-hidden">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Ahmed Atiia
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 mb-6">
              DevOps Engineer
            </p>
           
          </div>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-bold">
              I’m a DevOps Engineer focused on building reliable, scalable, and secure cloud-native systems through Kubernetes, GitOps, and automated CI/CD pipelines
            
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/ahmed-atiia-50b791176/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedatya1288@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Mail size={20} />
              Email
            </a>
            <a
              href="https://github.com/AhmedAtiia11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 transition-colors animate-bounce"
            >
              <div className="w-8 h-8 border-2 border-blue-600 rounded-full flex items-center justify-center">
                ↓
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React from "react";
// import { TypeAnimation } from "react-type-animation";

// function Hero() {
//   return (
//     <div className="text-black px-10">
//       <div className="max-w-screen-lg h-screen w-full mx-auto text-left flex flex-col justify-center sm:px-10 relative -mt-20">
//         <p className="text-secondary font-bold p-2 text-lg">
//           <TypeAnimation
//             sequence={[
//               "Greetings",
//               1000,
//               "السلام عليكم",
//               1000,
//             ]}
//             wrapper="span"
//             cursor={true}
//             repeat={Infinity}
//             style={{ fontSize: "2em", display: "inline-block" }}
//           />
//         </p>
//         <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold md:py-6 text-text1">
//           My name's Ibrahim Kabbash
//         </h1>
//         <div className="flex">
//           <p className="md:text-xl sm:text-lg text-lg font-bold py-2 text-text2">
//             I'm a DevOps Engineer with a focus on automation and cloud infrastructure, dedicated to
//             improving system reliability, optimizing workflows, and integrating security best practices.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
