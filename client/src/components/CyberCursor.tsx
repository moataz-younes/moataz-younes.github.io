import { FC, useEffect, useState } from 'react';

// Custom cybersecurity cursor component
export const CyberCursor: FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cyber-cursor') || target.closest('.cyber-cursor')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ${
        isHovering ? 'scale-150' : 'scale-100'
      }`}
      style={{
        transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
      }}
    >
      {/* Outer ring */}
      <div className="w-8 h-8 border-2 border-red-500/50 rounded-full animate-pulse">
        {/* Inner crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-0.5 bg-green-400/70"></div>
          <div className="absolute w-0.5 h-4 bg-green-400/70"></div>
        </div>
        {/* Scanning lines */}
        <div className="absolute inset-0 border border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
      </div>
      
      {/* Hover effect */}
      {isHovering && (
        <div className="absolute inset-0 w-8 h-8 border border-red-500 rounded-full animate-ping"></div>
      )}
    </div>
  );
};