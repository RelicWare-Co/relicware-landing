import { useEffect, useRef, useState } from 'react';
import './MasterCore.css';

export const MasterCore = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [actValue, setActValue] = useState("000.0");

  useEffect(() => {
    const actInterval = setInterval(() => {
      setActValue((Math.random() * 900 + 100).toFixed(1));
    }, 500);
    return () => clearInterval(actInterval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    let width = 500;
    let height = 500;

    const resize = () => {
      // Use parent container dimensions
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);
      }
    };
    
    resize();
    window.addEventListener('resize', resize);

    // 3D Geometry settings
    const layers = 8;
    const sides = 8; // Octagon server core
    const radius = 120;
    const rowHeight = 40;
    const yOffset = -(layers * rowHeight) / 2;

    // Pre-calculate node positions relative to center
    const nodes: { x: number, y: number, z: number }[] = [];
    for (let i = 0; i < layers; i++) {
      for (let j = 0; j < sides; j++) {
        const angle = (j / sides) * Math.PI * 2;
        nodes.push({
          x: Math.cos(angle) * radius,
          y: yOffset + i * rowHeight, // Vertical axis is Y
          z: Math.sin(angle) * radius
        });
      }
    }

    // Active faces (blinking server blocks)
    const activeFaces = new Set<string>();
    setInterval(() => {
      // Randomly turn on/off some "server panels"
      activeFaces.clear();
      const numActive = Math.floor(Math.random() * 8) + 4; // 4 to 11 active blocks
      for(let k=0; k<numActive; k++) {
        const l = Math.floor(Math.random() * (layers-1));
        const s = Math.floor(Math.random() * sides);
        activeFaces.add(`${l}-${s}`);
      }
    }, 800);

    let angleY = 0;
    const tiltX = 0.4; // Fixed isometric tilt
    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw background HUD rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.4); // Isometric projection for the circles
      ctx.rotate(-angleY * 0.5);
      
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(230, 0, 0, 0.3)';
      ctx.lineWidth = 1;
      ctx.arc(0, 0, radius + 60, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.setLineDash([20, 15, 5, 10]);
      ctx.strokeStyle = 'rgba(230, 0, 0, 0.6)';
      ctx.lineWidth = 2;
      ctx.arc(0, 0, radius + 80, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Transform nodes to 2D
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);

      const projected = nodes.map(node => {
        // Rotate around Y axis
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y1 = node.y;

        // Rotate around X axis (Tilt)
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = z1 * cosX + y1 * sinX;

        // Simple perspective projection
        const fov = 600;
        const scale = fov / (fov + z2 + 200);

        return {
          px: cx + x1 * scale,
          py: cy + y2 * scale,
          z: z2,
          scale: scale
        };
      });

      // Construct faces for depth sorting (Painter's algorithm)
      const faces = [];
      for (let i = 0; i < layers - 1; i++) {
        for (let j = 0; j < sides; j++) {
          const n1 = i * sides + j;
          const n2 = i * sides + ((j + 1) % sides);
          const n3 = (i + 1) * sides + ((j + 1) % sides);
          const n4 = (i + 1) * sides + j;

          const p1 = projected[n1];
          const p2 = projected[n2];
          const p3 = projected[n3];
          const p4 = projected[n4];

          const zAvg = (p1.z + p2.z + p3.z + p4.z) / 4;

          faces.push({
            id: `${i}-${j}`,
            z: zAvg,
            pts: [p1, p2, p3, p4],
            isActive: activeFaces.has(`${i}-${j}`)
          });
        }
      }

      // Sort faces by depth (furthest first)
      faces.sort((a, b) => b.z - a.z);

      // Draw faces
      faces.forEach(face => {
        ctx.beginPath();
        ctx.moveTo(face.pts[0].px, face.pts[0].py);
        ctx.lineTo(face.pts[1].px, face.pts[1].py);
        ctx.lineTo(face.pts[2].px, face.pts[2].py);
        ctx.lineTo(face.pts[3].px, face.pts[3].py);
        ctx.closePath();

        // Fill color based on depth and activity
        const depthFactor = Math.max(0, 1 - (face.z + 100) / 300); // darker further away
        
        if (face.isActive) {
          ctx.fillStyle = `rgba(230, 0, 0, ${0.4 * depthFactor + 0.3})`;
          ctx.fill();
          // Active neon border
          ctx.strokeStyle = `rgba(255, 100, 100, ${0.9 * depthFactor})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgba(10, 10, 10, ${0.8 * depthFactor})`;
          ctx.fill();
          // Normal wireframe
          ctx.strokeStyle = `rgba(230, 0, 0, ${0.2 * depthFactor + 0.05})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw Central Laser Beam
      ctx.beginPath();
      // Calculate top and bottom center
      ctx.moveTo(cx, cy - (layers * rowHeight * 0.5));
      ctx.lineTo(cx, cy + (layers * rowHeight * 0.5));
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.lineWidth = 3 + Math.random() * 2; // Flickering laser
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#e60000';
      ctx.stroke();
      ctx.shadowBlur = 0; // reset

      // Orbital Data Nodes
      const time = Date.now() * 0.001;
      const orbits = 3;
      for (let o = 0; o < orbits; o++) {
        const oRadius = radius + 40 + o * 20;
        const oAngle = time * (1 + o * 0.5) + (o * Math.PI / 2);
        
        // Convert to 3D and project
        const ox = Math.cos(oAngle) * oRadius;
        const oz = Math.sin(oAngle) * oRadius;
        const oy = 0 + Math.sin(time * 2 + o) * 30; // Float up and down
        
        const oz1 = oz * cosX + oy * sinX;
        const oy1 = oy * cosX - oz * sinX;
        
        const fov = 600;
        const scale = fov / (fov + oz1 + 200);
        
        const opx = cx + ox * scale;
        const opy = cy + oy1 * scale;

        ctx.beginPath();
        ctx.arc(opx, opy, 3 * scale, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      angleY += 0.003; // Rotation speed
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="master-core-wrapper">
      {/* HUD Frame details */}
      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>
      
      <div className="hud-tag act-tag">
        <span className="blink">ACT:</span> {actValue}
      </div>
      <div className="hud-tag sec-tag">SEC: APEX</div>
      
      <canvas ref={canvasRef} className="master-core-canvas" />
    </div>
  );
};
