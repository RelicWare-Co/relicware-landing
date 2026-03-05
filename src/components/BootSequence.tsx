import { useState, useEffect } from 'react';
import './BootSequence.css';

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [showLogo, setShowLogo] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

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
