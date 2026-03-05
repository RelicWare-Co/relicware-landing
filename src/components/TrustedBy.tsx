export const TrustedBy = () => {
  return (
    <section id="clientes" style={{ 
      backgroundColor: 'var(--corpo-dark)', 
      padding: '4rem 0',
      borderTop: '1px solid var(--corpo-border)',
      borderBottom: '1px solid var(--corpo-border)'
    }}>
      <div className="cyber-container">
        <h3 style={{ 
          textAlign: 'center', 
          color: 'var(--text-muted)', 
          marginBottom: '3rem', 
          fontSize: '0.8rem', 
          letterSpacing: '5px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-logo)'
        }}>
          Corporaciones que operan bajo nuestra infraestructura
        </h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '5rem', 
          opacity: 0.5 
        }}>
          {/* Stark, minimalist corporate names */}
          <span style={{ fontFamily: 'var(--font-logo)', fontSize: '1.2rem', letterSpacing: '6px' }}>NEXUS<span style={{color: 'var(--corpo-red)'}}>.</span>SYS</span>
          <span style={{ fontFamily: 'var(--font-logo)', fontSize: '1.2rem', letterSpacing: '4px', border: '1px solid currentColor', padding: '0.5rem 1rem' }}>MILITECH_IND</span>
          <span style={{ fontFamily: 'var(--font-logo)', fontSize: '1.5rem', letterSpacing: '8px', fontWeight: 'bold' }}>KANG TAO</span>
          <span style={{ fontFamily: 'var(--font-logo)', fontSize: '1.2rem', letterSpacing: '4px' }}>// OMNI_STAT</span>
        </div>
      </div>
    </section>
  );
};
