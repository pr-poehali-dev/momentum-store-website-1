
import { useEffect, useState } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo = ({ className = "w-40 h-40" }: AnimatedLogoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Последовательно показываем элементы логотипа
    const timer1 = setTimeout(() => setStage(1), 300);
    const timer2 = setTimeout(() => setStage(2), 800);
    const timer3 = setTimeout(() => setStage(3), 1300);
    const timer4 = setTimeout(() => setStage(4), 1800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  
  return (
    <div className={`${className} flex justify-center items-center overflow-hidden relative border border-black rounded-md p-4`}>
      {/* Логотип, разделенный на части */}
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Первая буква M */}
        <div 
          className={`absolute transition-all duration-700 ease-out transform ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{
            left: '20%',
            filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.1))`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H20V60L40 40V5H60V60L40 80H20L5 60V5Z" fill="black" />
          </svg>
        </div>
        
        {/* Вторая буква M */}
        <div 
          className={`absolute transition-all duration-700 ease-out transform ${
            stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{
            filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.1))`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H20V60L40 40V5H60V60L40 80H20L5 60V5Z" fill="black" />
          </svg>
        </div>
        
        {/* Третья буква M */}
        <div 
          className={`absolute transition-all duration-700 ease-out transform ${
            stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{
            right: '20%',
            filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.1))`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H20V60L40 40V5H60V60L40 80H20L5 60V5Z" fill="black" />
          </svg>
        </div>
        
        {/* Текст "MOMENTUM" */}
        <div 
          className={`absolute transition-all duration-700 ease-out transform ${
            stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            bottom: '10%',
            filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.1))`,
          }}
        >
          <div className="text-black font-bold text-lg tracking-wider">MOMENTUM</div>
        </div>
        
        {/* Полный логотип (скрытый, но нужен для размеров) */}
        <img 
          src="https://cdn.poehali.dev/files/9ed925df-6d2a-48f4-b15b-fa865d358fb6.png" 
          alt="Momentum Logo"
          className="opacity-0 max-w-full max-h-full object-contain"
        />
      </div>
      
      {/* Эффект волны под логотипом */}
      <div 
        className={`absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-gray-100 to-transparent opacity-70 transform ${isVisible ? 'opacity-70' : 'opacity-0'}`}
        style={{
          transform: "translateY(50%)",
          animation: stage >= 4 ? "wave 8s ease-in-out infinite" : "none",
        }}
      />
      
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateY(50%) scaleX(0.95); }
          50% { transform: translateY(45%) scaleX(1.05); }
          100% { transform: translateY(50%) scaleX(0.95); }
        }
      `}</style>
    </div>
  );
};
