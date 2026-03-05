import { MasterCore } from './MasterCore';
import './Hero.css';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Sleek Corporate Background */}
      <div className="hero-bg-grid" />

      {/* Red Ambient Glow */}
      <div className="hero-bg-glow" />

      <div className="cyber-container hero-content">
        {/* Left Column: Text */}
        <div className="hero-text-col">
          <p className="hero-protocol-text">
            // INICIANDO PROTOCOLO PRINCIPAL
          </p>

          <h1 className="corpo-glitch hero-title" data-text="RELICWARE">
            RELICWARE
          </h1>
          
          <h3 className="hero-subtitle">
            Control Absoluto. <span>Dominio a través del código.</span>
          </h3>
          
          <p className="hero-desc">
            Forjamos el software del mañana. Construimos la infraestructura digital que tu corporación necesita para ejercer control total sobre sus operaciones y mantener la ventaja competitiva en el mercado global.
          </p>
          
          <button className="corpo-button primary">
            ESTABLECER ENLACE
          </button>
        </div>

        {/* Right Column: Holographic Core Animation */}
        <div className="hero-visual-col">
          <MasterCore />
        </div>
      </div>

      {/* Side Decorative Lines */}
      <div className="hero-side-lines">
        <div className="hero-side-line-bar" />
        <span className="hero-side-text">
          SYS.V.9.4
        </span>
      </div>
    </section>
  );
};
