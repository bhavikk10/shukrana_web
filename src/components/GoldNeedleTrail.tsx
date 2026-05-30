import React, { useEffect, useRef } from 'react';

export const GoldNeedleTrail = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
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

    const points: { x: number; y: number; alpha: number; angle: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      if (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      ) {
        points.push({
          x: e.clientX,
          y: e.clientY,
          alpha: 1,
          angle: Math.random() * 45 * (Math.PI / 180), // 0 to 45 degrees
        });
        
        if (points.length > 40) {
            points.shift();
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        
        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        // Setup blur and shadow
        ctx.shadowColor = 'rgba(212,175,55,1)';
        ctx.shadowBlur = 8;
        ctx.filter = 'blur(1px)';
        ctx.fillStyle = '#D4AF37'; // gold
        
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        
        // draw rounded rect w-1 h-3 is roughly 4x12 pixels
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(-2, -6, 4, 12, 2);
        } else {
            // Fallback if roundRect is not supported
            ctx.rect(-2, -6, 4, 12);
        }
        ctx.fill();
        ctx.restore();
        
        p.alpha -= 0.02; // Fade out roughly matches duration-1000 with 60fps
        
        if (p.alpha <= 0) {
            points.splice(i, 1);
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
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
      style={{ clipPath: 'inset(0)' }}
    />
  );
};
