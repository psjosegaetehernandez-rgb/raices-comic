import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ComicPanel } from '../components/ComicPanel';
import { DecisionModal } from '../components/DecisionModal';
import { AMPROFooter } from '../components/AMPROFooter';
import { capitulo1 } from '../data/chapters/cap1';
import { capitulo2 } from '../data/chapters/cap2';
import type { Chapter, Decision, DecisionOption } from '../data/types';
import './ChapterReader.css';

const CHAPTERS: Record<string, Chapter> = {
  cap1: capitulo1,
  cap2: capitulo2,
};

export function ChapterReader() {
  const { chapterId = 'cap1' } = useParams();
  const chapter = CHAPTERS[chapterId];

  const [progress, setProgress] = useState(0);
  const [activeDecision, setActiveDecision] = useState<Decision | null>(null);
  const [resolvedDecision, setResolvedDecision] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapterId]);

  const handleDecisionOpen = (decisionId: string) => {
    if (resolvedDecision === decisionId) return;
    const decision = chapter?.decisions?.find((d) => d.id === decisionId);
    if (decision) setActiveDecision(decision);
  };

  const handleDecisionChoose = (option: DecisionOption) => {
    if (activeDecision) {
      setResolvedDecision(activeDecision.id);
    }
    setActiveDecision(null);
    console.log('Decision tomada:', option.id, '-', option.text);
  };

  const handleDecisionClose = () => {
    setActiveDecision(null);
  };

  if (!chapter) {
    return (
      <div className="reader__notfound">
        <h1>Capitulo no encontrado</h1>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const chapterIds = Object.keys(CHAPTERS);
  const currentIndex = chapterIds.indexOf(chapter.id);
  const prevChapter = currentIndex > 0 ? chapterIds[currentIndex - 1] : null;
  const nextChapter =
    currentIndex < chapterIds.length - 1 ? chapterIds[currentIndex + 1] : null;

  return (
    <>
      <div
        className="reader__progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <article className="reader">
        <header className="reader__header">
          <div className="reader__cover">
            <img
              src={chapter.visual.cover}
              alt={`Portada del capitulo ${chapter.number}: ${chapter.title}`}
              className="reader__cover-image"
            />
            <div className="reader__cover-overlay" aria-hidden="true" />
            <div className="reader__cover-content">
              <p className="reader__chapter-number">
                Capitulo {chapter.number}
              </p>
              <h1 className="reader__title">{chapter.title}</h1>
              <p className="reader__subtitle">{chapter.subtitle}</p>
              <p className="reader__meta">
                {chapter.protagonist} · {chapter.location} ·{' '}
                {chapter.estimatedMinutes} min
              </p>
            </div>
          </div>
        </header>

        <div className="reader__pages">
          {chapter.pages.map((page) => (
            <section
              key={page.id}
              className={`reader__page reader__page--${page.layout}`}
            >
              {page.panels.map((panel) => (
                <ComicPanel
                  key={panel.id}
                  panel={panel}
                  onDecision={handleDecisionOpen}
                  isDecisionResolved={
                    panel.decisionId
                      ? resolvedDecision === panel.decisionId
                      : undefined
                  }
                />
              ))}
            </section>
          ))}
        </div>

        <div className="reader__download">
          <p className="reader__download-text">
            Quieres guardar este capitulo o imprimirlo?
          </p>
          <a
            href="/raices-capitulo-1.pdf"
            download="Raices-Capitulo-1.pdf"
            className="reader__download-btn"
          >
            Descargar PDF
          </a>
        </div>

        <nav className="reader__nav" aria-label="Navegacion entre capitulos">
          {prevChapter ? (
            <Link to={`/capitulo/${prevChapter}`} className="reader__nav-link">
              ← Cap. anterior
            </Link>
          ) : (
            <Link to="/" className="reader__nav-link">
              ← Volver al inicio
            </Link>
          )}
          <span className="reader__nav-current">
            Cap. {chapter.number} de 30
          </span>
          {nextChapter ? (
            <Link to={`/capitulo/${nextChapter}`} className="reader__nav-link">
              Cap. siguiente →
            </Link>
          ) : (
            <button className="reader__nav-link" disabled>
              Cap. siguiente →
            </button>
          )}
        </nav>
      </article>

      {activeDecision && (
        <DecisionModal
          decision={activeDecision}
          onChoose={handleDecisionChoose}
          onClose={handleDecisionClose}
        />
      )}

      <AMPROFooter />
    </>
  );
}