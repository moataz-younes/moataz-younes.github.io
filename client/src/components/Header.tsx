import { useState, useEffect, FC } from 'react';
import { Menu, X, Shield, Mail, MapPin, Phone } from 'lucide-react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'problem', 'services', 'why-me', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-green-500/20' : 'bg-transparent'
    }`}>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-green-400 py-2 px-4 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs md:text-sm">
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center space-x-1 md:space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+1 347 434 9853</span>
              <span className="sm:hidden">Call</span>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">moataz.yones244@gmail.com</span>
              <span className="md:hidden">Email</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden md:inline">Available Worldwide | Arabic & English</span>
            <span className="md:hidden">Global</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold font-mono ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="text-blue-400">Moataz</span> <span className="text-green-400">Younes</span>
            </h1>
          </div>

          {/* Desktop Menu - Enhanced with better active states */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={`transition-all duration-300 font-semibold text-sm xl:text-base px-3 py-2 rounded-lg ${
                activeSection === 'home' 
                  ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                  : 'text-white/80 hover:text-green-400 hover:bg-white/5'
              }`}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Home
            </a>
            <a 
              href="#problem" 
              onClick={(e) => handleNavClick(e, 'problem')}
              className={`transition-all duration-300 font-semibold text-sm xl:text-base px-3 py-2 rounded-lg ${
                activeSection === 'problem' 
                  ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                  : 'text-white/80 hover:text-green-400 hover:bg-white/5'
              }`}
              aria-current={activeSection === 'problem' ? 'page' : undefined}
            >
              The Problem
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className={`transition-all duration-300 font-semibold text-sm xl:text-base px-3 py-2 rounded-lg ${
                activeSection === 'services' 
                  ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                  : 'text-white/80 hover:text-green-400 hover:bg-white/5'
              }`}
              aria-current={activeSection === 'services' ? 'page' : undefined}
            >
              The Service
            </a>
            <a 
              href="#why-me" 
              onClick={(e) => handleNavClick(e, 'why-me')}
              className={`transition-all duration-300 font-semibold text-sm xl:text-base px-3 py-2 rounded-lg ${
                activeSection === 'why-me' 
                  ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                  : 'text-white/80 hover:text-green-400 hover:bg-white/5'
              }`}
              aria-current={activeSection === 'why-me' ? 'page' : undefined}
            >
              Why Me
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`transition-all duration-300 font-semibold text-sm xl:text-base px-3 py-2 rounded-lg ${
                activeSection === 'contact' 
                  ? 'text-green-400 bg-green-500/10 border border-green-500/30' 
                  : 'text-white/80 hover:text-green-400 hover:bg-white/5'
              }`}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact
            </a>
            <button 
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 xl:px-6 xl:py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-xs xl:text-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span className="relative z-10">Request Evidence Review</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Enhanced spacing and tap targets */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md shadow-xl py-6 border-b border-blue-500/30 z-50">
            <div className="flex flex-col space-y-2 px-6">
              <a 
                href="#home" 
                className={`text-white transition-all duration-300 font-semibold py-4 px-4 rounded-lg border-b border-gray-700/30 min-h-[48px] flex items-center ${
                  activeSection === 'home' ? 'bg-green-500/10 text-green-400 border-l-4 border-green-400' : 'hover:text-green-400 hover:bg-white/5'
                }`}
                onClick={(e) => { handleNavClick(e, 'home'); }}
                aria-current={activeSection === 'home' ? 'page' : undefined}
              >
                Home
              </a>
              <a 
                href="#problem" 
                className={`text-white transition-all duration-300 font-semibold py-4 px-4 rounded-lg border-b border-gray-700/30 min-h-[48px] flex items-center ${
                  activeSection === 'problem' ? 'bg-green-500/10 text-green-400 border-l-4 border-green-400' : 'hover:text-green-400 hover:bg-white/5'
                }`}
                onClick={(e) => { handleNavClick(e, 'problem'); }}
                aria-current={activeSection === 'problem' ? 'page' : undefined}
              >
                The Problem
              </a>
              <a 
                href="#services" 
                className={`text-white transition-all duration-300 font-semibold py-4 px-4 rounded-lg border-b border-gray-700/30 min-h-[48px] flex items-center ${
                  activeSection === 'services' ? 'bg-green-500/10 text-green-400 border-l-4 border-green-400' : 'hover:text-green-400 hover:bg-white/5'
                }`}
                onClick={(e) => { handleNavClick(e, 'services'); }}
                aria-current={activeSection === 'services' ? 'page' : undefined}
              >
                The Service
              </a>
              <a 
                href="#why-me" 
                className={`text-white transition-all duration-300 font-semibold py-4 px-4 rounded-lg border-b border-gray-700/30 min-h-[48px] flex items-center ${
                  activeSection === 'why-me' ? 'bg-green-500/10 text-green-400 border-l-4 border-green-400' : 'hover:text-green-400 hover:bg-white/5'
                }`}
                onClick={(e) => { handleNavClick(e, 'why-me'); }}
                aria-current={activeSection === 'why-me' ? 'page' : undefined}
              >
                Why Me
              </a>
              <a 
                href="#contact" 
                className={`text-white transition-all duration-300 font-semibold py-4 px-4 rounded-lg border-b border-gray-700/30 min-h-[48px] flex items-center ${
                  activeSection === 'contact' ? 'bg-green-500/10 text-green-400 border-l-4 border-green-400' : 'hover:text-green-400 hover:bg-white/5'
                }`}
                onClick={(e) => { handleNavClick(e, 'contact'); }}
                aria-current={activeSection === 'contact' ? 'page' : undefined}
              >
                Contact
              </a>
              <button 
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSePjBveQYC8IcYr0uCCuuo_Ue3kI4tVdUienhljFJHEBskU0Q/viewform', '_blank');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 w-full font-medium mt-4 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <span className="relative z-10">Request Evidence Review</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;