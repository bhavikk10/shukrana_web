import { useEffect, useRef } from 'react';

export default function CursorEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const particles: { x: number; y: number; size: number; alpha: number; vx: number; vy: number }[] = [];
    
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 5) {
        // Spawn particles based on distance
        const amount = Math.min(Math.floor(dist / 10), 3);
        for(let i=0; i<amount; i++) {
            particles.push({
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 1.5 + 0.5,
                alpha: 0.8,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1 + 0.5, // slight drift down
            });
        }
      }
      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#D4AF37'; // Golden Dust
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.04; // Fade out rapidly
        
        if (p.alpha <= 0) {
            particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[99999]"
      style={{ mixBlendMode: 'screen' }} 
    />
  );
}
