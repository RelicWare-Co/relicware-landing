import { OverseerCore } from './OverseerCore';

export const Services = () => {
  return (
    <section id="servicios" style={{ backgroundColor: 'var(--corpo-dark)', position: 'relative', overflow: 'hidden' }}>
      <OverseerCore />
      
      <div className="cyber-container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ textShadow: '0 0 10px rgba(230,0,0,0.5)' }}>VECTORES DE OPERACIÓN</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          marginTop: '4rem'
        }}>
          {/* Service 1 */}
          <div className="corpo-card">
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
              1. DESARROLLO WEB
            </h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Interfaces públicas de alta conversión. Optimizamos su presencia en la red global asegurando velocidad y persuasión corporativa sin fricciones.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#aaa' }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Sistemas React & Next.js
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Interfaces Psicológicamente Optimizadas
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Rendimiento de Grado Militar
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="corpo-card">
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
              2. SOFTWARE A MEDIDA
            </h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Despliegue de sistemas internos avanzados. Elevamos la jerarquía operativa de su empresa mediante plataformas estructurales centralizadas.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#aaa' }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Arquitecturas Escalables
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Bóvedas de Datos Secure
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Interconexión de APIs Estricta
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="corpo-card" style={{ borderTop: '1px solid var(--corpo-red)' }}>
            <h3 style={{ color: 'var(--corpo-red)', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
              3. CIBERSEGURIDAD
            </h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Defensa y contención. Implementamos protocolos defensivos de clase corporativa que mitigan cualquier intrusión o extracción no autorizada de activos.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#aaa' }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Encriptación End-to-End
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Anulación de Amenazas
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Monitoreo Predictivo 24/7
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="corpo-card">
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-logo)' }}>
              4. INTELIGENCIA AUTOMATIZADA
            </h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Sustitución de la dependencia humana. Integramos IA en sus flujos diarios para recortes de costos, optimización de márgenes y toma de decisiones.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#aaa' }}>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Agentes Neurales
              </li>
              <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Procesamiento de Lenguaje
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: 'var(--corpo-red)', marginRight: '10px', fontSize: '1.2rem' }}>▪</span>
                Previsión Analítica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
