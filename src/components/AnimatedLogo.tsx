
import { useEffect, useState, useRef } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo = ({ className = "w-40 h-40" }: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      const element = imgRef.current;
      if (element) {
        element.classList.add('pulse');
        setTimeout(() => {
          element.classList.remove('pulse');
        }, 1000);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`${className} flex justify-center items-center overflow-hidden relative`}>
      <img 
        ref={imgRef}
        src="https://cdn.poehali.dev/files/9ed925df-6d2a-48f4-b15b-fa865d358fb6.png" 
        alt="Momentum Logo"
        className={`
          max-w-full max-h-full object-contain
          ${isVisible ? 'animate-enter' : 'opacity-0'} 
          transition-all duration-700 ease-out
          hover:scale-105 hover:rotate-3 transition-transform
        `}
        style={{
          filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.1))`,
          animation: "float 6s ease-in-out infinite"
        }}
      />
      <div 
        className="absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-gray-100 to-transparent opacity-70"
        style={{
          transform: "translateY(50%)",
          animation: "wave 8s ease-in-out infinite"
        }}
      />
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes wave {
          0% { transform: translateY(50%) scaleX(0.95); }
          50% { transform: translateY(45%) scaleX(1.05); }
          100% { transform: translateY(50%) scaleX(0.95); }
        }
        
        .pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};
