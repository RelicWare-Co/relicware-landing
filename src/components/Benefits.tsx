import './Benefits.css';

export const Benefits = () => {
  return (
    <section id="beneficios" className="benefits-section">
      {/* Imposing Red Line */}
      <div className="benefits-red-line" />

      <div className="cyber-container benefits-container">
        <p className="benefits-label">
          // POR QUÉ RELICWARE
        </p>
        <h2 className="benefits-title">SU VENTAJA TÁCTICA</h2>
        
        <div className="benefits-grid">
          {/** Benefit 1 */}
          <div className="benefit-item">
            <div className="benefit-number">01</div>
            <div className="benefit-content">
              <h3>INFRAESTRUCTURA DE IMPACTO</h3>
              <p>
                Nuestros stacks tecnológicos son inquebrantables. Su plataforma nunca sufrirá tiempos de inactividad mientras desplaza a competidores menores del mercado.
              </p>
            </div>
          </div>

          {/** Benefit 2 */}
          <div className="benefit-item">
            <div className="benefit-number">02</div>
            <div className="benefit-content">
              <h3>EFICIENCIA DESPIADADA</h3>
              <p>
                Se acabó el diseño sin propósito. Estructuramos arquitecturas de software obsesionadas con la utilidad y la acumulación de datos para su beneficio exclusivo.
              </p>
            </div>
          </div>

          {/** Benefit 3 */}
          <div className="benefit-item">
            <div className="benefit-number highlight">03</div>
            <div className="benefit-content">
              <h3>SILENCIO Y SEGURIDAD</h3>
              <p>
                Nuestros operativos corporativos mantienen su negocio al margen de amenazas. La información de su red se mantiene clasificada y fuera del alcance público.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};