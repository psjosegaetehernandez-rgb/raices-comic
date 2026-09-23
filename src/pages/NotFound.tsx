import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '120px',
          fontWeight: 900,
          color: 'var(--earth-terracotta)',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: '24px',
          color: 'var(--ink-soft)',
          marginBottom: '32px',
        }}
      >
        Esta pagina no existe (o aun no la escribimos).
      </p>
      <Link
        to="/"
        style={{
          padding: '16px 32px',
          backgroundColor: 'var(--ink)',
          color: 'var(--paper-cream)',
          fontWeight: 600,
          borderRadius: 'var(--radius-md)',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}