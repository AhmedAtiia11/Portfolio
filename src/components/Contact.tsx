import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Download, Github } from 'lucide-react';
import cvFile from '../assets/Ahmed Atiia CV.pdf';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedatya1288@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Mail className="w-8 h-8 text-blue-600" />
                </a>
                <p className="text-gray-600 mb-2">Email</p>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://www.linkedin.com/in/ahmed-atiia-50b791176/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </a>
                <p className="text-gray-600 mb-2">LinkedIn</p>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://github.com/AhmedAtiia11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Github className="w-8 h-8 text-blue-600" />
                </a>
                <p className="text-gray-600 mb-2">GitHub</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-gray-600 mb-2">Egypt</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-50 p-8 rounded-xl max-w-md mx-auto">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Download My Resume</h4>
                <p className="text-gray-600 mb-6">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                  <a
                    href={cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    download="Ahmed Atiia CV.pdf"
                  >
                    <Download size={20} />
                    Download CV (PDF)
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;