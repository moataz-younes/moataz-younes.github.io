import { useState, useEffect, FC } from 'react';
import { Phone, Mail, X, ChevronUp } from 'lucide-react';

const FloatingCTA: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show CTA after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Main CTA Button - Enhanced with better accessibility and visibility */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-500 to-green-500 text-white w-16 h-16 md:w-18 md:h-18 rounded-full shadow-2xl shadow-blue-500/50 hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500/50 min-h-[64px] min-w-[64px]"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <ChevronUp className="w-6 h-6 relative z-10" />
        )}
      </button>

      {/* Contact Options - Enhanced with better spacing and accessibility */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <a
            href="tel:+13474349853"
            className="bg-green-500/95 backdrop-blur-sm text-white px-6 py-4 rounded-full shadow-xl hover:bg-green-500 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 group min-h-[56px] focus:outline-none focus:ring-4 focus:ring-green-500/50"
            aria-label="Call +1 347 434 9853"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-semibold text-base">Call Now</span>
          </a>
          <a
            href="mailto:moataz.yones244@gmail.com?subject=Cyber Incident Evidence Review Inquiry"
            className="bg-blue-500/95 backdrop-blur-sm text-white px-6 py-4 rounded-full shadow-xl hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 group min-h-[56px] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Send email to moataz.yones244@gmail.com"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-semibold text-base">Email Me</span>
          </a>
          <button
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-green-500 backdrop-blur-sm text-white px-6 py-4 rounded-full shadow-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 group min-h-[56px] focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Go to contact form"
          >
            <span className="font-semibold text-base">Request Review</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;

