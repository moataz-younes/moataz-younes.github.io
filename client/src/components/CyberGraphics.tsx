import { FC } from 'react';

// Professional cybersecurity SVG background component
export const CyberBackground: FC = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circuit Board Pattern */}
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 10 H90 V30 H70 V50 H90 V90 H10 V70 H30 V50 H10 Z" stroke="#00ff00" strokeWidth="1" fill="none" />
          <circle cx="10" cy="10" r="2" fill="#00ff00" />
          <circle cx="90" cy="90" r="2" fill="#00ff00" />
          <circle cx="50" cy="50" r="1.5" fill="#3b82f6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
      
      {/* Network Nodes */}
      {Array.from({ length: 15 }, (_, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={Math.random() * 1200}
            cy={Math.random() * 800}
            r="4"
            fill="#00ff00"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        </g>
      ))}
      
      {/* Data Flow Lines */}
      <path d="M100 200 Q300 100 500 200 T900 150" stroke="#3b82f6" strokeWidth="2" fill="none" className="animate-pulse" />
      <path d="M200 600 Q400 500 600 600 T1000 550" stroke="#00ff00" strokeWidth="2" fill="none" className="animate-pulse" />
    </svg>
  </div>
);

// Enhanced floating security icons with hover effects
export const FloatingIcons: FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Enhanced Security Icons with hover effects */}
    <div className="absolute top-10 left-10 group cursor-pointer">
      <svg className="w-8 h-8 text-blue-500/30 animate-bounce group-hover:text-blue-500/60 transition-all duration-300 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM18 11C18 15.42 15.28 19.24 12 20.23C8.72 19.24 6 15.42 6 11V6.3L12 3.19L18 6.3V11Z"/>
      </svg>
      <div className="absolute -inset-2 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
    
    <div className="absolute top-20 right-20 group cursor-pointer">
      <svg className="w-6 h-6 text-green-500/30 animate-pulse group-hover:text-green-500/60 transition-all duration-300 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '1s' }}>
        <path d="M6 10V8C6 5.79 7.79 4 10 4H14C16.21 4 18 5.79 18 8V10H19C20.1 10 21 10.9 21 12V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V12C3 10.9 3.9 10 5 10H6ZM8 8V10H16V8C16 6.9 15.1 6 14 6H10C8.9 6 8 6.9 8 8Z"/>
      </svg>
      <div className="absolute -inset-2 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
    
    <div className="absolute bottom-20 left-1/4 group cursor-pointer">
      <svg className="w-7 h-7 text-blue-500/30 animate-bounce group-hover:text-blue-500/60 transition-all duration-300 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '2s' }}>
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7 17 9.24 17 12 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15 15 13.66 15 12 13.66 9 12 9Z"/>
      </svg>
      <div className="absolute -inset-2 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
    
    <div className="absolute top-1/3 right-10 group cursor-pointer">
      <svg className="w-5 h-5 text-blue-500/30 animate-pulse group-hover:text-blue-500/60 transition-all duration-300 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '1.5s' }}>
        <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
      </svg>
      <div className="absolute -inset-2 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
    
    {/* Additional floating cyber elements */}
    <div className="absolute top-1/2 left-10 group cursor-pointer">
      <svg className="w-6 h-6 text-cyan-500/30 animate-spin group-hover:text-cyan-500/60 transition-all duration-300 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor" style={{ animationDuration: '3s' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12 15.31 6 12 6Z"/>
      </svg>
      <div className="absolute -inset-2 bg-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
    
    <div className="absolute bottom-1/3 right-1/3 group cursor-pointer">
      <svg className="w-8 h-8 text-yellow-500/30 animate-bounce group-hover:text-yellow-500/60 transition-all duration-300 group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '2.5s' }}>
        <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"/>
      </svg>
      <div className="absolute -inset-2 bg-yellow-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </div>
  </div>
);

// Matrix rain effect component
export const MatrixRain: FC = () => (
  <div className="absolute inset-0 opacity-5 overflow-hidden">
    {Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute text-green-400 text-xs font-mono animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`,
        }}
      >
        {['0', '1', '█', '▓', '▒', '░'][Math.floor(Math.random() * 6)]}
      </div>
    ))}
  </div>
);

// Professional hero background with advanced cybersecurity theme
export const HeroBackground: FC = () => (
  <div className="absolute inset-0">
    {/* Advanced gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950/30"></div>
    
    {/* Animated cybersecurity grid */}
    <div className="absolute inset-0 opacity-15">
      <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none">
        <defs>
          <pattern id="cyber-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 0h50v50H0z" fill="none" stroke="#00ff00" strokeWidth="0.5" opacity="0.4"/>
            <circle cx="25" cy="25" r="1.5" fill="#3b82f6" opacity="0.8" className="animate-pulse"/>
            <path d="M10 25 L40 25 M25 10 L25 40" stroke="#00ff00" strokeWidth="0.3" opacity="0.6"/>
          </pattern>
          <linearGradient id="scanLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="50%" stopColor="#00ff00" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="transparent"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#cyber-grid)"/>
        
        {/* Scanning lines */}
        <rect width="100%" height="2" fill="url(#scanLine)" className="animate-pulse">
          <animateTransform attributeName="transform" type="translate" values="0,-100;0,700;0,-100" dur="4s" repeatCount="indefinite"/>
        </rect>
        <rect width="2" height="100%" fill="url(#scanLine)" className="animate-pulse">
          <animateTransform attributeName="transform" type="translate" values="-100,0;900,0;-100,0" dur="6s" repeatCount="indefinite"/>
        </rect>
        
        {/* Digital connections */}
        <g stroke="#00ff00" strokeWidth="1" opacity="0.4">
          <path d="M50 50 L750 100 L700 500 L100 450 Z" fill="none" className="animate-pulse"/>
          <path d="M100 100 L700 50 L750 400 L150 550 Z" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }}/>
          <path d="M200 300 Q400 200 600 300 Q400 400 200 300" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }}/>
        </g>
      </svg>
    </div>
    
    {/* Enhanced glowing orbs with hover effects */}
    <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl animate-pulse hover:bg-cyan-400/15 transition-all duration-1000"></div>
    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-400/8 rounded-full blur-2xl animate-pulse hover:bg-blue-400/15 transition-all duration-1000" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-400/8 rounded-full blur-xl animate-pulse hover:bg-green-400/15 transition-all duration-1000" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-blue-400/8 rounded-full blur-2xl animate-pulse hover:bg-blue-400/15 transition-all duration-1000" style={{ animationDelay: '3s' }}></div>
  </div>
);