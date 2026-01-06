import { FC } from 'react';
import { Shield, Github, Linkedin, Mail, Phone, FileText, Scale } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-950/30 to-black border-t-2 border-blue-500/30 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-slate-900/50 to-black z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Moataz Younes</h3>
                <p className="text-gray-400 text-xs">Cybersecurity Expert</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional Cyber Incident & Digital Evidence Review Specialist for organizations and SMEs.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/moataz-younes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="http://www.linkedin.com/in/moataz-younes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://medium.com/@moataz.yones244" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-blue-400" />
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Evidence Review
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Incident Analysis
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Legal Readiness
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Professional Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center">
              <Scale className="w-4 h-4 mr-2 text-green-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#why-me" className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Why Me
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 flex items-center">
              <Phone className="w-4 h-4 mr-2 text-cyan-400" />
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+13474349853" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                  +1 347 434 9853
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:moataz.yones244@gmail.com" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors break-all">
                  moataz.yones244@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                >
                  Request Evidence Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/30 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2024 <span className="text-blue-400 font-semibold">Moataz Younes</span>. All rights reserved. 
              <span className="block md:inline md:ml-1 mt-1 md:mt-0">Professional Evidence Review Services.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xs md:text-sm transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xs md:text-sm transition-colors">Terms of Service</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-xs md:text-sm transition-colors">Professional Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;