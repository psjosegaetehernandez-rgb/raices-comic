// src/components/DownloadPdfButton.tsx
import './DownloadPdfButton.css';

const PDF_URL = '/raices-comic-completo.pdf';

export function DownloadPdfButton() {
  return (
    <section className="download-pdf">
      <div className="download-pdf__inner">
        <p className="download-pdf__eyebrow">Llévate el cómic contigo</p>
        <h3 className="download-pdf__title">
          Descarga la edición completa
        </h3>
        <p className="download-pdf__lead">
          Los cinco capítulos en un solo archivo PDF, listo para leer sin
          conexión o para imprimir con cuatro viñetas por hoja.
        </p>
        <a
          href={PDF_URL}
          download
          className="download-pdf__cta"
        >
          <span className="download-pdf__icon" aria-hidden="true">📄</span>
          Descargar el cómic completo
          <span className="download-pdf__meta">PDF · 10 MB</span>
        </a>
        <p className="download-pdf__hint">
          Publicación comunitaria AMPRO Tarapacá · CC BY-NC-SA 4.0
        </p>
      </div>
    </section>
  );
}