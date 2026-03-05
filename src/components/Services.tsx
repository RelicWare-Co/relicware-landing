import { OverseerCore } from './OverseerCore';
import './Services.css';

export const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <OverseerCore />
      
      <div className="cyber-container services-content">
        <h2 className="services-title">VECTORES DE OPERACIÓN</h2>
        
        <div className="services-grid">
          {/* Service 1 */}
          <div className="corpo-card service-card">
            <h3>1. DESARROLLO WEB</h3>
            <p className="service-desc">
              Interfaces públicas de alta conversión. Optimizamos su presencia en la red global asegurando velocidad y persuasión corporativa sin fricciones.
            </p>
            <ul className="service-features">
              <li className="service-feature">
                <span>▪</span> Sistemas React & Next.js
              </li>
              <li className="service-feature">
                <span>▪</span> Interfaces Psicológicamente Optimizadas
              </li>
              <li className="service-feature">
                <span>▪</span> Rendimiento de Grado Militar
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="corpo-card service-card">
            <h3>2. SOFTWARE A MEDIDA</h3>
            <p className="service-desc">
              Despliegue de sistemas internos avanzados. Elevamos la jerarquía operativa de su empresa mediante plataformas estructurales centralizadas.
            </p>
            <ul className="service-features">
              <li className="service-feature">
                <span>▪</span> Arquitecturas Escalables
              </li>
              <li className="service-feature">
                <span>▪</span> Bóvedas de Datos Secure
              </li>
              <li className="service-feature">
                <span>▪</span> Interconexión de APIs Estricta
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="corpo-card service-card highlight">
            <h3>3. CIBERSEGURIDAD</h3>
            <p className="service-desc">
              Defensa y contención. Implementamos protocolos defensivos de clase corporativa que mitigan cualquier intrusión o extracción no autorizada de activos.
            </p>
            <ul className="service-features">
              <li className="service-feature">
                <span>▪</span> Encriptación End-to-End
              </li>
              <li className="service-feature">
                <span>▪</span> Anulación de Amenazas
              </li>
              <li className="service-feature">
                <span>▪</span> Monitoreo Predictivo 24/7
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="corpo-card service-card">
            <h3>4. INTELIGENCIA AUTOMATIZADA</h3>
            <p className="service-desc">
              Sustitución de la dependencia humana. Integramos IA en sus flujos diarios para recortes de costos, optimización de márgenes y toma de decisiones.
            </p>
            <ul className="service-features">
              <li className="service-feature">
                <span>▪</span> Agentes Neurales
              </li>
              <li className="service-feature">
                <span>▪</span> Procesamiento de Lenguaje
              </li>
              <li className="service-feature">
                <span>▪</span> Previsión Analítica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};