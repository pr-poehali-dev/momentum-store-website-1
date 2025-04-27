
import { useEffect, useRef } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo = ({ className = "w-40 h-40" }: AnimatedLogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Adjust canvas CSS size
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.03;
      
      // Clear canvas
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw the main logo
      ctx.save();
      drawLogo(ctx, rect.width / 2, rect.height * 0.4, 1);
      ctx.restore();
      
      // Draw reflection with ripple effect
      ctx.save();
      
      // Create clipping path for reflection (bottom half)
      ctx.beginPath();
      ctx.rect(0, rect.height * 0.45, rect.width, rect.height * 0.55);
      ctx.clip();
      
      // Apply water effect transformation
      for (let i = 0; i < 5; i++) {
        ctx.save();
        
        // Add ripple effect
        const amplitude = 2 + i * 0.4;
        const frequency = 0.15 - i * 0.01;
        const phase = time + i * 0.2;
        
        // Apply wave distortion
        ctx.translate(
          Math.sin(phase * 0.7) * amplitude, 
          Math.sin(phase) * amplitude
        );
        
        // Draw reflected logo with scale and opacity
        ctx.globalAlpha = 0.3 - i * 0.05;
        ctx.scale(1, -1); // Flip vertically
        ctx.translate(0, -rect.height * 0.8); // Position reflection
        drawLogo(ctx, rect.width / 2, rect.height * 0.4, 1);
        
        ctx.restore();
      }
      
      ctx.restore();
      
      // Add "MOMENTUM" text below
      ctx.save();
      ctx.fillStyle = '#000';
      ctx.font = 'bold 16px serif';
      ctx.textAlign = 'center';
      ctx.fillText('MOMENTUM', rect.width / 2, rect.height * 0.8);
      ctx.restore();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Function to draw the "MMM" logo in Dior-like style
  const drawLogo = (
    ctx: CanvasRenderingContext2D, 
    centerX: number, 
    centerY: number, 
    scale: number
  ) => {
    const size = 30 * scale;
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${size}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add slight letter spacing for Dior-like appearance
    const letterSpacing = size * 0.2;
    
    // Position each M letter separately for fine control
    ctx.fillText('M', centerX - letterSpacing, centerY);
    ctx.fillText('M', centerX, centerY);
    ctx.fillText('M', centerX + letterSpacing, centerY);
  };
  
  return (
    <canvas 
      ref={canvasRef} 
      className={className}
    />
  );
};
