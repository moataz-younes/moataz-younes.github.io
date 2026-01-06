import { FC } from 'react';

const Portfolio: FC = () => {
  // Why Me section - experience-based, not certificates
  const whyMe = [
    {
      title: "Real Investigation Experience",
      description: "Active cybercrime investigator since 2020, working on actual cases with digital evidence that stands up in legal proceedings."
    },
    {
      title: "Legal-Technical Bridge",
      description: "PhD research in Cybercrime Law & Digital Evidence. Understands both the technical side and what courts and regulators require."
    },
    {
      title: "Practical Tools & Methods",
      description: "Builds custom OSINT and forensics tools. Knows what works in practice, not just theory—applied to your evidence review."
    },
    {
      title: "Clear Communication",
      description: "Translates complex technical findings into clear, actionable reports that decision-makers can use."
    }
  ];


  return (
    <section id="why-me" className="py-20 md:py-28 lg:py-36 bg-gradient-to-b from-slate-900 to-red-950/20 scroll-reveal border-t border-red-500/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Enhanced section header with better spacing */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why <span className="text-red-400">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience that delivers results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {whyMe.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/30 rounded-xl border border-green-500/20 hover:border-green-500/40 p-6 md:p-8 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-[1.02]"
            >
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Ready to get a professional evidence review?
          </p>
          <button 
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-red-500 to-green-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-bold text-lg md:text-xl hover:from-red-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative z-10">Request Evidence Review</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;