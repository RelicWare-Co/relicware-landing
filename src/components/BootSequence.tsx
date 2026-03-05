import { useState, useEffect, useRef } from 'react';
import './BootSequence.css';

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [showLogo, setShowLogo] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mainframe Data Rain Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブヅエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#e60000'; // Corpo Red
      ctx.font = `${fontSize}px "Courier New", monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Randomly make some characters white/brighter for effect
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ffffff';
        } else {
          ctx.fillStyle = '#e60000';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const sequenceLines = [
      "ESTABLISHING SECURE CONNECTION...",
      "BYPASSING ICE PROTOCOLS...",
      "SYNCING NEURAL LINK...",
      "DECRYPTING RELIC ENGRAMS...",
      "UPLOADING PRE-COG DATA...",
      "SYSTEM OVERRIDE SUCCESSFUL."
    ];

    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < sequenceLines.length) {
        setLogs(prev => [...prev, sequenceLines[currentLog]]);
        currentLog++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => setShowLogo(true), 500);
        setTimeout(() => setAccessGranted(true), 1500);
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(onComplete, 800);
        }, 3000);
      }
    }, 300);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  return (
    <div className={`boot-container ${fadingOut ? 'fade-out' : ''}`}>
      <canvas className="mainframe-canvas" ref={canvasRef}></canvas>
      
      <div className="core-reactor">
        <div className="reactor-ring ring-1"></div>
        <div className="reactor-ring ring-2"></div>
        <div className="reactor-ring ring-3"></div>
      </div>

      <div className="scanlines"></div>
      <div className="vignette"></div>
      
      <div className="boot-terminal">
        <div className="system-status">
          <span className="blink">SYS.V.10.4.5</span>
          <span className="auth-level">AUTH LEVEL: OMEGA</span>
        </div>
        
        <div className="terminal-logs">
          {logs.map((log, index) => (
            <div key={index} className="log-line">
              <span className="log-prefix">&gt;</span> {log}
            </div>
          ))}
          {!showLogo && <div className="cursor blink">_</div>}
        </div>

        {showLogo && (
          <div className="relicware-reveal">
            <h1 className="boot-logo" data-text="RELICWARE">RELICWARE</h1>
            <div className="subtitle-container">
              <span className="boot-subtitle tracking-widest text-[var(--text-muted)] mt-2 block">CORPORATE SECURITY & ASSET RECOVERY</span>
            </div>
            {accessGranted && (
              <div className="access-granted blink-fast">
                [ ACCESS GRANTED ]
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
