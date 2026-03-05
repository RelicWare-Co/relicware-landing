export const Footer = () => {
  return (
    <footer id="contacto" style={{
      backgroundColor: 'var(--corpo-dark)',
      borderTop: '2px solid var(--corpo-red)',
      padding: '5rem 0 2rem 0',
      color: 'var(--text-muted)'
    }}>
      <div className="cyber-container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '2rem', fontFamily: 'var(--font-logo)', letterSpacing: '8px', color: 'var(--text-primary)' }}>
              RELICWARE<span style={{ color: 'var(--corpo-red)' }}>.</span>
            </h2>
            <p style={{ marginTop: '0.5rem', fontFamily: 'var(--font-logo)', letterSpacing: '2px', fontSize: '0.8rem' }}>
              &gt; CENTRAL_NODE_OFFLINE
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ 
              fontSize: '0.9rem', 
              fontFamily: 'var(--font-logo)', 
              padding: '0.8rem 1.5rem', 
              border: '1px solid var(--corpo-border)',
              letterSpacing: '2px'
            }}>ENCRIPTAR_MENSAJE</a>
            <a href="#" style={{ 
              fontSize: '0.9rem', 
              fontFamily: 'var(--font-logo)', 
              padding: '0.8rem 1.5rem', 
              border: '1px solid var(--corpo-border)',
              letterSpacing: '2px'
            }}>RED_CORPORATIVA</a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--corpo-border)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-logo)',
          letterSpacing: '1px'
        }}>
          <div>© {new Date().getFullYear()} RELICWARE MEGACORP. PROPIEDAD EXCLUSIVA.</div>
          <div style={{ color: 'var(--corpo-red)', fontWeight: 'bold' }}>[ DATA CLASSIFIED / DO NOT DISTRIBUTE ]</div>
        </div>
      </div>
    </footer>
  );
};
