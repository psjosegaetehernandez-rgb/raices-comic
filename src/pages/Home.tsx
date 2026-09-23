import { Link } from 'react-router-dom';
import { AMPROFooter } from '../components/AMPROFooter';
import './Home.css';

export function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Un regalo para AMPRO Tarapacá</p>
        <h1 className="home__title">Raíces</h1>
        <p className="home__subtitle">Un viaje de migración y resistencia</p>
        <p className="home__lead">
          Un cómic sobre las migraciones latinoamericanas, basado en
          testimonios reales y teoría crítica. Ilustrado en acuarela.
        </p>
        <Link to="/capitulo/cap1" className="home__cta">
          Comenzar a leer →
        </Link>
      </section>

      <section className="home__chapters">
        <h2 className="home__chapters-title">Capítulos disponibles</h2>
        <ul className="home__chapter-list">
          <li className="home__chapter-item">
            <Link to="/capitulo/cap1" className="home__chapter-link">
              <span className="home__chapter-num">01</span>
              <div className="home__chapter-info">
                <h3 className="home__chapter-title">La Frontera Vertical</h3>
                <p className="home__chapter-meta">
                  Amaru · Frontera Chile-Bolivia
                </p>
              </div>
              <span className="home__chapter-arrow">→</span>
            </Link>
          </li>
          <li className="home__chapter-item">
            <Link to="/capitulo/cap2" className="home__chapter-link">
              <span className="home__chapter-num">02</span>
              <div className="home__chapter-info">
                <h3 className="home__chapter-title">El Campamento que Respira</h3>
                <p className="home__chapter-meta">
                  Tatiana · Campamento Renacer, Alto Hospicio
                </p>
              </div>
              <span className="home__chapter-arrow">→</span>
            </Link>
          </li>
          <li className="home__chapter-item">
            <Link to="/capitulo/cap3" className="home__chapter-link">
              <span className="home__chapter-num">03</span>
              <div className="home__chapter-info">
                <h3 className="home__chapter-title">Las Raíces Cruzan la Cordillera</h3>
                <p className="home__chapter-meta">
                  Killa · Entre Bolivia y Chile
                </p>
              </div>
              <span className="home__chapter-arrow">→</span>
            </Link>
          </li>
        </ul>
      </section>

      <AMPROFooter />
    </main>
  );
}