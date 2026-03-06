import './Footer.css';

export const Footer = () => {
  return (
    <footer id="contacto" className="footer-section">
      <div className="cyber-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>
              RELICWARE<span className="dot-red">.</span>
            </h2>
            <p className="footer-status">
              &gt; CENTRAL_NODE_OFFLINE
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#" className="footer-btn">ENCRIPTAR_MENSAJE</a>
            <a href="#" className="footer-btn">RED_CORPORATIVA</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} RELICWARE MEGACORP. PROPIEDAD EXCLUSIVA.</div>
          <div className="footer-classified">[ DATA CLASSIFIED / DO NOT DISTRIBUTE ]</div>
        </div>
      </div>
    </footer>
  );
};