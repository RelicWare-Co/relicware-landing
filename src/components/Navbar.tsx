export const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      borderBottom: '1px solid var(--corpo-border)',
      zIndex: 1000,
      backdropFilter: 'blur(10px)'
    }}>
      <div className="cyber-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 1.5rem',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Faux Corpo Logo Icon */}
          <div style={{
            width: '30px',
            height: '30px',
            backgroundColor: 'var(--corpo-red)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }} />
          <div style={{
            fontFamily: 'var(--font-logo)',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '5px'
          }}>
            RELICWARE
          </div>
        </div>

        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '3rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#hero" style={{ fontFamily: 'var(--font-logo)', fontWeight: '500', fontSize: '0.9rem', letterSpacing: '2px' }}>INICIO</a></li>
          <li><a href="#clientes" style={{ fontFamily: 'var(--font-logo)', fontWeight: '500', fontSize: '0.9rem', letterSpacing: '2px' }}>ALIADOS</a></li>
          <li><a href="#servicios" style={{ fontFamily: 'var(--font-logo)', fontWeight: '500', fontSize: '0.9rem', letterSpacing: '2px' }}>SERVICIOS</a></li>
          <li><a href="#beneficios" style={{ fontFamily: 'var(--font-logo)', fontWeight: '500', fontSize: '0.9rem', letterSpacing: '2px' }}>VENTAJA TÁCTICA</a></li>
          <li><a href="#contacto" style={{ 
            color: 'var(--corpo-red)', 
            fontFamily: 'var(--font-logo)', 
            fontWeight: '600', 
            fontSize: '0.9rem', 
            letterSpacing: '2px' 
          }}>CONTACTO_SECURE</a></li>
        </ul>
      </div>
    </nav>
  );
};
