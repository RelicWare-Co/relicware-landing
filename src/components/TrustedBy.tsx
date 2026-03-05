import { NetworkStream } from './NetworkStream';
import './TrustedBy.css';

export const TrustedBy = () => {
  return (
    <section id="clientes" className="trusted-section">
      <NetworkStream />
      <div className="cyber-container trusted-content">
        <h3 className="trusted-title">
          Corporaciones que operan bajo nuestra infraestructura
        </h3>
        <div className="trusted-logos">
          {/* Stark, minimalist corporate names */}
          <span className="trusted-logo logo-nexus">NEXUS<span className="dot-red">.</span>SYS</span>
          <span className="trusted-logo logo-militech">MILITECH_IND</span>
          <span className="trusted-logo logo-kangtao">KANG TAO</span>
          <span className="trusted-logo logo-omni">// OMNI_STAT</span>
        </div>
      </div>
    </section>
  );
};