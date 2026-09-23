import type { Dialogue } from '../data/types';
import './DialogueBubble.css';

interface Props {
  dialogue: Dialogue;
}

export function DialogueBubble({ dialogue }: Props) {
  const { character, text, position, style = 'speech' } = dialogue;

  return (
    <div
      className={`bubble bubble--${position} bubble--${style}`}
      role="note"
      aria-label={`${character} dice:`}
    >
      <span className="bubble__character">{character}</span>
      <p className="bubble__text">{text}</p>
      <span className="bubble__tail" aria-hidden="true" />
    </div>
  );
}