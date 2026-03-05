import { useEffect, useRef } from 'react';

export const OverseerCore = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }
    };

    window.addEventListener('resize', resize);
    resize();

    // Utility for drawing glowing text
    const drawTelemetry = (x: number, y: number, text: string, alpha: number) => {
      ctx.fillStyle = `rgba(230, 0, 0, ${alpha})`;
      ctx.font = '10px monospace';
      ctx.fillText(text, x, y);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const cx = width / 2;
      const cy = height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      // 1. Faint Background Hexagonal Matrix
      ctx.strokeStyle = 'rgba(230, 0, 0, 0.02)';
      ctx.lineWidth = 1;
      const hexRadius = 60;
      const hexWidth = Math.sqrt(3) * hexRadius;
      const hexHeight = 2 * hexRadius;
      
      const cols = Math.ceil(width / hexWidth) + 2;
      const rows = Math.ceil(height / hexHeight) + 2;
      
      for (let i = -cols/2; i <= cols/2; i++) {
        for (let j = -rows/2; j <= rows/2; j++) {
          let x = i * hexWidth + (j % 2 === 0 ? 0 : hexWidth / 2);
          let y = j * hexHeight * 0.75;
          
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (Math.PI / 3) * k + (time * 0.1); // Slow hex rotation
            const hx = x + hexRadius * 0.9 * Math.cos(angle);
            const hy = y + hexRadius * 0.9 * Math.sin(angle);
            if (k === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      // 2. Giant Counter-Rotating Radar Rings
      for (let r = 1; r <= 5; r++) {
        ctx.save();
        const baseRadius = 80 + r * 70;
        // The pulsing radius effect
        const radius = baseRadius + Math.sin(time * 5 + r) * 5;
        
        ctx.rotate(time * (r % 2 === 0 ? 0.3 : -0.2) * r);
        
        ctx.beginPath();
        ctx.setLineDash([15 * r, 20 * r, 5, 30]);
        ctx.strokeStyle = `rgba(230, 0, 0, ${0.05 + (0.03 * r)})`;
        ctx.lineWidth = 1 + r * 0.5;
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Data nodes on the rings
        const numNodes = 4 + r * 2;
        for (let a = 0; a < Math.PI * 2; a += Math.PI * 2 / numNodes) {
            const dx = Math.cos(a) * radius;
            const dy = Math.sin(a) * radius;
            
            // Pulsing node
            const nodeAlpha = 0.2 + Math.max(0, Math.sin(time * 10 + a + r)) * 0.6;
            ctx.fillStyle = `rgba(255, 50, 50, ${nodeAlpha})`;
            ctx.fillRect(dx - 3, dy - 3, 6, 6);
            
            // Telemetry lines projecting outward from some nodes
            if (r > 2 && a % (Math.PI) < 0.1) {
              ctx.beginPath();
              ctx.moveTo(dx, dy);
              const extX = Math.cos(a) * (radius + 40);
              const extY = Math.sin(a) * (radius + 40);
              ctx.lineTo(extX, extY);
              ctx.strokeStyle = `rgba(230, 0, 0, ${nodeAlpha * 0.5})`;
              ctx.setLineDash([]);
              ctx.lineWidth = 1;
              ctx.stroke();
              
              drawTelemetry(extX + 5, extY + 5, `VEC-${r}x${Math.floor(nodeAlpha*100)}`, nodeAlpha);
            }
        }
        ctx.restore();
      }

      // 3. Central AI Brain / Neural Swarm
      const numParticles = 250;
      for (let i = 0; i < numParticles; i++) {
        const angle = i * 0.1375 + time; // Golden ratio spread roughly
        // Particles move in and out like a breathing lung
        const rDist = (i / numParticles) * 90 + Math.sin(time * 4 + i * 0.05) * 30;
        const px = Math.cos(angle) * rDist;
        const py = Math.sin(angle) * rDist;

        ctx.fillStyle = `rgba(255, 50, 50, ${0.8 - i/numParticles})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Neural connections
        if (i % 4 === 0) {
          ctx.strokeStyle = `rgba(230, 0, 0, ${0.15 * (1 - i/numParticles)})`;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(0, 0); // connect to center
          ctx.stroke();
        }
      }

      // 4. Central Core
      ctx.beginPath();
      const coreRadius = 20 + Math.sin(time * 12) * 6; // Fast heartbeat
      ctx.arc(0, 0, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 0, 0, ${0.6 + Math.sin(time * 12) * 0.4})`;
      ctx.shadowBlur = 40;
      ctx.shadowColor = '#ff0000';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Inner intense core point
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      // 5. Global Crosshairs & Targeting Brackets
      ctx.save();
      ctx.rotate(time * 0.1);
      
      // Infinite thin scanner lines
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-Math.max(width, height), 0);
      ctx.lineTo(Math.max(width, height), 0);
      ctx.moveTo(0, -Math.max(width, height));
      ctx.lineTo(0, Math.max(width, height));
      ctx.stroke();
      
      // Dynamic Targeting Brackets framing the core
      const bracketDist = 220 + Math.sin(time * 2) * 30;
      const bSize = 40;
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(230, 0, 0, 0.4)';
      
      // Top Left
      ctx.beginPath(); ctx.moveTo(-bracketDist, -bracketDist + bSize); ctx.lineTo(-bracketDist, -bracketDist); ctx.lineTo(-bracketDist + bSize, -bracketDist); ctx.stroke();
      // Top Right
      ctx.beginPath(); ctx.moveTo(bracketDist, -bracketDist + bSize); ctx.lineTo(bracketDist, -bracketDist); ctx.lineTo(bracketDist - bSize, -bracketDist); ctx.stroke();
      // Bottom Left
      ctx.beginPath(); ctx.moveTo(-bracketDist, bracketDist - bSize); ctx.lineTo(-bracketDist, bracketDist); ctx.lineTo(-bracketDist + bSize, bracketDist); ctx.stroke();
      // Bottom Right
      ctx.beginPath(); ctx.moveTo(bracketDist, bracketDist - bSize); ctx.lineTo(bracketDist, bracketDist); ctx.lineTo(bracketDist - bSize, bracketDist); ctx.stroke();
      
      // Bracket text
      drawTelemetry(bracketDist - 50, -bracketDist - 10, "TARGET.LOCK", 0.6);
      drawTelemetry(-bracketDist, bracketDist + 20, "SYS.OVERRIDE", 0.6);

      ctx.restore();
      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      opacity: 0.6,
      mixBlendMode: 'screen'
    }}>
      <canvas 
        ref={canvasRef} 
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
      {/* Grid overlay for classic scanlines over the brutal animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'repeating-linear-gradient(transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};
