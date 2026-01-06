import { FC } from 'react';
import { Phone, FileCheck, FileText, Scale, Target } from 'lucide-react';
import { FloatingIcons } from './CyberGraphics';

const Services: FC = () => {
  
  // Single service focus: Cyber Incident & Digital Evidence Review
  const service = {
    title: "Cyber Incident & Digital Evidence Review",
    subtitle: "Professional assessment for organizations and SMEs",
    description: "Professional review of your cyber incident and digital evidence. Clear assessment of what happened, what evidence you have, and what it means for your legal case or compliance requirements.",
    whatYouGet: [
      {
        title: "Evidence Quality Assessment",
        details: "Evaluation of your digital evidence—logs, files, network data, and system artifacts. Assessment of admissibility, completeness, and legal readiness.",
        icon: FileCheck,
        color: "green"
      },
      {
        title: "Incident Analysis Report",
        details: "Clear explanation of what happened, when, and how. Written in plain language for technical and non-technical stakeholders.",
        icon: FileText,
        color: "blue"
      },
      {
        title: "Legal Readiness Review",
        details: "Assessment of whether your evidence meets legal standards for court proceedings, regulatory reporting, or compliance.",
        icon: Scale,
        color: "cyan"
      },
      {
        title: "Actionable Recommendations",
        details: "Specific next steps based on your situation—pursue legal action, report to regulators, focus on recovery, or other measures.",
        icon: Target,
        color: "green"
      }
    ],
    outcomes: [
      "Clear understanding of evidence quality and legal standing",
      "Confidence in next steps and decision-making",
      "Professional documentation ready for legal or regulatory use",
      "Time saved by avoiding guesswork and wrong priorities"
    ]
  };


  return (
    <section id="services" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-blue-950/20 to-slate-900 relative overflow-hidden scroll-reveal border-t border-blue-500/10">
      <FloatingIcons />
      {/* Animated Glowing Circles */}
      <div className="absolute z-0 inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 md:w-56 md:h-56 bg-green-400 opacity-15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/5 w-24 h-24 md:w-40 md:h-40 bg-cyan-400 opacity-15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-20 h-20 md:w-32 md:h-32 bg-blue-400 opacity-15 rounded-full blur-2xl animate-pulse"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced section header with better spacing */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            The <span className="text-blue-400">Service</span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {service.title}
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {service.subtitle}
          </p>
        </div>

        {/* Service Description - improved line width for readability */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            {service.description}
          </p>
        </div>

        {/* What the Review Includes */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 text-center">
            What the Review Includes
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {service.whatYouGet.map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                green: {
                  border: 'border-green-500/30',
                  borderHover: 'hover:border-green-500/50',
                  iconBg: 'bg-green-500/20',
                  iconBorder: 'border-green-500/30',
                  iconColor: 'text-green-400',
                  textColor: 'text-green-400'
                },
                blue: {
                  border: 'border-blue-500/30',
                  borderHover: 'hover:border-blue-500/50',
                  iconBg: 'bg-blue-500/20',
                  iconBorder: 'border-blue-500/30',
                  iconColor: 'text-blue-400',
                  textColor: 'text-blue-400'
                },
                cyan: {
                  border: 'border-cyan-500/30',
                  borderHover: 'hover:border-cyan-500/50',
                  iconBg: 'bg-cyan-500/20',
                  iconBorder: 'border-cyan-500/30',
                  iconColor: 'text-cyan-400',
                  textColor: 'text-cyan-400'
                }
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses] || colorClasses.green;
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border-2 ${colors.border} ${colors.borderHover} transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl`}
                >
                  <div className="p-5 md:p-6">
                    <div className="flex items-start space-x-4 md:space-x-5">
                      <div className={`w-12 h-12 md:w-14 md:h-14 ${colors.iconBg} rounded-xl flex items-center justify-center border-2 ${colors.iconBorder} flex-shrink-0`}>
                        <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${colors.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-base md:text-lg font-bold ${colors.textColor} mb-2 md:mb-3`}>
                          {item.title}
                        </h4>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What You Get as Outcomes */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            What You Get
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-slate-800/50 to-blue-950/30 rounded-2xl p-8 md:p-10 border border-blue-500/20 backdrop-blur-sm">
              <ul className="space-y-6">
                {service.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-lg md:text-xl text-gray-200 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-red-950/40 via-red-900/30 to-red-950/50 rounded-2xl p-8 md:p-12 border-2 border-red-500/50 backdrop-blur-sm shadow-2xl shadow-red-500/20 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-400 rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-red-500/20 rounded-full border-2 border-red-500/50 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/30 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 md:w-7 md:h-7 text-red-400" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Ready to Get Clarity on Your Evidence?
              </h3>
              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Discuss your cyber incident and get a professional evidence review.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const section = document.getElementById('contact');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-bold text-base md:text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-red-500/30 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Request Evidence Review</span>
                </button>
                <a
                  href="tel:+13474349853"
                  className="bg-white/10 border-2 border-white/30 text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-bold text-base md:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 relative overflow-hidden group flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 relative z-10" />
                  <span className="relative z-10">+1 347 434 9853</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;