import { DialogueBubble } from './DialogueBubble';
import { NarrativeBox } from './NarrativeBox';
import type { Panel } from '../data/types';
import './ComicPanel.css';

interface Props {
  panel: Panel;
  onDecision?: (decisionId: string) => void;
  isDecisionResolved?: boolean;
}

export function ComicPanel({ panel, onDecision, isDecisionResolved }: Props) {
  const isDecision = Boolean(panel.decisionId);
  const showDecisionPrompt = isDecision && !isDecisionResolved;

  const handleClick = () => {
    if (panel.decisionId && onDecision) {
      onDecision(panel.decisionId);
    }
  };

  return (
    <figure
      className={[
        'comic-panel',
        `comic-panel--${panel.layout}`,
        isDecision ? 'comic-panel--decision' : '',
        isDecisionResolved ? 'comic-panel--resolved' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={showDecisionPrompt ? handleClick : undefined}
      style={{ cursor: showDecisionPrompt ? 'pointer' : 'default' }}
    >
      <div className="comic-panel__image-wrap">
        <img
          src={panel.image}
          alt={panel.imageAlt}
          className="comic-panel__image"
        />

        {panel.caption && (
          <figcaption className="comic-panel__caption">
            {panel.caption}
          </figcaption>
        )}

        {panel.dialogues?.map((d) => (
          <DialogueBubble key={d.id} dialogue={d} />
        ))}

        {panel.narrativeBoxes?.map((b, i) => (
          <NarrativeBox key={i} box={b} />
        ))}

        {showDecisionPrompt && (
          <div className="comic-panel__decision-badge">
            <span className="comic-panel__decision-icon">◆</span>
            <span className="comic-panel__decision-text">Tomar una decisión</span>
          </div>
        )}

        {isDecisionResolved && (
          <div className="comic-panel__resolved-badge">
            <span>✓</span>
            <span>Decisión tomada</span>
          </div>
        )}
      </div>

      {panel.narration && (
        <div className="comic-panel__narration">
          <p>{panel.narration}</p>
        </div>
      )}
    </figure>
  );
}