import './AMPROFooter.css';

export function AMPROFooter() {
  return (
    <footer className="ampro-footer">
      <div className="ampro-footer__inner">
        <img
          src="/ampro-logo.jpg"
          alt="Logo de AMPRO Tarapacá"
          className="ampro-footer__logo"
        />

        <p className="ampro-footer__dedication">
          Este cómic es un regalo para la
        </p>

        <p className="ampro-footer__org">
          Asamblea Abierta de Migrantes y Promigrantes
          <br />
          <strong>AMPRO Tarapacá</strong>
        </p>

        <p className="ampro-footer__message">
          Por la defensa de los derechos de las personas migrantes.
        </p>

        <div className="ampro-footer__divider" aria-hidden="true" />

        <p className="ampro-footer__license">
          Contenido bajo licencia{' '}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>
          <br />
          Código bajo licencia MIT
        </p>
      </div>
    </footer>
  );
}