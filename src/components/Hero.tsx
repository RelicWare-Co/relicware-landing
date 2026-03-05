export const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px',
      backgroundColor: 'var(--corpo-dark)',
      overflow: 'hidden'
    }}>
      {/* Sleek Corporate Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(230, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 0, 0, 0.03) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        zIndex: 0
      }} />

      {/* Red Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(230, 0, 0, 0.05) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="cyber-container" style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-logo)',
          color: 'var(--corpo-red)',
          letterSpacing: '5px',
          marginBottom: '1rem',
          fontSize: '0.9rem'
        }}>
          // INICIANDO PROTOCOLO PRINCIPAL
        </p>

        <h1 className="corpo-glitch" data-text="RELICWARE" style={{ 
          marginBottom: '0.5rem',
          color: 'var(--text-primary)',
          fontSize: '5rem',
          letterSpacing: '10px'
        }}>
          RELICWARE
        </h1>
        
        <h3 style={{
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          marginBottom: '3rem',
          textTransform: 'uppercase',
          letterSpacing: '8px',
          fontWeight: 300
        }}>
          Control Absoluto. <span style={{ color: 'var(--corpo-red)' }}>Dominio a través del código.</span>
        </h3>
        
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '550px',
          marginBottom: '4rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8
        }}>
          Forjamos el software del mañana. Construimos la infraestructura digital que tu corporación necesita para ejercer control total sobre sus operaciones y mantener la ventaja competitiva en el mercado global.
        </p>
        
        <button className="corpo-button primary">
          ESTABLECER ENLACE
        </button>
      </div>

      {/* Side Decorative Lines */}
      <div style={{
        position: 'absolute',
        right: '3rem',
        bottom: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        opacity: 0.5
      }}>
        <div style={{ width: '1px', height: '100px', backgroundColor: 'var(--corpo-red)' }} />
        <span style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-logo)', fontSize: '0.8rem', letterSpacing: '4px' }}>
          SYS.V.9.4
        </span>
      </div>
    </section>
  );
};
