export const Benefits = () => {
  return (
    <section id="beneficios" style={{ backgroundColor: 'var(--corpo-panel)', position: 'relative' }}>
      {/* Imposing Red Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        backgroundColor: 'var(--corpo-red)'
      }} />

      <div className="cyber-container" style={{ paddingLeft: '5rem', position: 'relative' }}>
        <p style={{ color: 'var(--corpo-red)', fontFamily: 'var(--font-logo)', letterSpacing: '4px', marginBottom: '1rem', fontSize: '0.9rem' }}>
          // POR QUÉ RELICWARE
        </p>
        <h2 style={{ marginBottom: '5rem', color: 'var(--text-primary)' }}>SU VENTAJA TÁCTICA</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem',
          maxWidth: '800px'
        }}>
          {/** Benefit 1 */}
          <div style={{ position: 'relative', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{
              color: 'var(--corpo-border)',
              fontSize: '6rem',
              fontFamily: 'var(--font-logo)',
              lineHeight: 0.8,
              fontWeight: 700
            }}>01</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '2px' }}>INFRAESTRUCTURA DE IMPACTO</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Nuestros stacks tecnológicos son inquebrantables. Su plataforma nunca sufrirá tiempos de inactividad mientras desplaza a competidores menores del mercado.
              </p>
            </div>
          </div>

          {/** Benefit 2 */}
          <div style={{ position: 'relative', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{
              color: 'var(--corpo-border)',
              fontSize: '6rem',
              fontFamily: 'var(--font-logo)',
              lineHeight: 0.8,
              fontWeight: 700
            }}>02</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '2px' }}>EFICIENCIA DESPIADADA</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Se acabó el diseño sin propósito. Estructuramos arquitecturas de software obsesionadas con la utilidad y la acumulación de datos para su beneficio exclusivo.
              </p>
            </div>
          </div>

          {/** Benefit 3 */}
          <div style={{ position: 'relative', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{
              color: 'var(--corpo-red)',
              fontSize: '6rem',
              fontFamily: 'var(--font-logo)',
              lineHeight: 0.8,
              fontWeight: 700,
              opacity: 0.2
            }}>03</div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '2px' }}>SILENCIO Y SEGURIDAD</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Nuestros operativos corporativos mantienen su negocio al margen de amenazas. La información de su red se mantiene clasificada y fuera del alcance público.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
