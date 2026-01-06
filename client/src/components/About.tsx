import { FC } from 'react';
import { AlertTriangle } from 'lucide-react';
import { CyberBackground } from './CyberGraphics';

const About: FC = () => {
  return (
    <section id="problem" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-slate-900 to-blue-950/20 relative overflow-hidden scroll-reveal border-t border-blue-500/10">
      <CyberBackground />
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced section header with better spacing */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The <span className="text-blue-400">Problem</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            After a cyber incident, organizations face critical questions without clear answers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Problem List */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              What Organizations Face
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Unclear Evidence Quality</h4>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    You have logs, files, and data—but is it admissible? Will it hold up in court or regulatory reviews?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Missing Critical Details</h4>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Technical teams see one thing; legal teams need another. The gap between what happened and what you can prove is wide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Uncertain Next Steps</h4>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Should you pursue legal action? Report to regulators? Focus on recovery? Without clear evidence assessment, you're guessing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Time Pressure</h4>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    Evidence degrades, memories fade, and opportunities diminish. You need answers fast.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Box */}
          <div className="space-y-6">
            <div className="bg-red-500/10 border-2 border-red-500/40 rounded-xl p-8 md:p-10 backdrop-blur-sm hover:border-red-500/60 transition-all duration-300 shadow-lg shadow-red-500/10">
              <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 border border-red-500/30">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The Cost of Not Knowing
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <span>Weak legal cases due to inadmissible evidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <span>Regulatory compliance failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <span>Wasted resources on the wrong priorities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <span>Missed opportunities to recover losses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;