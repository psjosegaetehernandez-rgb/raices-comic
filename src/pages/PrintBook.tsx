// src/pages/PrintBook.tsx
// Vista del libro completo para generar el PDF unificado:
//   Página 1: Portada del cómic
//   Página 2: Introducción + créditos
//   Capítulos: portada cap + 2 paneles (3 imágenes), luego 4 paneles por hoja
//   Última página: cierre con logo AMPRO
import { capitulo1 } from '../data/chapters/cap1';
import { capitulo2 } from '../data/chapters/cap2';
import { capitulo3 } from '../data/chapters/cap3';
import { capitulo4 } from '../data/chapters/cap4';
import { capitulo5 } from '../data/chapters/cap5';
import type { Chapter } from '../data/types';
import '../styles/print-book.css';

const BOOK_CHAPTERS: Chapter[] = [capitulo1, capitulo2, capitulo3, capitulo4, capitulo5];

type AnyPanel = {
  id?: string;
  image?: string;
  imageAlt?: string;
  caption?: string;
  narration?: string;
  dialogues?: Array<{ character?: string; text: string }>;
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function PanelCell({ panel }: { panel: AnyPanel }) {
  return (
    <div className="pb-cell">
      {panel.caption && <div className="pb-cell__caption">{panel.caption}</div>}
      {panel.image && (
        <div className="pb-cell__img">
          <img src={panel.image} alt={panel.imageAlt || ''} />
        </div>
      )}
      <div className="pb-cell__body">
        {panel.narration && <p className="pb-cell__narration">{panel.narration}</p>}
        {panel.dialogues && panel.dialogues.length > 0 && (
          <div className="pb-cell__dialogues">
            {panel.dialogues.map((d, i) => (
              <p key={i} className="pb-cell__dialogue">
                {d.character && <strong>{d.character}: </strong>}
                {d.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BookCover() {
  return (
    <section className="pb-page pb-page--cover">
      <div className="pb-cover">
        <p className="pb-cover__eyebrow">AMPRO Tarapacá · Publicación comunitaria</p>
        <h1 className="pb-cover__title">Raíces</h1>
        <p className="pb-cover__subtitle">Un viaje de migración y resistencia</p>
        <div className="pb-cover__divider" />
        <p className="pb-cover__lead">
          Cinco historias de personas migrantes que han echado raíces
          en el norte de Chile. Un cómic sobre memoria, resistencia
          y comunidad.
        </p>
        <div className="pb-cover__logos">
          <img src="/ampro-logo.jpg" alt="AMPRO Tarapacá" />
        </div>
        <p className="pb-cover__author">José Luis Gaete Hernández</p>
      </div>
    </section>
  );
}

function BookIntro() {
  return (
    <section className="pb-page pb-page--intro">
      <div className="pb-intro">
        <h2 className="pb-intro__title">Introducción</h2>
        <p className="pb-intro__lead">
          <strong>Raíces — Un viaje de migración y resistencia</strong> es un cómic
          digital que narra las historias de cinco personas migrantes que han
          llegado al norte de Chile. Cada capítulo sigue a un protagonista
          distinto, con su propia voz, su propio dolor y su propia forma de
          echar raíces en tierra nueva.
        </p>
        <p className="pb-intro__text">
          Esta obra constituye una publicación de la <strong>Asamblea Abierta
          de Migrantes y Promigrantes de Tarapacá (AMPRO Tarapacá)</strong> y se
          entrega como un regalo sin fines comerciales para la comunidad.
          Busca servir como herramienta pedagógica y de memoria colectiva,
          abriendo conversaciones sobre movilidad, identidad y derechos
          humanos desde una mirada íntima y humana.
        </p>

        <h3 className="pb-intro__section">Los cinco capítulos</h3>
        <ul className="pb-intro__list">
          <li><strong>I. La Frontera Vertical</strong> — Amaru — <em>Movilidad y frontera</em></li>
          <li><strong>II. El Campamento que Respira</strong> — Tatiana — <em>Vivienda y comunidad</em></li>
          <li><strong>III. Las Raíces Cruzan la Cordillera</strong> — Killa — <em>Identidad y transnacionalismo</em></li>
          <li><strong>IV. El Color del Papel</strong> — Yusmary — <em>Racialización y burocracia</em></li>
          <li><strong>V. La Escuela del Silencio</strong> — Daniel — <em>Infancia migrante</em></li>
        </ul>

        <h3 className="pb-intro__section">Sobre esta edición</h3>
        <p className="pb-intro__text">
          Cada capítulo se presenta con su portada y sus paneles distribuidos
          de modo que puedan imprimirse con eficiencia: cuatro viñetas por
          hoja, con excepción de la primera página de cada capítulo, que
          incluye la portada y dos viñetas adicionales.
        </p>

        <div className="pb-intro__meta">
          <p><strong>Autor:</strong> José Luis Gaete Hernández</p>
          <p><strong>Ilustraciones:</strong> Generadas con IA (Bing Image Creator)</p>
          <p><strong>Destinatario:</strong> AMPRO Tarapacá</p>
          <p><strong>Licencia del contenido:</strong> CC BY-NC-SA 4.0</p>
          <p><strong>Licencia del código:</strong> MIT</p>
        </div>
      </div>
    </section>
  );
}

function BookChapter({ chapter }: { chapter: Chapter }) {
  const allPanels: AnyPanel[] = chapter.pages.flatMap((p) => p.panels as AnyPanel[]);
  const coverPanels = allPanels.slice(0, 2);
  const remaining = allPanels.slice(2);
  const groups = chunk(remaining, 4);

  return (
    <>
      {/* Página inicial del capítulo: portada + 2 paneles */}
      <section className="pb-page pb-page--chapter-open">
        <header className="pb-chapter-head">
          <p className="pb-chapter-head__num">Capítulo {chapter.number}</p>
          <h2 className="pb-chapter-head__title">{chapter.title}</h2>
          {chapter.subtitle && <p className="pb-chapter-head__sub">{chapter.subtitle}</p>}
        </header>
        <div className="pb-chapter-cover">
          <img src={chapter.visual.cover} alt={chapter.title} />
        </div>
        <div className="pb-chapter-open-grid">
          {coverPanels.map((p, i) => (
            <PanelCell key={i} panel={p} />
          ))}
        </div>
        <footer className="pb-page-footer">
          Raíces · Cap. {chapter.number} · {chapter.protagonist}
        </footer>
      </section>

      {/* Páginas siguientes: 4 paneles por hoja */}
      {groups.map((group, gi) => (
        <section key={gi} className="pb-page">
          <div className="pb-grid-2x2">
            {group.map((p, pi) => (
              <PanelCell key={pi} panel={p} />
            ))}
            {Array.from({ length: 4 - group.length }).map((_, k) => (
              <div key={`empty-${k}`} className="pb-cell pb-cell--empty" />
            ))}
          </div>
          <footer className="pb-page-footer">
            Raíces · Cap. {chapter.number} · {chapter.protagonist} · pág. {gi + 2}
          </footer>
        </section>
      ))}
    </>
  );
}

function BookEnding() {
  return (
    <section className="pb-page pb-page--ending">
      <div className="pb-ending">
        <p className="pb-ending__quote">
          "Donde la plantes, echarás raíces."
        </p>
        <div className="pb-ending__divider" />
        <img src="/ampro-logo.jpg" alt="AMPRO Tarapacá" className="pb-ending__logo" />
        <h3 className="pb-ending__org">AMPRO Tarapacá</h3>
        <p className="pb-ending__full">
          Asamblea Abierta de Migrantes y Promigrantes
        </p>
        <p className="pb-ending__message">
          Por la defensa de los derechos de las personas migrantes.
        </p>
        <div className="pb-ending__divider" />
        <p className="pb-ending__credits">
          Raíces — Un viaje de migración y resistencia<br />
          José Luis Gaete Hernández · 2026<br />
          Publicación CC BY-NC-SA 4.0 · Código MIT
        </p>
      </div>
    </section>
  );
}

export default function PrintBook() {
  return (
    <div className="pb-root">
      <BookCover />
      <BookIntro />
      {BOOK_CHAPTERS.map((ch) => (
        <BookChapter key={ch.id} chapter={ch} />
      ))}
      <BookEnding />
    </div>
  );
}