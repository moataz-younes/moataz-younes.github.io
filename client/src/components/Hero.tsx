import { FC } from 'react';
import { ChevronRight, Phone, Terminal, Eye, Scale, ArrowRight } from 'lucide-react';
import { HeroBackground, FloatingIcons, MatrixRain } from './CyberGraphics';

const Hero: FC = () => {

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Professional Cyber Background */}
      <HeroBackground />
      
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Floating Security Icons */}
      <FloatingIcons />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-40">
            {/* Enhanced spacing and alignment */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-6 md:space-y-8">
              {/* Badge - improved visibility */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-blue-500/15 border border-blue-500/40 rounded-full text-blue-400 text-xs sm:text-sm font-mono backdrop-blur-sm shadow-lg">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                <span className="hidden sm:inline">Professional Evidence Review</span>
                <span className="sm:hidden">Evidence Review</span>
              </div>

              {/* Enhanced headline - smaller, more refined */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight">
                Cyber Incident & Digital Evidence Review
                <span className="block mt-1.5 sm:mt-2 md:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 animate-pulse-slow text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  For Organizations & SMEs
                </span>
              </h1>

              {/* Improved value proposition with better spacing - smaller text */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-medium">
                Professional evidence assessment that stands up in legal proceedings. Know what happened, what you can prove, and what to do next.
              </p>

            </div>

            {/* Key Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div className="group text-left p-4 md:p-5 bg-gradient-to-br from-slate-800/40 to-green-950/20 rounded-xl border border-green-500/30 backdrop-blur-sm hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3 border border-green-500/30 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div className="text-sm md:text-base font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">Clear Understanding</div>
                  <div className="text-xs text-gray-300 leading-relaxed">Know exactly what happened and what evidence you have</div>
                </div>
              </div>
              <div className="group text-left p-4 md:p-5 bg-gradient-to-br from-slate-800/40 to-blue-950/20 rounded-xl border border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 border border-blue-500/30 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                    <Scale className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <div className="text-sm md:text-base font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">Legal Readiness</div>
                  <div className="text-xs text-gray-300 leading-relaxed">Evidence assessment that stands up in legal proceedings</div>
                </div>
              </div>
              <div className="group text-left p-4 md:p-5 bg-gradient-to-br from-slate-800/40 to-cyan-950/20 rounded-xl border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 border border-cyan-500/30 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                  </div>
                  <div className="text-sm md:text-base font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">Actionable Steps</div>
                  <div className="text-xs text-gray-300 leading-relaxed">Know what to do next with confidence</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons - more prominent, better accessibility */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-3">
              {/* Primary CTA - emphasized with larger size and better visual weight */}
              <button 
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl font-bold text-xs sm:text-sm md:text-base hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/50 flex items-center justify-center group relative overflow-hidden min-h-[44px] sm:min-h-[48px] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Request Evidence Review"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">Request Evidence Review</span>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              {/* Secondary CTA - phone number */}
              <a
                href="tel:+13474349853"
                className="border-2 border-green-500 text-green-400 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl font-bold text-xs sm:text-sm md:text-base hover:bg-green-500 hover:text-white transition-all duration-300 relative overflow-hidden group flex items-center justify-center min-h-[44px] sm:min-h-[48px] focus:outline-none focus:ring-4 focus:ring-green-500/50"
                aria-label="Call +1 347 434 9853"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 relative z-10" />
                <span className="relative z-10 text-xs sm:text-sm md:text-base">+1 347 434 9853</span>
              </a>
            </div>
          </div>

          {/* Visual - Evidence Review Report Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-slate-900/90 to-blue-950/40 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-blue-500/30 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-3 sm:mb-4 md:mb-6 pb-2 sm:pb-3 md:pb-4 border-b border-gray-700/50">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 font-mono text-xs sm:text-sm ml-2 sm:ml-3 md:ml-4 truncate">cybercrime_investigation.py</span>
              </div>

              {/* Code Block - Fixed, No Animation */}
              <div className="bg-black/95 rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 font-mono text-xs sm:text-sm md:text-base lg:text-base">
                <div className="text-gray-500 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm"># Evidence Review Report</div>
                
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  <div className="text-green-400">
                    <span className="text-blue-400">status</span> = <span className="text-yellow-400">"Review Complete"</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-purple-400">evidence_quality</span> = <span className="text-green-300">"Admissible"</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-purple-400">legal_readiness</span> = <span className="text-green-300">"Ready"</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-purple-400">next_steps</span> = <span className="text-orange-400">get_recommendations</span>()
                  </div>
                </div>
                
                <div className="text-green-400 mt-3 sm:mt-4 md:mt-6 pt-2 sm:pt-3 md:pt-4 border-t border-gray-700/30 text-xs sm:text-sm">
                  # Clear path forward ✓
                </div>
              </div>

              {/* Service Highlights - Responsive Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
                <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/10 border border-blue-500/40 rounded-lg p-2.5 sm:p-3 md:p-4 text-center">
                  <div className="text-blue-400 font-bold text-xs sm:text-sm md:text-base lg:text-lg">Fast Turnaround</div>
                  <div className="text-gray-400 text-xs mt-1">Quick assessment</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/15 to-green-600/10 border border-green-500/40 rounded-lg p-2.5 sm:p-3 md:p-4 text-center">
                  <div className="text-green-400 font-bold text-xs sm:text-sm md:text-base lg:text-lg">Legal Focus</div>
                  <div className="text-gray-400 text-xs mt-1">Court-ready reports</div>
                </div>
              </div>
            </div>

            {/* Static Glowing effect - No animation */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
